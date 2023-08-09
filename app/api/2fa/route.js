import { NextResponse } from "next/server";

export async function GET(request) {
  return NextResponse.json({ data: "your_data_here" });
}
