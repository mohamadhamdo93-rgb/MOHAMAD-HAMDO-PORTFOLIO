import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import Shell from "./components/Shell.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Services from "./components/Services.jsx";
import Portfolio from "./components/Portfolio.jsx";
import Courses from "./components/Courses.jsx";
import Testimonials from "./components/Testimonials.jsx";
import Blog from "./components/Blog.jsx";
import Contact from "./components/Contact.jsx";
import Admin from "./components/Admin.jsx";
import ProjectPage from "./components/ProjectPage.jsx";
import BlogPost from "./components/BlogPost.jsx";

import { i18n, titles } from "./data/index.js";

function HomePage({ t, lang, setToast, titleIndex }) {
  return (
    <>
      <Hero t={t} title={titles[titleIndex]} />

      <About t={t} />

      <Services t={t} />

      <Portfolio t={t} />

      <Courses t={t} lang={lang} />

      <Testimonials t={t} />

      <Blog />

      <Contact t={t} setToast={setToast} />
    </>
  );
}

export default function App() {
  const [lang, setLang] = useState(localStorage.lang || "en");
  const [theme, setTheme] = useState(localStorage.theme || "dark");
  const [titleIndex, setTitleIndex] = useState(0);
  const [toast, setToast] = useState("");

  const t = i18n[lang];

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = t.dir;
    document.documentElement.dataset.theme = theme;

    localStorage.lang = lang;
    localStorage.theme = theme;
  }, [lang, theme, t.dir]);

  useEffect(() => {
    const timer = setInterval(() => {
      setTitleIndex((i) => (i + 1) % titles.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const move = (e) => {
      document.documentElement.style.setProperty("--mx", `${e.clientX}px`);
      document.documentElement.style.setProperty("--my", `${e.clientY}px`);
    };

    addEventListener("pointermove", move);

    return () => removeEventListener("pointermove", move);
  }, []);

  const shellProps = {
    t,
    lang,
    setLang,
    theme,
    setTheme,
  };

  return (
    <Shell {...shellProps}>
      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              t={t}
              lang={lang}
              setToast={setToast}
              titleIndex={titleIndex}
            />
          }
        />

        <Route
          path="/project/:slug"
          element={<ProjectPage t={t} />}
        />

        <Route
          path="/blog/:slug"
          element={<BlogPost />}
        />

        <Route
          path="/admin"
          element={<Admin t={t} />}
        />
      </Routes>

      {toast && (
        <div className="toast">
          {toast}
        </div>
      )}
    </Shell>
  );
}