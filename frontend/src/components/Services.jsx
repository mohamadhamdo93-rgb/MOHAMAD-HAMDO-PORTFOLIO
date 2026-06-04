import React from "react";

export default function Services() {
  const services = [
    "Visual Identity & Logo Design",
    "Social Media Design",
    "Video Editing",
    "Motion Graphics",
    "UI/UX Design",
    "Creative Direction",
    "Brand Strategy",
    "Digital Marketing",
  ];

  return (
    <section className="section services-loop-section" id="services">

      <div className="glass-panel services-header">
  <h2>Services</h2>
</div>

      <div className="services-marquee">
        <div className="services-track">

          {[...services, ...services].map((service, index) => (
            <div className="service-pill" key={index}>
              {service}
            </div>
          ))}

        </div>
      </div>

    </section>
  );
}