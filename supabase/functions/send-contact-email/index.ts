import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import { Resend } from "npm:resend@4.0.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
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
    const formData: ContactFormData = await req.json();

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
          </style>
        </head>
        <body>
          <div class="header">
            <h1>🏠 New Contact Form Submission</h1>
            <p>Universal Housing Limited</p>
          </div>

          <div class="content">
            <div class="field">
              <span class="label">From:</span>
              <div class="value">${formData.name}</div>
            </div>

            <div class="field">
              <span class="label">Email:</span>
              <div class="value">${formData.email}</div>
            </div>

            <div class="field">
              <span class="label">Subject:</span>
              <div class="value">${formData.subject}</div>
            </div>

            <div class="field">
              <span class="label">Message:</span>
              <div class="value">${formData.message.replace(/\n/g, '<br>')}</div>
            </div>

            <div class="timestamp">
              Submitted: ${new Date().toLocaleString('en-US', {
                dateStyle: 'full',
                timeStyle: 'long'
              })}
            </div>
          </div>

          <div class="footer">
            <p>This is an automated message from your Universal Housing website contact form.</p>
            <p>Reply directly to this email to respond to ${formData.name}.</p>
          </div>
        </body>
      </html>
    `;

    const { data, error } = await resend.emails.send({
      from: "Universal Housing <onboarding@resend.dev>",
      to: "universal.m.sales@gmail.com",
      replyTo: formData.email,
      subject: `Contact Form: ${formData.subject}`,
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
