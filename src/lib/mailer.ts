import nodemailer from "nodemailer";

export const RECIPIENT_EMAILS = [
  "info@digitalraiz.com",
  "digitalraizinst@gmail.com",
  "hr@digitalraiz.com",
  "charanpalimara@gmail.com",
];

export interface LeadNotificationPayload {
  leadId: string;
  name: string;
  email: string;
  phone: string;
  subject?: string;
  service?: string;
  message: string;
}

const COMMON_FONT_STACK = "'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif";
const MONO_FONT_STACK = "'JetBrains Mono', SFMono-Regular, Consolas, 'Liberation Mono', Menlo, monospace";

// 1. Light Template for General Contact Inquiries with Refined Typography
function generateGeneralContactTemplate(payload: LeadNotificationPayload): string {
  const mailSubject = encodeURIComponent(`RE: Digital Raiz Contact Inquiry [${payload.leadId}]`);
  const mailToUrl = `mailto:${payload.email}?subject=${mailSubject}`;
  const phoneUrl = `tel:${payload.phone.replace(/[^0-9+]/g, "")}`;

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Contact Inquiry - Digital Raiz</title>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=JetBrains+Mono:wght@600;700&display=swap" rel="stylesheet">
</head>
<body style="margin: 0; padding: 0; background-color: #f1f5f9; font-family: ${COMMON_FONT_STACK}; -webkit-font-smoothing: antialiased; color: #0f172a;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color: #f1f5f9; padding: 30px 10px;">
    <tr>
      <td align="center">
        <!-- Main Card Container -->
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="max-width: 600px; background-color: #ffffff; border: 1px solid #cbd5e1; text-align: left; box-shadow: 0 4px 12px rgba(15, 23, 42, 0.05);">
          
          <!-- Top Header Bar -->
          <tr>
            <td style="background-color: #0f172a; padding: 22px 28px; border-bottom: 4px solid #db2777;">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
                <tr>
                  <td align="left">
                    <div style="font-size: 24px; font-weight: 800; color: #ffffff; letter-spacing: -0.5px; font-family: ${COMMON_FONT_STACK};">
                      <span style="color: #ec4899;">DIGITAL</span> <span style="color: #38bdf8;">RAIZ</span>
                    </div>
                    <div style="font-size: 11px; color: #94a3b8; font-family: ${MONO_FONT_STACK}; text-transform: uppercase; letter-spacing: 1.5px; margin-top: 4px;">
                      Website Contact Inquiry Notification
                    </div>
                  </td>
                  <td align="right" valign="middle">
                    <span style="background-color: #1e293b; color: #f1f5f9; font-size: 11px; font-weight: 700; font-family: ${MONO_FONT_STACK}; padding: 6px 14px; border-radius: 4px; border: 1px solid #334155;">
                      GENERAL INQUIRY
                    </span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Main Content Area -->
          <tr>
            <td style="padding: 28px;">
              
              <!-- Reference ID Strip -->
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color: #f8fafc; border: 1px solid #e2e8f0; padding: 12px 18px; margin-bottom: 24px;">
                <tr>
                  <td align="left" style="font-size: 13px; color: #475569; font-family: ${COMMON_FONT_STACK};">
                    <strong style="color: #334155;">Lead Reference ID:</strong> 
                    <span style="font-family: ${MONO_FONT_STACK}; font-size: 16px; color: #db2777; font-weight: 700; margin-left: 6px;">${payload.leadId}</span>
                  </td>
                </tr>
              </table>

              <!-- Customer Information Table -->
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="font-size: 14px; margin-bottom: 24px; border-collapse: collapse;">
                <tr style="border-bottom: 1px solid #f1f5f9;">
                  <td style="padding: 12px 0; font-weight: 600; color: #64748b; width: 34%; font-size: 13px; font-family: ${COMMON_FONT_STACK};">Contact Name:</td>
                  <td style="padding: 12px 0; color: #0f172a; font-weight: 700; font-size: 14px; font-family: ${COMMON_FONT_STACK};">${payload.name}</td>
                </tr>
                <tr style="border-bottom: 1px solid #f1f5f9;">
                  <td style="padding: 12px 0; font-weight: 600; color: #64748b; font-size: 13px; font-family: ${COMMON_FONT_STACK};">Email Address:</td>
                  <td style="padding: 12px 0;"><a href="${mailToUrl}" style="color: #2563eb; font-weight: 700; text-decoration: none; font-family: ${COMMON_FONT_STACK};">${payload.email}</a></td>
                </tr>
                <tr style="border-bottom: 1px solid #f1f5f9;">
                  <td style="padding: 12px 0; font-weight: 600; color: #64748b; font-size: 13px; font-family: ${COMMON_FONT_STACK};">Phone / Mobile:</td>
                  <td style="padding: 12px 0;"><a href="${phoneUrl}" style="color: #0f172a; font-weight: 700; text-decoration: none; font-family: ${COMMON_FONT_STACK};">${payload.phone || "Not Provided"}</a></td>
                </tr>
                ${payload.subject ? `
                <tr style="border-bottom: 1px solid #f1f5f9;">
                  <td style="padding: 12px 0; font-weight: 600; color: #64748b; font-size: 13px; font-family: ${COMMON_FONT_STACK};">Subject Line:</td>
                  <td style="padding: 12px 0; color: #1e293b; font-weight: 600; font-size: 14px; font-family: ${COMMON_FONT_STACK};">${payload.subject}</td>
                </tr>
                ` : ""}
              </table>

              <!-- Inquiry Message Box -->
              <div style="margin-bottom: 28px;">
                <div style="font-size: 11px; font-weight: 700; color: #64748b; text-transform: uppercase; font-family: ${MONO_FONT_STACK}; letter-spacing: 1px; margin-bottom: 8px;">
                  INQUIRY MESSAGE DETAILS:
                </div>
                <div style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-left: 4px solid #db2777; padding: 18px; font-size: 14px; line-height: 1.65; color: #1e293b; white-space: pre-wrap; font-family: ${COMMON_FONT_STACK}; font-weight: 400;">${payload.message}</div>
              </div>

              <!-- Action Bar -->
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
                <tr>
                  <td align="center">
                    <a href="${mailToUrl}" style="display: inline-block; background-color: #db2777; color: #ffffff; text-decoration: none; padding: 13px 26px; font-weight: 700; font-size: 12px; text-transform: uppercase; letter-spacing: 0.8px; border-radius: 6px; font-family: ${COMMON_FONT_STACK};">
                      Reply to ${payload.name}
                    </a>
                  </td>
                </tr>
              </table>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color: #f8fafc; padding: 20px 28px; border-top: 1px solid #e2e8f0; font-size: 12px; color: #64748b; text-align: center; font-family: ${COMMON_FONT_STACK};">
              <div style="font-weight: 700; color: #0f172a; margin-bottom: 4px;">Digital Raiz Customer Support Desk</div>
              <div style="color: #64748b;">Cyber Towers Rd, HITEC City, Hyderabad, Telangana 500081</div>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `;
}

// 2. Light Template for Service Proposal Inquiries with Refined Typography
function generateServiceProposalTemplate(payload: LeadNotificationPayload): string {
  const serviceName = payload.service || "Service Proposal";
  const mailSubject = encodeURIComponent(`RE: Digital Raiz ${serviceName} Proposal [${payload.leadId}]`);
  const mailToUrl = `mailto:${payload.email}?subject=${mailSubject}`;
  const phoneUrl = `tel:${payload.phone.replace(/[^0-9+]/g, "")}`;

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Service Proposal - ${serviceName}</title>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=JetBrains+Mono:wght@600;700&display=swap" rel="stylesheet">
</head>
<body style="margin: 0; padding: 0; background-color: #f1f5f9; font-family: ${COMMON_FONT_STACK}; -webkit-font-smoothing: antialiased; color: #0f172a;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color: #f1f5f9; padding: 30px 10px;">
    <tr>
      <td align="center">
        <!-- Main Card Container -->
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="max-width: 600px; background-color: #ffffff; border: 1px solid #cbd5e1; text-align: left; box-shadow: 0 4px 12px rgba(15, 23, 42, 0.05);">
          
          <!-- Top Header Bar -->
          <tr>
            <td style="background-color: #0f172a; padding: 22px 28px; border-bottom: 4px solid #2563eb;">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
                <tr>
                  <td align="left">
                    <div style="font-size: 24px; font-weight: 800; color: #ffffff; letter-spacing: -0.5px; font-family: ${COMMON_FONT_STACK};">
                      <span style="color: #38bdf8;">DIGITAL</span> <span style="color: #ec4899;">RAIZ</span>
                    </div>
                    <div style="font-size: 11px; color: #94a3b8; font-family: ${MONO_FONT_STACK}; text-transform: uppercase; letter-spacing: 1.5px; margin-top: 4px;">
                      Service Proposal &amp; Consultation Request
                    </div>
                  </td>
                  <td align="right" valign="middle">
                    <span style="background-color: #2563eb; color: #ffffff; font-size: 11px; font-weight: 700; font-family: ${MONO_FONT_STACK}; padding: 6px 14px; border-radius: 4px;">
                      SERVICE PROPOSAL
                    </span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Main Content Area -->
          <tr>
            <td style="padding: 28px;">
              
              <!-- Requested Service Highlight Banner -->
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color: #eff6ff; border: 1px solid #bfdbfe; border-left: 4px solid #2563eb; padding: 18px 20px; margin-bottom: 24px;">
                <tr>
                  <td>
                    <div style="font-size: 11px; font-weight: 700; color: #1d4ed8; text-transform: uppercase; font-family: ${MONO_FONT_STACK}; letter-spacing: 1px; margin-bottom: 4px;">
                      REQUESTED SERVICE CATEGORY:
                    </div>
                    <div style="font-size: 20px; font-weight: 800; color: #1e3a8a; font-family: ${COMMON_FONT_STACK};">
                      🎯 ${serviceName}
                    </div>
                  </td>
                </tr>
              </table>

              <!-- Reference & SLA Strip -->
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color: #f8fafc; border: 1px solid #e2e8f0; padding: 12px 18px; margin-bottom: 24px;">
                <tr>
                  <td align="left" style="font-size: 13px; color: #475569; font-family: ${COMMON_FONT_STACK};">
                    <strong style="color: #334155;">Lead Reference ID:</strong> 
                    <span style="font-family: ${MONO_FONT_STACK}; font-size: 16px; color: #2563eb; font-weight: 700; margin-left: 6px;">${payload.leadId}</span>
                  </td>
                  <td align="right" style="font-size: 12px; color: #15803d; font-weight: 700; font-family: ${COMMON_FONT_STACK};">
                    ⏱️ &lt; 4 Hours Response SLA
                  </td>
                </tr>
              </table>

              <!-- Customer Info Table -->
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="font-size: 14px; margin-bottom: 24px; border-collapse: collapse;">
                <tr style="border-bottom: 1px solid #f1f5f9;">
                  <td style="padding: 12px 0; font-weight: 600; color: #64748b; width: 34%; font-size: 13px; font-family: ${COMMON_FONT_STACK};">Client Name:</td>
                  <td style="padding: 12px 0; color: #0f172a; font-weight: 700; font-size: 14px; font-family: ${COMMON_FONT_STACK};">${payload.name}</td>
                </tr>
                <tr style="border-bottom: 1px solid #f1f5f9;">
                  <td style="padding: 12px 0; font-weight: 600; color: #64748b; font-size: 13px; font-family: ${COMMON_FONT_STACK};">Work Email:</td>
                  <td style="padding: 12px 0;"><a href="${mailToUrl}" style="color: #2563eb; font-weight: 700; text-decoration: none; font-family: ${COMMON_FONT_STACK};">${payload.email}</a></td>
                </tr>
                <tr style="border-bottom: 1px solid #f1f5f9;">
                  <td style="padding: 12px 0; font-weight: 600; color: #64748b; font-size: 13px; font-family: ${COMMON_FONT_STACK};">Phone / WhatsApp:</td>
                  <td style="padding: 12px 0;"><a href="${phoneUrl}" style="color: #0f172a; font-weight: 700; text-decoration: none; font-family: ${COMMON_FONT_STACK};">${payload.phone || "Not Provided"}</a></td>
                </tr>
                ${payload.subject ? `
                <tr style="border-bottom: 1px solid #f1f5f9;">
                  <td style="padding: 12px 0; font-weight: 600; color: #64748b; font-size: 13px; font-family: ${COMMON_FONT_STACK};">Project Subject:</td>
                  <td style="padding: 12px 0; color: #1e293b; font-weight: 600; font-size: 14px; font-family: ${COMMON_FONT_STACK};">${payload.subject}</td>
                </tr>
                ` : ""}
              </table>

              <!-- Project Requirements Box -->
              <div style="margin-bottom: 28px;">
                <div style="font-size: 11px; font-weight: 700; color: #64748b; text-transform: uppercase; font-family: ${MONO_FONT_STACK}; letter-spacing: 1px; margin-bottom: 8px;">
                  PROJECT REQUIREMENTS &amp; SCOPE DETAILS:
                </div>
                <div style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-left: 4px solid #2563eb; padding: 18px; font-size: 14px; line-height: 1.65; color: #1e293b; white-space: pre-wrap; font-family: ${COMMON_FONT_STACK}; font-weight: 400;">${payload.message}</div>
              </div>

              <!-- Action Bar -->
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
                <tr>
                  <td align="center">
                    <a href="${mailToUrl}" style="display: inline-block; background-color: #2563eb; color: #ffffff; text-decoration: none; padding: 13px 26px; font-weight: 700; font-size: 12px; text-transform: uppercase; letter-spacing: 0.8px; border-radius: 6px; font-family: ${COMMON_FONT_STACK};">
                      Reply to Service Proposal
                    </a>
                  </td>
                </tr>
              </table>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color: #f8fafc; padding: 20px 28px; border-top: 1px solid #e2e8f0; font-size: 12px; color: #64748b; text-align: center; font-family: ${COMMON_FONT_STACK};">
              <div style="font-weight: 700; color: #0f172a; margin-bottom: 4px;">Digital Raiz Enterprise Engineering Squad</div>
              <div style="color: #64748b;">Cyber Towers Rd, HITEC City, Hyderabad, Telangana 500081</div>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `;
}

