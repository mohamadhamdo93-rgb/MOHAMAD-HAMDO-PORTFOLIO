import React, { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { client, urlFor } from "../sanity/sanityClient";

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState([]);
  const [active, setActive] = useState(0);
  const [fade, setFade] = useState(true);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    client.fetch(`
  *[_type == "testimonial"]{
    _id,
    name,
    feedback,
    image
  }
`)

      .then((data) => {
        setTestimonials(data || []);
      })
      .catch(console.error);
  }, []);

  const changeTestimonial = (index) => {
  if (!testimonials.length) return;

  setExpanded(false);
  setFade(false);

  setTimeout(() => {
    setActive(index);
    setFade(true);
  }, 300);
};

  const nextTestimonial = () => {
    changeTestimonial(
      (active + 1) % testimonials.length
    );
  };

  const prevTestimonial = () => {
    changeTestimonial(
      (active - 1 + testimonials.length) %
        testimonials.length
    );
  };

  useEffect(() => {
    if (!testimonials.length) return;

    const timer = setInterval(() => {
      nextTestimonial();
    }, 5000);

    return () => clearInterval(timer);
  }, [active, testimonials]);

  if (!testimonials.length) return null;

  const testimonial = testimonials[active];

  return (
    <section className="section" id="testimonials">
      <div className="glass-panel service-header">
        <span className="eyebrow">
          Testimonials
        </span>

        <h2>Client Testimonials</h2>
      </div>

      <div className="testimonial">
        <button onClick={prevTestimonial}>
          <ChevronLeft />
        </button>

        <div
          className={`testimonial-fade ${
            fade ? "" : "hide"
          }`}
        >
          <div className="avatar">
            {testimonial.image ? (
              <img
                src={urlFor(testimonial.image)
                  .width(200)
                  .height(200)
                  .url()}
                alt={testimonial.name}
              />
            ) : (
              testimonial.name?.charAt(0)
            )}
          </div>

          <strong className="client-name">
  <span className="client-prefix">
    {testimonial.name?.split(" ")[0]}
  </span>{" "}
  <span className="client-brand">
    {testimonial.name?.split(" ").slice(1).join(" ")}
  </span>
</strong>

<blockquote className={expanded ? "expanded" : ""}>
  {testimonial.feedback}
</blockquote>

{testimonial.feedback?.length > 120 && (
  <span
    className="read-more-inline"
    onClick={() => setExpanded(!expanded)}
  >
    {expanded ? "عرض أقل" : "قراءة المزيد..."}
  </span>
)}

        </div>

        <button onClick={nextTestimonial}>
          <ChevronRight />
        </button>
      </div>
    </section>
  );
}