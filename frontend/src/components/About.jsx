import React, { useState } from "react";
import { ChevronDown, ShieldCheck } from "lucide-react";
import { software } from "../data/index.js";

export default function About({ t }) {
  const [openSoftware, setOpenSoftware] = useState(false);

  return (
    <section className="section about-layout" id="about">

      <div className="glass-panel about-full">
        <span className="eyebrow">
          <ShieldCheck size={16} /> About
        </span>

        <h2>{t.aboutTitle}</h2>

        <p>{t.aboutBody}</p>

        <div className="timeline">
          {[
            "Creative Direction",
            "Brand Strategy",
            "Digital Launch Systems",
          ].map((item, i) => (
            <div key={item}>
              <b>0{i + 1}</b>
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="skill-section">
        <button
          className={`software-toggle ${openSoftware ? "open" : ""}`}
          type="button"
          onClick={() => setOpenSoftware((v) => !v)}
          aria-expanded={openSoftware}
        >
          <span>
            <small>Skills</small>
            Application Software
          </span>

          <ChevronDown size={22} />
        </button>

        <div className={`software-list ${openSoftware ? "open" : ""}`}>
          {software.map(([name, value]) => (
            <div className="skill" key={name}>
              <div>
                <span>{name}</span>
                <b>{value}%</b>
              </div>

              <i style={{ "--value": `${value}%` }} />
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}