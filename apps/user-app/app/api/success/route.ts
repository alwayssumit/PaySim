// app/api/success/route.ts

import { NextRequest, NextResponse } from "next/server";
import { createOnRampTransaction } from "../../lib/actions/createOnRamptxn";


export async function POST(req: NextRequest) {
  const body = await req.json();
  const { amount, provider } = body;

  await createOnRampTransaction(Number(amount), provider, "Recieved");

  return NextResponse.json({ 
    success: true ,
    status:200,
  });
}
