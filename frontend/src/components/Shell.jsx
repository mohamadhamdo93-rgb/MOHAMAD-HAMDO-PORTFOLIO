import React from "react";
import { MessageCircle } from "lucide-react";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";

export default function Shell({ children, t, lang, setLang, theme, setTheme }) {
  return (
    <div className="site-shell">
      <div className="cinema-bg" />
      <div className="cursor-glow" />
      <Navbar t={t} lang={lang} setLang={setLang} theme={theme} setTheme={setTheme} />
      <main>{children}</main>
      <Footer t={t} />
      <a className="whatsapp-float" href="https://wa.me/963951516123" aria-label="WhatsApp">
        <MessageCircle size={24} />
      </a>
    </div>
  );
}
