import { NextResponse } from "next/server";
import sendContactEmail from "@/lib/sendContactEmail";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, message } = body;

    await sendContactEmail({ name, email, message });

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: error as Error },
      { status: 500 }
    );
  }
}
