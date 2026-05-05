import { NextRequest, NextResponse } from "next/server"

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
        console.error("[v0] Error sending to Google Sheets webhook:", webhookError)
        // Continue even if webhook fails - we don't want to break the user experience
      }
    }

    // Log the lead for debugging/development
    console.log("[v0] New franchise lead received:", {
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
    console.error("[v0] Error processing franchise lead:", error)
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
}
