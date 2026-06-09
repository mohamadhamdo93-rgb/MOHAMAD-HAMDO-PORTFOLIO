import React, { useState } from "react";
import {
  Facebook,
  Instagram,
  Linkedin,
  Palette,
  Send
} from "lucide-react";

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
    [Instagram, "Instagram"],
    [Palette, "Behance"],
    [Linkedin, "LinkedIn"],
    [Facebook, "Facebook"],
    [Send, "Telegram"]
  ];

  return (
    <section className="section two-col" id="contact">

      <div className="glass-panel">

        <div className="service-header">
          <span className="eyebrow">
            Contact
          </span>

          <h2 className="contact-title">
  Let's Work Together
</h2>
        </div>

        <div className="contact-links">

          {socialLinks.map(([Icon, label]) => (
            <a key={label} href="#">

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
