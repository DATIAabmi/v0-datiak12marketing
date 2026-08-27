import { type NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"

// Configured with marcomm API key
const resend = new Resend("re_3F9ULRnk_Asc46ckzJS8ic8E6Qywp5fAj")

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { firstName, lastName, email, company, phone, website, solutions, message } = body

    console.log("Attempting to send email with data:", { firstName, lastName, email, company })

    // Send email to DATIA team using marcomm API key
    // Note: API key is in testing mode, can only send to tcallan@datia.io
    const { data, error } = await resend.emails.send({
      from: "DATIA Contact Form <onboarding@resend.dev>",
      to: ["tcallan@datia.io"], // Changed to verified testing email
      reply_to: email, // Set reply-to as the form submitter's email
      subject: `New Contact Form Submission from ${firstName} ${lastName}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company}</p>
        ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ""}
        ${website ? `<p><strong>Website:</strong> ${website}</p>` : ""}
        ${solutions.length > 0 ? `<p><strong>Solutions of Interest:</strong> ${solutions.join(", ")}</p>` : ""}
        ${message ? `<p><strong>Message:</strong><br>${message.replace(/\n/g, "<br>")}</p>` : ""}
        <hr>
        <p><em>This email was sent from the DATIA website contact form.</em></p>
        <p><strong>Note:</strong> Please forward this to rdavis@datiak12.io as needed.</p>
      `,
    })

    if (error) {
      console.error("Resend API error:", error)
      return NextResponse.json(
        {
          error: "Failed to send email",
          details: error.message || "Unknown error",
        },
        { status: 500 },
      )
    }

    console.log("Email sent successfully:", data)
    return NextResponse.json({ success: true, data })
  } catch (error) {
    console.error("Error processing contact form:", error)
    return NextResponse.json(
      {
        error: "Internal server error",
        details: error.message || "Unknown error",
      },
      { status: 500 },
    )
  }
}
