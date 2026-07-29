import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message body are required." },
        { status: 400 }
      );
    }

    const recipientEmail = "rizwanurahman321@gmail.com";
    const timestamp = new Date().toLocaleString("en-US", {
      timeZone: "Asia/Kolkata",
      dateStyle: "full",
      timeStyle: "medium",
    });

    const formattedMessage = `
=====================================================
⚡ NEW PORTFOLIO CONTACT INQUIRY
=====================================================

📌 SENDER METADATA:
-----------------------------------------------------
• Full Name : ${name}
• Email     : ${email}
• Subject   : ${subject || "Portfolio Contact Inquiry"}
• Timestamp : ${timestamp} IST

💬 MESSAGE PAYLOAD:
-----------------------------------------------------
${message}

=====================================================
🚀 Sent via Rizwanu Rahman Portfolio Terminal (POST /api/v1/contact)
=====================================================
`;

    // Post to FormSubmit AJAX service with table template and custom subject
    const res = await fetch(`https://formsubmit.co/ajax/${recipientEmail}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Origin: request.headers.get("origin") || "http://localhost:3000",
        Referer: request.headers.get("referer") || "http://localhost:3000/",
      },
      body: JSON.stringify({
        name,
        email,
        _subject: `⚡ [Portfolio Inquiry] ${subject || `Message from ${name}`}`,
        _template: "table",
        "Sender Name": name,
        "Sender Email": email,
        "Message Subject": subject || "Portfolio Contact Inquiry",
        "Timestamp (IST)": timestamp,
        "Message Payload": message,
        _replyto: email,
      }),
    });

    const data = await res.json();

    if (data.success === "true" || data.success === true) {
      return NextResponse.json({
        success: true,
        message: `HTTP 200 OK — Message sent successfully to ${recipientEmail}!`,
      });
    } else if (
      data.message &&
      data.message.toLowerCase().includes("activation")
    ) {
      return NextResponse.json({
        success: true,
        needsActivation: true,
        message: `Activation Pending: Check ${recipientEmail} inbox for the FormSubmit 'Activate Form' link! Once clicked, messages will arrive automatically.`,
      });
    } else {
      return NextResponse.json({
        success: true,
        fallbackMailto: true,
        message: `Message received! Redirecting to mail client...`,
      });
    }
  } catch (error) {
    console.error("Error in contact API:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
