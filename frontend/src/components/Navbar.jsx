import React, { useState } from "react";
import { Moon, Sun, Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar({
  t,
  lang,
  setLang,
  theme,
  setTheme,
}) {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const ids = [
    "home",
    "about",
    "services",
    "portfolio",
    "courses",
    "testimonials",
    "contact",
    "blog",
  ];

  const handleSectionClick = (id) => {
    setMenuOpen(false);

    if (location.pathname !== "/") {
      window.location.href = `/#${id}`;
      return;
    }

    const el = document.getElementById(id);

    if (el) {
      el.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <header className="nav-wrap">
      <Link className="logo" to="/">
        MH
      </Link>

      <button
        className="mobile-menu-btn"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      <nav className={menuOpen ? "mobile-open" : ""}>
        {t.nav.map((item, i) => (
          <button
            key={item}
            className="nav-link"
            onClick={() => handleSectionClick(ids[i])}
          >
            {item}
          </button>
        ))}
      </nav>

      <div className="nav-actions">
        <button
          className="toggle"
          onClick={() =>
            setTheme(theme === "dark" ? "light" : "dark")
          }
          aria-label="Toggle theme"
        >
          {theme === "dark"
            ? <Moon size={17} />
            : <Sun size={17} />}
          <span />
        </button>

        <button
          className="lang-switch"
          onClick={() =>
            setLang(lang === "en" ? "ar" : "en")
          }
        >
          {lang === "en" ? "ع" : "EN"}
        </button>
      </div>
    </header>
  );
}