import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import { Resend } from "npm:resend@4.0.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

interface ReviewFormData {
  property_id: string;
  property_name: string;
  email: string;
  rating: number;
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
    const formData: ReviewFormData = await req.json();

    const renderStars = (rating: number): string => {
      let stars = '';
      for (let i = 1; i <= 5; i++) {
        if (i <= rating) {
          stars += '⭐';
        } else {
          stars += '☆';
        }
      }
      return stars;
    };

    const ratingColor = formData.rating >= 4 ? '#50C878' : formData.rating >= 3 ? '#FFD700' : '#DC143C';

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
            .rating-box {
              background: white;
              border: 2px solid ${ratingColor};
              padding: 20px;
              margin: 20px 0;
              border-radius: 8px;
              text-align: center;
            }
            .rating-stars {
              font-size: 32px;
              margin: 10px 0;
            }
            .rating-score {
              font-size: 24px;
              font-weight: bold;
              color: ${ratingColor};
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
            <h1>⭐ New Property Review</h1>
            <p>Universal Housing Limited</p>
          </div>

          <div class="content">
            <div class="field">
              <span class="label">Property Reviewed:</span>
              <div class="value">
                ${formData.property_name}
                <div class="property-badge">Property ID: ${formData.property_id}</div>
              </div>
            </div>

            <div class="rating-box">
              <h3 style="margin-top: 0; color: #DC143C;">Customer Rating</h3>
              <div class="rating-stars">${renderStars(formData.rating)}</div>
              <div class="rating-score">${formData.rating}/5 Stars</div>
            </div>

            <div class="field">
              <span class="label">Reviewer Email:</span>
              <div class="value">${formData.email}</div>
            </div>

            <div class="field">
              <span class="label">Review Message:</span>
              <div class="value">${formData.message.replace(/\n/g, '<br>')}</div>
            </div>

            <div class="timestamp">
              Review Submitted: ${new Date().toLocaleString('en-US', {
                dateStyle: 'full',
                timeStyle: 'long'
              })}
            </div>
          </div>

          <div class="footer">
            <p>This is an automated message from your Universal Housing website review system.</p>
            <p>This review has been saved to your database and is now visible on the property page.</p>
            ${formData.rating <= 3 ? '<p style="color: #ffc107;"><strong>⚠️ Low Rating Alert:</strong> You may want to follow up with this customer.</p>' : ''}
          </div>
        </body>
      </html>
    `;

    const { data, error } = await resend.emails.send({
      from: "Universal Housing Reviews <onboarding@resend.dev>",
      to: "universal.m.sales@gmail.com",
      replyTo: formData.email,
      subject: `${formData.rating >= 4 ? '⭐' : '⚠️'} New Review: ${formData.property_name} - ${formData.rating}/5 Stars`,
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
