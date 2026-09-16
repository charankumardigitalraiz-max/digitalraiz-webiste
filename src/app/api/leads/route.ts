import { NextRequest, NextResponse } from "next/server";
import connectToDatabase from "@/lib/mongodb";
import Lead from "@/models/Lead";

// GET: List lead inquiries with backend pagination, status filtering, and search
export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const page = Math.max(1, parseInt(searchParams.get("page") || "1", 10));
    const limit = Math.max(1, parseInt(searchParams.get("limit") || "10", 10));
    const status = searchParams.get("status") || "all";
    const search = searchParams.get("search") || "";

    await connectToDatabase();

    const query: any = {};

    // Filter by status if specified
    if (status && status !== "all") {
      const statusMap: Record<string, string> = {
        newinquiry: "New Inquiry",
        contacted: "Contacted",
        proposalsent: "Proposal Sent",
        closedwon: "Closed Won",
      };
      const normalizedStatus = statusMap[status.toLowerCase()] || status;
      query.status = normalizedStatus;
    }

    // Filter by search query across fields
    if (search.trim()) {
      const searchRegex = new RegExp(search.trim(), "i");
      query.$or = [
        { name: searchRegex },
        { email: searchRegex },
        { phone: searchRegex },
        { leadId: searchRegex },
        { service: searchRegex },
        { subject: searchRegex },
        { message: searchRegex },
      ];
    }

    const skip = (page - 1) * limit;

    const [leads, totalMatching, totalCount, newCount, contactedCount, proposalCount, closedCount] =
      await Promise.all([
        Lead.find(query).sort({ createdAt: -1 }).skip(skip).limit(limit).exec(),
        Lead.countDocuments(query),
        Lead.countDocuments({}),
        Lead.countDocuments({ status: "New Inquiry" }),
        Lead.countDocuments({ status: "Contacted" }),
        Lead.countDocuments({ status: "Proposal Sent" }),
        Lead.countDocuments({ status: "Closed Won" }),
      ]);

    const totalPages = Math.ceil(totalMatching / limit) || 1;

    return NextResponse.json({
      success: true,
      data: leads,
      pagination: {
        total: totalMatching,
        page,
        limit,
        totalPages,
      },
      counts: {
        total: totalCount,
        newInquiry: newCount,
        contacted: contactedCount,
        proposalSent: proposalCount,
        closedWon: closedCount,
      },
    });
  } catch (error: any) {
    console.error("Error fetching leads:", error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch lead inquiries." },
      { status: 500 }
    );
  }
}

// PATCH: Update lead status
export async function PATCH(req: NextRequest) {
  try {
    const body = await req.json();
    const { id, status } = body;

    if (!id || !status) {
      return NextResponse.json(
        { success: false, error: "Lead ID and status are required." },
        { status: 400 }
      );
    }

    await connectToDatabase();
    const updatedLead = await Lead.findByIdAndUpdate(
      id,
      { status },
      { new: true }
    );

    if (!updatedLead) {
      return NextResponse.json(
        { success: false, error: "Lead submission not found." },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Lead status updated successfully.",
      data: updatedLead,
    });
  } catch (error: any) {
    console.error("Error updating lead status:", error);
    return NextResponse.json(
      { success: false, error: "Failed to update lead status." },
      { status: 500 }
    );
  }
}

// DELETE: Delete lead entry
export async function DELETE(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json(
        { success: false, error: "Lead ID parameter is required." },
        { status: 400 }
      );
    }

    await connectToDatabase();
    const deletedLead = await Lead.findByIdAndDelete(id);

    if (!deletedLead) {
      return NextResponse.json(
        { success: false, error: "Lead not found." },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Lead deleted successfully.",
    });
  } catch (error: any) {
    console.error("Error deleting lead:", error);
    return NextResponse.json(
      { success: false, error: "Failed to delete lead." },
      { status: 500 }
    );
  }
}
