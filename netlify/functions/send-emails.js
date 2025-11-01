// netlify/functions/send-email.js
import sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.SENDGRID_API_KEY); // set in Netlify dashboard

export const handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  const { name, email, subject, message } = JSON.parse(event.body || "{}");

  const msg = {
    to: "patrice_nzogang@outlook.com", // where you want to receive it
    from: "no-reply@yourdomain.com",   // must be a verified sender in SendGrid
    subject: `[Portfolio] ${subject}`,
    text: `From: ${name} <${email}>\n\n${message}`,
    html: `<p><strong>From:</strong> ${name} &lt;${email}&gt;</p><p>${message}</p>`,
  };

  try {
    await sgMail.send(msg);
    return { statusCode: 200, body: JSON.stringify({ success: true }) };
  } catch (error) {
    console.error(error);
    return { statusCode: 500, body: JSON.stringify({ success: false, error: error.message }) };
  }
};
