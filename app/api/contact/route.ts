import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Alla fält krävs." }, { status: 400 });
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: "Email-tjänst inte konfigurerad." },
        { status: 500 }
      );
    }

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Avail Kontaktformulär <no-reply@availsthlm.se>",
        to: ["team@availsthlm.se"],
        subject: `Nytt meddelande från ${name}`,
        text: `Namn: ${name}\nE-post: ${email}\n\nMeddelande:\n${message}`,
        reply_to: email,
      }),
    });

    if (!res.ok) {
      return NextResponse.json(
        { error: "Kunde inte skicka meddelandet." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Ett fel uppstod." }, { status: 500 });
  }
}
