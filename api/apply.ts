export default async function handler(
  req: any,
  res: any
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, telegram, phone, course } = req.body;

    let botToken = process.env.TELEGRAM_BOT_TOKEN || "8681856242:AAHGY8P9pcVZNo327LgGyZ3x4NsBtbaOWLs";
    const chatId = process.env.TELEGRAM_CHAT_ID || "8681856242";

    // Auto prepend the standard bot ID prefix if the user set a token without the colon divider
    if (botToken && !botToken.includes(":")) {
      botToken = `8681856242:${botToken}`;
    }

    const escapeHtml = (unsafe: string) => {
      if (!unsafe) return "";
      return unsafe
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
    };

    const cleanName = escapeHtml(name || "");
    const cleanTelegram = escapeHtml(telegram || "");
    const cleanPhone = escapeHtml(phone || "");
    const cleanCourse = escapeHtml(course || "");

    const text = `<b>🚀 Yangi Arizachi!</b>\n\n<b>👤 Ism:</b> ${cleanName}\n<b>📱 Telegram:</b> ${cleanTelegram}\n<b>📞 Telefon:</b> ${cleanPhone}\n<b>📚 Kurs:</b> ${cleanCourse}\n\n#ariza #coreacademy`;

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
