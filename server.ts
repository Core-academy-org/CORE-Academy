import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Route for Application Submission
  app.post("/api/apply", async (req, res) => {
    const { name, telegram, phone, course } = req.body;

    const botToken = process.env.TELEGRAM_BOT_TOKEN || "8681856242:AAHCUIImUdYvTcLqPWfVWwKNHOc7UqEt9aw";
    const chatId = process.env.TELEGRAM_CHAT_ID || "8681856242";

    if (!botToken || !chatId) {
      console.error("Telegram configuration missing");
      // Still return 200 to user but log error on server
      return res.status(200).json({ success: true, message: "Logged (Offline Simulation)" });
    }

    const text = `
🆕 *New Application Received*

👤 *Name:* ${name}
📱 *Telegram:* @${telegram.replace('@', '')}
📞 *Phone:* ${phone}
🎓 *Course:* ${course}

Core Academy Registration System
    `;

    try {
      const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: chatId,
          text: text,
          parse_mode: "Markdown",
        }),
      });

      if (!response.ok) {
        throw new Error("Telegram API responded with error");
      }

      res.status(200).json({ success: true });
    } catch (error) {
      console.error("Telegram Error:", error);
      res.status(500).json({ success: false, error: "Failed to send notification" });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
