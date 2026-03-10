import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, phone, message, eventType } = body

    // Validate required fields
    if (!name || !phone || !message) {
      return NextResponse.json(
        { error: "Name, phone, and message are required" },
        { status: 400 }
      )
    }

    // Validate phone number format (Indian)
    const phoneRegex = /^[+]?[0-9]{10,13}$/
    if (!phoneRegex.test(phone.replace(/\s/g, ""))) {
      return NextResponse.json(
        { error: "Please provide a valid phone number" },
        { status: 400 }
      )
    }

    // Validate email if provided
    if (email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailRegex.test(email)) {
        return NextResponse.json(
          { error: "Please provide a valid email address" },
          { status: 400 }
        )
      }
    }

    // Sanitize inputs
    const sanitized = {
      name: name.trim().slice(0, 100),
      email: email?.trim().slice(0, 100) || "",
      phone: phone.trim().slice(0, 15),
      message: message.trim().slice(0, 1000),
      eventType: eventType?.trim().slice(0, 50) || "General Inquiry",
      timestamp: new Date().toISOString(),
    }

    // In a production environment, you would:
    // 1. Store in a database
    // 2. Send email notification to the VLN team
    // 3. Send WhatsApp notification via Twilio/API
    // 4. Log the inquiry for CRM
    //
    // For now, we log and return success
    console.log("New inquiry received:", sanitized)

    return NextResponse.json(
      {
        success: true,
        message:
          "Thank you for your inquiry! Our team will reach out to you within 24 hours.",
      },
      { status: 200 }
    )
  } catch {
    return NextResponse.json(
      { error: "Something went wrong. Please try contacting us via phone or WhatsApp." },
      { status: 500 }
    )
  }
}

export async function GET() {
  return NextResponse.json({
    business: "VLN Catering & Event Management",
    location: "Pune, Maharashtra, India",
    phone: "+91 98765 43210",
    email: "info@vlncatering.com",
    whatsapp: "https://wa.me/919876543210",
    iso: "ISO 22000:2018 Certified",
    services: [
      "Pure Veg Delicacies",
      "Traditional Sweets",
      "Live Cooking Counters",
      "Chaat & Street Food",
      "Corporate Catering",
      "Grand Event Catering",
    ],
    hours: {
      weekdays: "9:00 AM - 9:00 PM",
      sunday: "10:00 AM - 6:00 PM",
    },
  })
}
