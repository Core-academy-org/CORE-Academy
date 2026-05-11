export default async function handler(
  req: any,
  res: any
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, telegram, phone, course } = req.body;

    const botToken = process.env.TELEGRAM_BOT_TOKEN || "8681856242:AAHCUIImUdYvTcLqPWfVWwKNHOc7UqEt9aw";
    const chatId = process.env.TELEGRAM_CHAT_ID || "8034737379";

    const text = `
<b>🚀 Yangi Arizachi!</b>

<b>👤 Ism:</b> ${name}
<b>📱 Telegram:</b> ${telegram}
<b>📞 Telefon:</b> ${phone}
<b>📚 Kurs:</b> ${course}

#ariza #coreacademy
    `;

    // Use native fetch (available in Node 18+)
    const response = await fetch(
      `https://api.telegram.org/bot${botToken}/sendMessage`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: chatId,
          text: text,
          parse_mode: "HTML",
        }),
      }
    );

    const data: any = await response.json();

    if (data.ok) {
      return res.status(200).json({ success: true });
    } else {
      console.error("Telegram API Error:", data);
      return res.status(500).json({ success: false, error: data.description });
    }
  } catch (error) {
    console.error("Server Error:", error);
    return res.status(500).json({ success: false, error: "Internal Server Error" });
  }
}
