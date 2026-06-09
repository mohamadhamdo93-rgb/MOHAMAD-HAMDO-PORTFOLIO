import React from "react";
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
      
    </div>
  );
}
