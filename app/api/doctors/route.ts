import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { verifyToken } from "@/lib/auth";
import bcrypt from "bcryptjs";

// GET - সব ডাক্তারের লিস্ট
export async function GET() {
  try {
    const doctors = await prisma.doctor.findMany({
      include: {
        user: {
          select: {
            id: true,
            name: true,
            email: true,
            phone: true,
          },
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    return NextResponse.json({ doctors });
  } catch (error) {
    console.error("Get doctors error:", error);
    return NextResponse.json(
      { error: "Failed to fetch doctors" },
      { status: 500 }
    );
  }
}

// POST - নতুন ডাক্তার যোগ (Admin only)
export async function POST(request: Request) {
  try {
    const authHeader = request.headers.get("authorization");
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const token = authHeader.substring(7);
    const decoded = verifyToken(token);

    if (!decoded || decoded.role !== "ADMIN") {
      return NextResponse.json({ error: "Admin access required" }, { status: 403 });
    }

    const body = await request.json();
    const {
      name,
      email,
      phone,
      specialization,
      qualification,
      experience,
      fee,
      availableDays,
      startTime,
      endTime,
      bio,
    } = body;

    if (!name || !email || !specialization) {
      return NextResponse.json(
        { error: "Name, email, and specialization are required" },
        { status: 400 }
      );
    }

    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return NextResponse.json(
        { error: "Email already registered" },
        { status: 400 }
      );
    }

    const hashedPassword = await bcrypt.hash("doctor123", 10);

    const result = await prisma.$transaction(async (tx) => {
      const user = await tx.user.create({
        data: {
          name,
          email,
          password: hashedPassword,
          phone: phone || null,
          role: "DOCTOR",
        },
      });

      const doctor = await tx.doctor.create({
        data: {
          userId: user.id,
          specialization,
          qualification: qualification || null,
          experience: experience ? parseInt(experience) : 0,
          fee: fee ? parseFloat(fee) : 500,
          availableDays: availableDays || "Sat,Sun,Mon,Tue,Wed,Thu",
          startTime: startTime || "10:00",
          endTime: endTime || "14:00",
          bio: bio || null,
        },
        include: {
          user: {
            select: {
              id: true,
              name: true,
              email: true,
              phone: true,
            },
          },
        },
      });

      return doctor;
    });

    return NextResponse.json({
      message: "Doctor added successfully",
      doctor: result,
      defaultPassword: "doctor123",
    });
  } catch (error) {
    console.error("Add doctor error:", error);
    return NextResponse.json(
      { error: "Failed to add doctor" },
      { status: 500 }
    );
  }
}