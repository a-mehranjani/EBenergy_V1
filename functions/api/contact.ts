type Env = {
  RESEND_API_KEY: string;
  CONTACT_EMAIL?: string;
  EMAIL_FROM?: string;
};

type ContactPayload = {
  name?: unknown;
  email?: unknown;
  company?: unknown;
  interest?: unknown;
  message?: unknown;
};

const jsonHeaders = {
  "Content-Type": "application/json; charset=utf-8",
  "Cache-Control": "no-store",
};

function clean(value: unknown, maxLength: number) {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

function escapeHtml(value: string) {
  return value.replace(
    /[&<>"']/g,
    (character) =>
      ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#039;",
      })[character] ?? character,
  );
}

export async function onRequestPost(context: { request: Request; env: Env }) {
  if (!context.env.RESEND_API_KEY) {
    return new Response(JSON.stringify({ error: "Email service is not configured." }), {
      status: 503,
      headers: jsonHeaders,
    });
  }

  let payload: ContactPayload;
  try {
    payload = (await context.request.json()) as ContactPayload;
  } catch {
    return new Response(JSON.stringify({ error: "Invalid request." }), {
      status: 400,
      headers: jsonHeaders,
    });
  }

  const name = clean(payload.name, 100);
  const email = clean(payload.email, 254);
  const company = clean(payload.company, 150);
  const interest = clean(payload.interest, 120);
  const message = clean(payload.message, 5000);

  if (!name || !email || !message || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return new Response(JSON.stringify({ error: "Please provide valid contact details." }), {
      status: 400,
      headers: jsonHeaders,
    });
  }

  const destination = context.env.CONTACT_EMAIL || "admin@ebenergy.tech";
  const sender = context.env.EMAIL_FROM || "EBenergy Website <website@ebenergy.tech>";
  const subject = `New EBenergy enquiry from ${name}${company ? ` — ${company}` : ""}`;
  const text = [
    `Name: ${name}`,
    `Email: ${email}`,
    `Company: ${company || "Not provided"}`,
    `Interest: ${interest || "Not selected"}`,
    "",
    "Project scope:",
    message,
  ].join("\n");

  const resendResponse = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${context.env.RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: sender,
      to: [destination],
      reply_to: email,
      subject,
      text,
      html: `
        <h2>New EBenergy website enquiry</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Company:</strong> ${escapeHtml(company || "Not provided")}</p>
        <p><strong>Interest:</strong> ${escapeHtml(interest || "Not selected")}</p>
        <h3>Project scope</h3>
        <p>${escapeHtml(message).replace(/\n/g, "<br>")}</p>
      `,
    }),
  });

  if (!resendResponse.ok) {
    return new Response(JSON.stringify({ error: "Unable to send the enquiry." }), {
      status: 502,
      headers: jsonHeaders,
    });
  }

  return new Response(JSON.stringify({ ok: true }), {
    status: 200,
    headers: jsonHeaders,
  });
}
