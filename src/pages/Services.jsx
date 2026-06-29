import "./Services.css";
import ServiceCard from "../components/ServiceCard";

import service1 from "../assets/service1.jpg";
import service2 from "../assets/service2.jpg";
import service3 from "../assets/service3.jpg";
import service4 from "../assets/service4.jpg";
import service5 from "../assets/service5.jpg";

import { FaCalendarAlt } from "react-icons/fa";

const services = [
  {
    image: service1,
    title: "Interior Design",
    description:
      "Beautiful interior solutions designed around your lifestyle."
  },
  {
    image: service2,
    title: "Renovation",
    description:
      "Transform your home with complete renovation services."
  },
  {
    image: service3,
    title: "Furniture Planning",
    description:
      "Space planning and custom furniture selection."
  },
  {
    image: service4,
    title: "3D Visualization",
    description:
      "Realistic previews before starting your project."
  },
  {
    image: service5,
    title: "Consultation",
    description:
      "Professional advice from experienced designers."
  }
];

const Services = () => {
  return (
    <section className="services">

      <p className="section-title">
        WHAT WE OFFER
      </p>

      <h1>Our Interior Design Services</h1>

      <p className="stitle">
        From concept to completion, we provide end-to-end interior
        solutions tailored to your style and needs.
      </p>

      <div className="services-grid">

        {services.map((service, index) => (
          <ServiceCard
            key={index}
            image={service.image}
            title={service.title}
            description={service.description}
          />
        ))}

      </div>

      <div className="consultation">

        <div className="consult-left">

          <div className="calendar">
            <FaCalendarAlt />
          </div>

          <div>

            <h3>Ready to Start your Project?</h3>

            <p>
              Book a free consultation with our expert designers.
            </p>

          </div>

        </div>

        <button>
          Book a Consultation
        </button>

      </div>

    </section>
  );
};

export default Services;