import { NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"
const resend = new Resend(process.env.RESEND_API_KEY)
if (!process.env.RESEND_API_KEY) {
  console.error(
    "RESEND_API_KEY is not configured"
  )
}
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    const { name, phone, city, investmentRange, timestamp, source } = body

    // Validate required fields
    if (!name || !phone || !city || !investmentRange) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      )
    }

    // If GOOGLE_SHEETS_WEBHOOK_URL is configured, send data to Google Sheets
    const webhookUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL

    if (webhookUrl) {
      try {
        await fetch(webhookUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            Name: name,
            Phone: phone,
            City: city,
            "Investment Range": investmentRange,
            Timestamp: timestamp || new Date().toISOString(),
            Source: source || "Website",
          }),
        })
      } catch (webhookError) {
        console.error("Error sending to Google Sheets webhook:", webhookError)
        // Continue even if webhook fails - we don't want to break the user experience
      }
    }

    //Email sending Logic
    try {
      console.log("Starting email send...")
      // Add the required parameters or remove this redundant call
      const emailResult = await resend.emails.send({
        from: "onboarding@resend.dev",
        to: "kioskkingfoods@gmail.com",
        subject: `New Franchise Lead - ${city}`,
      
        html: `
        <div style="font-family: Arial; padding:20px">
          <h2>🚀 New Franchise Lead</h2>
      
          <table cellpadding="10">
            <tr>
              <td><b>Name</b></td>
              <td>${name}</td>
            </tr>
      
            <tr>
              <td><b>Phone</b></td>
              <td>${phone}</td>
            </tr>
      
            <tr>
              <td><b>City</b></td>
              <td>${city}</td>
            </tr>
      
            <tr>
              <td><b>Investment Range</b></td>
              <td>${investmentRange}</td>
            </tr>
      
            <tr>
              <td><b>Source</b></td>
              <td>${source}</td>
            </tr>
          </table>
        </div>
        `
      });
      console.log("Email result:", emailResult)
    } catch (emailError) {
      console.error(
        "[KIOSKKING] Email sending failed:",
        emailError
      )
    }

    //whatsapp notification logic
    console.log(
      "INTERAKT_KEY:",
      process.env.INTERAKT_KEY
    )
    const whatsappResponse = await fetch(
      "https://api.interakt.ai/v1/public/message/",
      {
        method: "POST",
        headers: {
          Authorization:
            `Basic ${process.env.INTERAKT_KEY}`,
          "Content-Type":
            "application/json",
        },
        body: JSON.stringify({
          phoneNumber: "917827339167",
    
          body:
          `New Franchise Lead
    
    Name: ${name}
    Phone: ${phone}
    City: ${city}
    Investment: ${investmentRange}`
        })
      }
    )
    const whatsappData =

  await whatsappResponse.text()

console.log(

  "WhatsApp Response:",

  whatsappData

)
  
  

    // Log the lead for debugging/development
    console.log("New franchise lead received:", {
      name,
      phone,
      city,
      investmentRange,
      timestamp,
      source,
    })

    return NextResponse.json({ 
      success: true,
      message: "Lead received successfully" 
    })
  } catch (error) {
    console.error(" Error processing franchise lead:", error)
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
}
