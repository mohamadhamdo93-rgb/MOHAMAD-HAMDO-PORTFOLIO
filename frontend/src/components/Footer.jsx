import React from "react";
import { ArrowUp, Facebook, Instagram, Linkedin } from "lucide-react";

export default function Footer({ t }) {
  return (
    <footer className="site-footer">
      <div className="footer-brand">
        <a className="logo" href="#home">MH</a>
        <div>
          <strong>{t.name}</strong>
          <p>Graphic Designer</p>
          <p>Creative Director</p>
        </div>
      </div>

      <div className="footer-social">
        <a href="#" aria-label="Instagram"><Instagram size={18} /></a>
        <a href="#" aria-label="LinkedIn"><Linkedin size={18} /></a>
        <a href="#" aria-label="Facebook"><Facebook size={18} /></a>
        <a href="#home" className="back-top" aria-label="Back to top">
          <ArrowUp size={18} />
        </a>
      </div>
    </footer>
  );
}
