import React, { useState } from "react";
import { Send } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaBehance } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";

export default function Contact({ t, setToast }) {
  const [status, setStatus] = useState("idle");

  async function submit(e) {
    e.preventDefault();

    setStatus("sending");

    const data = Object.fromEntries(
      new FormData(e.currentTarget)
    );

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      });

      if (!res.ok)
        throw new Error("Message failed");

      setStatus("sent");

      setToast(
        "Message received. Email status: queued."
      );

      e.currentTarget.reset();

      setTimeout(() => setToast(""), 3200);

    } catch {
      setStatus("failed");

      setToast(
        "Saved locally only when backend is running. Check API settings."
      );

      setTimeout(() => setToast(""), 4200);
    }
  }

  const socialLinks = [
  [
    FaInstagram,
    "Instagram",
    "https://www.instagram.com/mohamad_for_design"
  ],
  [
    FaBehance,
    "Behance",
    "https://www.behance.net/mohamadhamdo"
  ],
  [
    FaFacebookF,
    "Facebook",
    "https://www.facebook.com/mohamad.93.hamdo/?locale=ar_AR"
  ],
  [
    FaTelegramPlane,
    "Telegram",
    "https://t.me/Mohamad_for_design"
  ]
];

  return (
    <section className="section two-col" id="contact">

      <div className="glass-panel">

        <div className="services-header">
          <h2>Contact</h2>
        </div>

        <div className="contact-links">

          <a
  href="https://wa.me/963951516123"
  target="_blank"
  rel="noopener noreferrer"
  className="whatsapp-link"
>
  <FaWhatsapp />
  Contact Me
</a>

          {socialLinks.map(([Icon, label, url]) => (
            <a
              key={label}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon />
              {label}
            </a>
          ))}

        </div>

      </div>

      <form
        className="contact-form glass-panel"
        onSubmit={submit}
      >

        {["name", "email", "subject"].map(
          (field, i) => (
            <input
              key={field}
              name={field}
              type={
                field === "email"
                  ? "email"
                  : "text"
              }
              placeholder={t.form[i]}
              required={field !== "subject"}
            />
          )
        )}

        <textarea
          name="message"
          placeholder={t.form[3]}
          required
          rows="5"
        />

        <button
          className="primary-btn"
          disabled={status === "sending"}
        >
          <Send size={18} />

          {status === "sending"
            ? "Sending..."
            : t.send}
        </button>

        <p className={`status ${status}`}>
          Email status tracking: {status}
        </p>

      </form>

    </section>
  );
}