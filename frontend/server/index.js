import express from "express";
import nodemailer from "nodemailer";
import { promises as fs } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const dataDir = path.join(root, "data");
const messagesFile = path.join(dataDir, "messages.json");
const app = express();

app.use(express.json({ limit: "1mb" }));
app.use(express.static(path.join(root, "dist")));

const env = process.env;
const port = Number(env.PORT || 4174);

async function ensureStore() {
  await fs.mkdir(dataDir, { recursive: true });
  try {
    await fs.access(messagesFile);
  } catch {
    await fs.writeFile(messagesFile, "[]\n", "utf8");
  }
}

function clean(value) {
  return String(value || "").trim().slice(0, 1200);
}

app.get("/api/health", (_req, res) => {
  res.json({ ok: true, service: "mohamad-hamdo-portfolio" });
});

app.post("/api/contact", async (req, res) => {
  await ensureStore();
  const message = {
    id: crypto.randomUUID(),
    name: clean(req.body.name),
    email: clean(req.body.email),
    subject: clean(req.body.subject),
    body: clean(req.body.message),
    status: "new",
    createdAt: new Date().toISOString()
  };

  if (!message.name || !message.email || !message.body) {
    return res.status(400).json({ ok: false, error: "Missing required fields." });
  }

  const messages = JSON.parse(await fs.readFile(messagesFile, "utf8"));
  messages.unshift(message);
  await fs.writeFile(messagesFile, JSON.stringify(messages, null, 2), "utf8");

  if (env.SMTP_HOST && env.CONTACT_TO) {
    const transporter = nodemailer.createTransport({
      host: env.SMTP_HOST,
      port: Number(env.SMTP_PORT || 587),
      secure: Number(env.SMTP_PORT) === 465,
      auth: env.SMTP_USER ? { user: env.SMTP_USER, pass: env.SMTP_PASS } : undefined
    });

    await transporter.sendMail({
      from: env.SMTP_FROM || env.SMTP_USER,
      to: env.CONTACT_TO,
      replyTo: message.email,
      subject: `[Portfolio] ${message.subject || "New message"}`,
      text: `${message.name} <${message.email}>\n\n${message.body}`
    });
  }

  res.json({ ok: true, id: message.id, status: "received" });
});

app.get("/api/messages", async (req, res) => {
  if (!env.ADMIN_TOKEN || req.headers.authorization !== `Bearer ${env.ADMIN_TOKEN}`) {
    return res.status(401).json({ ok: false, error: "Unauthorized" });
  }
  await ensureStore();
  res.json(JSON.parse(await fs.readFile(messagesFile, "utf8")));
});

app.use((req, res, next) => {
  if (req.method !== "GET") return next();
  res.sendFile(path.join(root, "dist", "index.html"));
});

app.listen(port, () => {
  console.log(`Portfolio server listening on http://localhost:${port}`);
});
