import React, { useEffect, useState } from "react";
import { client, urlFor } from "../sanity/sanityClient";
import { ProjectCard } from "./Portfolio.jsx";

import { useParams, Link } from "react-router-dom";

export default function ProjectPage({ t }) {
  const { slug } = useParams();

  const [project, setProject] = useState(null);
  const [relatedProjects, setRelatedProjects] = useState([]);
  const [activeImage, setActiveImage] = useState(null);

  useEffect(() => {

    async function loadProject() {

      try {

        const projectData = await client.fetch(
          `
          *[_type == "project" && slug.current == $slug][0]{
            _id,
            title,
            slug,
            image,
            gallery,
            description,
            tools,
            likes,
            views,
            commentsCount,
            projectDuration,
            projectUrl,
            category->{
              title
            }
          }
          `,
          { slug }
        );

        setProject(projectData);

        if (projectData?.image) {
          setActiveImage(projectData.image);
        }

        const related = await client.fetch(`
          *[_type == "project"]{
            _id,
            title,
            slug,
            image,
            description,
            tools,
            projectUrl,
            category->{
              title
            }
          }
        `);

        setRelatedProjects(related);

      } catch (error) {

        console.log("PROJECT PAGE ERROR:", error);

      }

    }

    loadProject();

  }, [slug]);

  if (!project) {
    return (
      <section className="section">
        <h1>Loading...</h1>
      </section>
    );
  }

  return (
    <section className="section project-detail">

      <Link className="ghost-btn" to="/">
  ← Back
</Link>

      <div className="project-hero glass-panel">

        <div className="project-gallery">

          {activeImage && (

  <div
    className="project-image-container"
    onClick={() =>
      window.open(urlFor(activeImage).url(), "_blank")
    }
  >

    <img
      src={urlFor(activeImage).url()}
      alt={project.title}
      className="project-detail-image"
    />

    <div className="image-overlay">
      🔍 View Fullscreen
    </div>

  </div>

)}

          <div className="gallery-thumbs">

            {project.image && (
              <img
                src={urlFor(project.image).url()}
                alt=""
                onClick={() => setActiveImage(project.image)}
              />
            )}

            {project.gallery?.map((img, index) => (
              <img
                key={index}
                src={urlFor(img).url()}
                alt=""
                onClick={() => setActiveImage(img)}
              />
            ))}

          </div>

        </div>

        <div className="project-info">

          <span className="eyebrow">
            {project.category?.title || "Project"}
          </span>

          <h1>{project.title}</h1>

          <p>
            {project.description || "No description available"}
          </p>

          <div className="tool-tags">

            {project.tools?.map((tool, index) => (
              <span key={index}>
                {tool}
              </span>
            ))}

          </div>

          <div className="project-stats">

            <div className="stat-box">
              ❤️ {project.likes || 0}
            </div>

            <div className="stat-box">
              👁 {project.views || 0}
            </div>

            <div className="stat-box">
              💬 {project.commentsCount || 0}
            </div>

            {project.projectDuration && (
              <div className="stat-box">
                ⏱ {project.projectDuration}
              </div>
            )}

          </div>

          {project.projectUrl && (
            <a
              href={project.projectUrl}
              target="_blank"
              rel="noreferrer"
              className="primary-btn"
            >
              Visit Project
            </a>
          )}

        </div>

      </div>

      <div className="masonry related">

        {relatedProjects
          .filter((p) => p.slug?.current !== slug)
          .slice(0, 3)
          .map((p) => (

            <ProjectCard
              key={p._id}
              project={{
                ...p,
                category: p.category?.title || "Project",
              }}
              t={t}
            />

          ))}

      </div>

<div className="project-cta glass-panel">

  <span className="cta-eyebrow">
    {document.documentElement.lang === "ar"
      ? "هل لديك مشروع؟"
      : "HAVE A PROJECT IN MIND?"}
  </span>

  <h2>
    {document.documentElement.lang === "ar"
      ? "لنصنع شيئاً مذهلاً معاً"
      : "Let’s Build Something Amazing Together"}
  </h2>

  <p>
    {document.documentElement.lang === "ar"
      ? "هل تحتاج إلى هوية بصرية احترافية أو موقع عصري أو تجربة إبداعية قوية لعلامتك التجارية؟"
      : "Need a premium brand identity, modern website, or creative visual experience for your business?"}
  </p>

  <div className="cta-actions">

    <a
      href="https://wa.me/963951516123"
      target="_blank"
      rel="noreferrer"
      className="whatsapp-btn"
    >
      {document.documentElement.lang === "ar"
        ? "تواصل واتساب"
        : "WhatsApp"}
    </a>

  </div>

</div>

    </section>
  );

}