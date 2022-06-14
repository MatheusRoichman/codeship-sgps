import { validateToken } from "../../../utils";
import { NextResponse } from 'next/server';

export async function middleware(req) {
  const token = req.headers.get("authorization");

  if (!token || !validateToken(token)) {
    return new Response(JSON.stringify({ message: 'INVALID_TOKEN' }), {
      status: 401,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  NextResponse.next();
}