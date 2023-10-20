import { NextRequest, NextResponse } from "next/server";
import mailchimp from "@mailchimp/mailchimp_marketing";

mailchimp.setConfig({
  apiKey: process.env.NEXT_PUBLIC_MAILCHIMP_API_KEY,
  server: process.env.NEXT_PUBLIC_MAILCHIMP_API_SERVER_PREFIX,
});

export async function POST(req: Request) {
  const { email } = await req.json();

  if (!email) {
    return NextResponse.json({ error: "Email is required" }, { status: 404 });
  }

  const MAILCHIMP_AUDIENCE_ID = process.env.NEXT_PUBLIC_MAILCHIMP_AUDIENCE_ID;

  try {
    const response = await mailchimp.lists.addListMember(
      MAILCHIMP_AUDIENCE_ID!,
      { email_address: email, status: "subscribed" }
    );
    return NextResponse.json({ response }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message || error.toString() });
  }
}
