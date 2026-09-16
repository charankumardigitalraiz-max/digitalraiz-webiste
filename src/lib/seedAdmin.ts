import connectToDatabase from "@/lib/mongodb";
import Admin from "@/models/Admin";

export async function ensureAdminSeeded() {
  try {
    await connectToDatabase();

    const envUsername = (process.env.ADMIN_USERNAME || "admin").trim();
    const envPassword = process.env.ADMIN_PASSWORD || "DigitalRaiz2026!";
    const defaultEmail = "admin@digitalraiz.com";

    const existingAdmin = await Admin.findOne({
      $or: [
        { username: new RegExp(`^${envUsername}$`, "i") },
        { email: new RegExp(`^${defaultEmail}$`, "i") },
      ],
    });

    if (!existingAdmin) {
      await Admin.create({
        username: envUsername,
        email: defaultEmail,
        passwordHash: envPassword,
        role: "superadmin",
      });
      console.log("SUCCESS: Initialized and seeded default Admin credentials into MongoDB database.");
    }
  } catch (error) {
    console.error("Warning: Failed to seed Admin credentials into MongoDB:", error);
  }
}
