import { NextResponse } from "next/server";

function myFunction() {
  return NextResponse.json({ hello: "Hello, World!" });
}

export const GET = myFunction;
