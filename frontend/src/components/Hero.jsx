import React from "react";
import { Download, Mail, Sparkles } from "lucide-react";
import { stats } from "../data/index.js";

export default function Hero({ t, title }) {
  return (
    <section className="hero section" id="home">
      <div className="hero-copy glass-panel">
        <span className="eyebrow">
          <Sparkles size={16} /> Premium Digital Brand Designer
        </span>
        <h1>{t.name}</h1>
        <p className="rotator">
          <span key={title}>{title}</span>
        </p>
        <p>{t.intro}</p>
        <div className="hero-buttons">
          <a className="primary-btn" href="#portfolio">{t.cta[0]}</a>
          
          <a
  className="ghost-btn whatsapp-green"
  href="https://wa.me/963951516123"
  target="_blank"
  rel="noopener noreferrer"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path d="M20.52 3.48A11.86 11.86 0 0012.07 0C5.5 0 .15 5.35.15 11.92c0 2.1.55 4.15 1.6 5.96L0 24l6.3-1.65a11.9 11.9 0 005.77 1.47h.01c6.57 0 11.92-5.35 11.92-11.92 0-3.18-1.24-6.17-3.48-8.42z"/>
  </svg>

  Contact Me
</a>

          <a
  className="icon-btn"
  href="https://drive.google.com/uc?export=download&id=1bVcpLK9cD93y8S5QZgcp4fEP1KBEvDwi"
  target="_blank"
  rel="noopener noreferrer"
>
  <Download size={18} />
  Download CV
</a>
          
        </div>
      </div>

      <div className="profile-stage">
        <div className="otp-orbit">
          <span /><span /><span />
        </div>
        <div className="profile-ring">
          <div className="profile-placeholder">MH</div>
        </div>
        
        <div className="floating-card bottom-card">
          Neon Brand<br /><strong>+92%</strong>
        </div>
      </div>

      <div className="stats-row">
        {stats.map((n, i) => (
          <div className="stat-card" key={t.stats[i]}>
            <strong>{n}{i === 0 || i === 3 ? "+" : ""}</strong>
            <span>{t.stats[i]}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
