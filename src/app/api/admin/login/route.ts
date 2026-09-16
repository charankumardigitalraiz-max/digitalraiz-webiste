import { NextRequest, NextResponse } from "next/server";
import connectToDatabase from "@/lib/mongodb";
import Admin from "@/models/Admin";
import { ensureAdminSeeded } from "@/lib/seedAdmin";

const COOKIE_NAME = "dr_admin_session";

// GET: Check current authentication status
export async function GET(req: NextRequest) {
  const sessionCookie = req.cookies.get(COOKIE_NAME);
  const isAuthenticated = sessionCookie?.value === "authenticated";

  return NextResponse.json({
    authenticated: isAuthenticated,
  });
}

// POST: Authenticate admin user against MongoDB Database
export async function POST(req: NextRequest) {
  try {
    const body = await req.json().catch(() => ({}));
    const { username, password } = body;

    if (!username || !password) {
      return NextResponse.json(
        { success: false, error: "Username and password are required." },
        { status: 400 }
      );
    }

    const inputUsername = username.trim();

    // Auto-seed admin credentials into MongoDB if not present
    await ensureAdminSeeded();

    await connectToDatabase();
    let authenticated = false;

    // Search in MongoDB Admin collection
    const foundAdmin = await Admin.findOne({
      $or: [
        { username: new RegExp(`^${inputUsername}$`, "i") },
        { email: new RegExp(`^${inputUsername}$`, "i") },
      ],
    });

    if (foundAdmin && foundAdmin.passwordHash === password) {
      authenticated = true;
    }

    // Fallback environment check
    if (!authenticated) {
      const envUsername = (process.env.ADMIN_USERNAME || "admin").trim();
      const envPassword = process.env.ADMIN_PASSWORD || "DigitalRaiz2026!";
      if (
        (inputUsername.toLowerCase() === envUsername.toLowerCase() ||
          inputUsername.toLowerCase() === "admin@digitalraiz.com") &&
        password === envPassword
      ) {
        authenticated = true;
      }
    }

    if (authenticated) {
      const response = NextResponse.json({
        success: true,
        message: "Login successful.",
      });

      // Set HttpOnly session cookie valid for 24 hours
      response.cookies.set({
        name: COOKIE_NAME,
        value: "authenticated",
        httpOnly: true,
        path: "/",
        maxAge: 86400, // 24 hours
        sameSite: "lax",
      });

      return response;
    }

    return NextResponse.json(
      { success: false, error: "Invalid username or password." },
      { status: 401 }
    );
  } catch (error: any) {
    console.error("Admin Login Error:", error);
    return NextResponse.json(
      { success: false, error: "Internal server error during login." },
      { status: 500 }
    );
  }
}
