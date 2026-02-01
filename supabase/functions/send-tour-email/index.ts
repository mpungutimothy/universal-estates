import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import { Resend } from "npm:resend@4.0.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

interface TourFormData {
  property_id: string;
  property_name: string;
  tour_type: string;
  tour_date: string;
  tour_time: string;
  name: string;
  phone: string;
  email: string;
  message: string;
}

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, {
      status: 200,
      headers: corsHeaders,
    });
  }

  try {
    const resendApiKey = Deno.env.get("RESEND_API_KEY");
    if (!resendApiKey) {
      throw new Error("RESEND_API_KEY is not configured");
    }

    const resend = new Resend(resendApiKey);
    const formData: TourFormData = await req.json();

    const tourDate = new Date(formData.tour_date);
    const formattedDate = tourDate.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });

    const emailHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body {
              font-family: 'Arial', sans-serif;
              line-height: 1.6;
              color: #333;
              max-width: 600px;
              margin: 0 auto;
              padding: 20px;
            }
            .header {
              background: linear-gradient(135deg, #FFD700 0%, #DC143C 100%);
              color: white;
              padding: 30px;
              text-align: center;
              border-radius: 10px 10px 0 0;
            }
            .header h1 {
              margin: 0;
              font-size: 24px;
            }
            .content {
              background: #f9f9f9;
              padding: 30px;
              border: 1px solid #ddd;
            }
            .field {
              margin-bottom: 20px;
            }
            .label {
              font-weight: bold;
              color: #DC143C;
              display: block;
              margin-bottom: 5px;
            }
            .value {
              color: #333;
              padding: 10px;
              background: white;
              border-left: 3px solid #FFD700;
              border-radius: 3px;
            }
            .tour-details {
              background: #fff3cd;
              border: 2px solid #FFD700;
              padding: 20px;
              margin: 20px 0;
              border-radius: 8px;
            }
            .tour-details h3 {
              margin-top: 0;
              color: #DC143C;
            }
            .tour-info {
              display: flex;
              align-items: center;
              margin: 10px 0;
            }
            .tour-info strong {
              min-width: 120px;
              color: #DC143C;
            }
            .footer {
              background: #333;
              color: white;
              padding: 20px;
              text-align: center;
              border-radius: 0 0 10px 10px;
              font-size: 12px;
            }
            .timestamp {
              color: #666;
              font-size: 12px;
              font-style: italic;
            }
            .property-badge {
              display: inline-block;
              background: #DC143C;
              color: white;
              padding: 5px 10px;
              border-radius: 5px;
              font-size: 12px;
              margin-top: 10px;
            }
          </style>
        </head>
        <body>
          <div class="header">
            <h1>📅 New Property Tour Booking</h1>
            <p>Universal Housing Limited</p>
          </div>

          <div class="content">
            <div class="tour-details">
              <h3>🏠 Tour Schedule Details</h3>
              <div class="tour-info">
                <strong>📍 Property:</strong>
                <span>${formData.property_name}</span>
              </div>
              <div class="tour-info">
                <strong>📹 Tour Type:</strong>
                <span>${formData.tour_type}</span>
              </div>
              <div class="tour-info">
                <strong>📆 Date:</strong>
                <span>${formattedDate}</span>
              </div>
              <div class="tour-info">
                <strong>🕐 Time:</strong>
                <span>${formData.tour_time}</span>
              </div>
              <div class="property-badge">Property ID: ${formData.property_id}</div>
            </div>

            <div class="field">
              <span class="label">Customer Name:</span>
              <div class="value">${formData.name}</div>
            </div>

            <div class="field">
              <span class="label">Phone Number:</span>
              <div class="value">${formData.phone}</div>
            </div>

            <div class="field">
              <span class="label">Email:</span>
              <div class="value">${formData.email}</div>
            </div>

            ${formData.message ? `
            <div class="field">
              <span class="label">Additional Message:</span>
              <div class="value">${formData.message.replace(/\n/g, '<br>')}</div>
            </div>
            ` : ''}

            <div class="timestamp">
              Booking Submitted: ${new Date().toLocaleString('en-US', {
                dateStyle: 'full',
                timeStyle: 'long'
              })}
            </div>
          </div>

          <div class="footer">
            <p>This is an automated message from your Universal Housing website tour booking system.</p>
            <p><strong>Action Required:</strong> Please contact ${formData.name} at ${formData.phone} or reply to this email to confirm the tour.</p>
          </div>
        </body>
      </html>
    `;

    const { data, error } = await resend.emails.send({
      from: "Universal Housing Tours <onboarding@resend.dev>",
      to: "universal.m.sales@gmail.com",
      replyTo: formData.email,
      subject: `Tour Booking: ${formData.property_name} - ${formattedDate} at ${formData.tour_time}`,
      html: emailHtml,
    });

    if (error) {
      throw error;
    }

    return new Response(
      JSON.stringify({ success: true, messageId: data?.id }),
      {
        status: 200,
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response(
      JSON.stringify({
        success: false,
        error: error instanceof Error ? error.message : "Unknown error"
      }),
      {
        status: 500,
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json",
        },
      }
    );
  }
});
