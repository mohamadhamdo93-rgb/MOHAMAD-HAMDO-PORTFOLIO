import React, { useEffect, useState } from "react";
import { ExternalLink, Filter } from "lucide-react";
import { Link } from "react-router-dom";

import { client, urlFor } from "../sanity/sanityClient";

export function ProjectVisual({ project }) {
  return (
    <div className="project-image-wrapper">
      <img
        src={urlFor(project.image).url()}
        alt={project.title}
        className="project-image"
      />
    </div>
  );
}

export function ProjectCard({ project, t, tall }) {
  return (
    <Link
      className={`project-card ${tall ? "tall" : ""}`}
      to={`/project/${project.slug?.current || project.slug}`}
    >
      <ProjectVisual project={project} />

      <div className="project-meta">
        <span>{project.category?.title}</span>

        <h3>{project.title}</h3>

        <em>
          {t.projectOpen} <ExternalLink size={15} />
        </em>
      </div>
    </Link>
  );
}

export default function Portfolio({ t }) {
  const [projects, setProjects] = useState([]);
  const [categories, setCategories] = useState(["All"]);
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    client
      .fetch(`
        *[_type == "category"]{
          title
        }
      `)
      .then((data) => {
        setCategories(["All", ...data.map((cat) => cat.title)]);
      });

    client
      .fetch(`
        *[_type == "project"]{
          _id,
          title,
          slug,
          image,
          description,
          color,
          tools,
          category->{
            title
          }
        }
      `)
      .then((data) => {
        console.log("SANITY PROJECTS:", data);
        setProjects(data);
      })
      .catch(console.error);
  }, []);

  const filtered =
    filter === "All"
      ? projects
      : projects.filter(
          (project) => project.category?.title === filter
        );

  return (
    <section className="section" id="portfolio">
      <div className="glass-panel service-header">
        <span className="eyebrow">
  Selected Work
</span>
        <h2>Portfolio</h2>
      </div>

      <div className="filters">
        {categories.map((cat) => (
          <button
            key={cat}
            className={filter === cat ? "active" : ""}
            onClick={() => setFilter(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="masonry">
        {filtered.map((project, index) => (
          <ProjectCard
            key={project._id}
            project={project}
            t={t}
            tall={index % 3 === 1}
          />
        ))}
      </div>
    </section>
  );
}