export async function sendLeadNotificationEmail(payload: LeadNotificationPayload) {
  const smtpUser = process.env.SMTP_USER || "sumanakula01@gmail.com";
  const smtpPass = process.env.SMTP_PASS || process.env.GMAIL_APP_PASSWORD || "oimp xdsa qjzc tlob";

  if (!smtpPass) {
    console.warn(
      "[Mailer Warning] SMTP_PASS / GMAIL_APP_PASSWORD is not configured in .env.local. Email notification skipped."
    );
    return { success: false, warning: "SMTP_PASS not configured" };
  }

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // TLS
    auth: {
      user: smtpUser,
      pass: smtpPass,
    },
  });

  // Determine whether this inquiry is service-specific or a general contact inquiry
  const isServiceRelated =
    payload.service &&
    payload.service !== "General Inquiry" &&
    payload.service !== "General" &&
    payload.service !== "General Service Proposal";

  const htmlContent = isServiceRelated
    ? generateServiceProposalTemplate(payload)
    : generateGeneralContactTemplate(payload);

  const subjectPrefix = isServiceRelated ? "Service Proposal Request" : "Contact Inquiry";
  const serviceLabel = payload.service || "General";

  const mailOptions = {
    from: `"Digital Raiz Portal" <${smtpUser}>`,
    to: RECIPIENT_EMAILS.join(", "),
    subject: `[${payload.leadId}] ${subjectPrefix}: ${payload.name} (${serviceLabel})`,
    html: htmlContent,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log(`Lead notification email (${isServiceRelated ? "Service Proposal" : "General Contact"}) sent successfully:`, info.messageId);
    return { success: true, messageId: info.messageId };
  } catch (err: any) {
    console.error("Error sending lead notification email:", err);
    return { success: false, error: err.message };
  }
}
