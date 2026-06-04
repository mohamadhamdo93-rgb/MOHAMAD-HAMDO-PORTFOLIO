import React, { useState } from "react";

export default function Admin({ t }) {
  const [token, setToken] = useState("");
  const [messages, setMessages] = useState([]);
  const [error, setError] = useState("");

  async function load() {
    setError("");

    const res = await fetch("/api/messages", {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    if (!res.ok) {
      return setError(
        "Unauthorized or backend is not running."
      );
    }

    setMessages(await res.json());
  }

  return (
    <section className="section">

      <div className="glass-panel service-header">

        <span className="eyebrow">
          Admin
        </span>

        <h2>
          Dashboard Messages
        </h2>

      </div>

      <div className="glass-panel admin-panel">

        <p>{t.adminHint}</p>

        <div className="admin-login">

          <input
            value={token}
            onChange={(e) =>
              setToken(e.target.value)
            }
            placeholder="ADMIN_TOKEN"
          />

          <button onClick={load}>
            Load
          </button>

        </div>

        {error && (
          <p className="status failed">
            {error}
          </p>
        )}

        <div className="message-list">

          {messages.map((m) => (
            <article key={m.id}>

              <b>{m.name}</b>

              <span>{m.email}</span>

              <p>{m.body}</p>

              <small>{m.createdAt}</small>

            </article>
          ))}

        </div>

      </div>

    </section>
  );
}
