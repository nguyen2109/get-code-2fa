import { NextResponse } from "next/server";
import { connectToDB } from "./../../../../utils/database";
import Statics2fa from "./../../../../models/2fa";
import mongoose from "mongoose";

export async function GET(req, { params }) {
  const code = params.token;
  const res = await fetch(`https://2fa.live/tok/${code}`, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await res.json();

  return NextResponse.json(data);
}
// export async function POST(req, { params }) {
//   const code = params.token;
//   try {
//     // Kết nối đến MongoDB
//     await connectToDB();
//     await Statics2fa.create({ code });
//     return NextResponse.json({ msg: "Success" });
//   } catch (error) {
//     let errorList = [];
//     if (error instanceof mongoose.Error.ValidationError) {
//       for (let e in error.errors) {
//         errorList.push(error.errors[e].message);
//       }
//     }
//     return NextResponse.json({ error: errorList });
//   }
// }
