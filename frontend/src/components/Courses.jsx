import React, { useEffect, useState } from "react";
import { GraduationCap, Star } from "lucide-react";
import { client, urlFor } from "../sanity/sanityClient";

export default function Courses({ t, lang }) {
    const [courses, setCourses] = useState([]);

  useEffect(() => {
    client
      .fetch(`
        *[_type == "course"]{
          _id,
          title,
          category,
          duration,
          students,
          price,
          rating,
          image
        }
      `)
      .then((data) => {
        console.log("SANITY COURSES:", data);
        setCourses(data);
      })
      .catch((err) => {
        console.error("SANITY ERROR:", err);
      });
  }, []);

  return (
    <section className="section" id="courses">

      <div className="courses-title">
  <span className="eyebrow">
    {lang === "ar" ? "تعلّم وتطوّر" : "Learn & Grow"}
  </span>

  <h2>
    {lang === "ar"
      ? "الدورات التدريبية"
      : "Online Courses"}
  </h2>
</div>


      <div className="courses-grid">
        {courses.map((course) => (
          <article
            className="course-card glass-panel"
            key={course._id}
          >
            <div className="course-thumb">
              {course.image ? (
                <img
                  src={urlFor(course.image).url()}
                  alt={course.title}
                />
              ) : (
                <GraduationCap size={48} />
              )}
            </div>

            <small>{course.category}</small>

            <h3>{course.title}</h3>

            <div className="course-meta">
              <span>{course.duration}</span>
              <span>{course.students}</span>
            </div>

            <div className="course-rating">
              <Star size={16} fill="currentColor" />
              <Star size={16} fill="currentColor" />
              <Star size={16} fill="currentColor" />
              <Star size={16} fill="currentColor" />
              <Star size={16} fill="currentColor" />

              <b>{course.rating}</b>
            </div>

            <div className="course-footer">
              <strong>${course.price}</strong>

              <a
  href="https://wa.me/963951516123"
  target="_blank"
  rel="noopener noreferrer"
  className="whatsapp-btn"
>
  {lang === "ar"
    ? "استفسار واتساب"
    : "WhatsApp"}
</a>

            </div>
          </article>
        ))}
      </div>

    </section>
  );
}