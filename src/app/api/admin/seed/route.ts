import { NextRequest, NextResponse } from "next/server";
import connectToDatabase from "@/lib/mongodb";
import Admin from "@/models/Admin";

export async function GET() {
  try {
    await connectToDatabase();
    const count = await Admin.countDocuments({});
    const admins = await Admin.find({}, { username: 1, email: 1, role: 1, createdAt: 1 });

    return NextResponse.json({
      success: true,
      count,
      data: admins,
    });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: "Failed to check admin credentials in database." },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    await connectToDatabase();
    const body = await req.json().catch(() => ({}));
    
    const username = (body.username || process.env.ADMIN_USERNAME || "admin").trim();
    const password = body.password || process.env.ADMIN_PASSWORD || "DigitalRaiz2026!";
    const email = body.email || "admin@digitalraiz.com";
    const role = body.role || "superadmin";

    // Upsert admin user into database
    const updatedAdmin = await Admin.findOneAndUpdate(
      {
        $or: [
          { username: new RegExp(`^${username}$`, "i") },
          { email: new RegExp(`^${email}$`, "i") },
        ],
      },
      {
        username,
        email,
        passwordHash: password,
        role,
      },
      { upsert: true, new: true, setDefaultsOnInsert: true }
    );

    return NextResponse.json({
      success: true,
      message: "Admin credentials successfully pushed and saved in MongoDB database.",
      admin: {
        id: updatedAdmin._id,
        username: updatedAdmin.username,
        email: updatedAdmin.email,
        role: updatedAdmin.role,
      },
    });
  } catch (error: any) {
    console.error("Failed to push admin credentials into MongoDB:", error);
    return NextResponse.json(
      { success: false, error: "Failed to seed admin credentials into database: " + error.message },
      { status: 500 }
    );
  }
}
