import "./About.css";
import TeamCard from "../components/TeamCard";

import person1 from "../assets/person1.jpg";
import person2 from "../assets/person2.jpg";
import person3 from "../assets/person3.jpg";

import { FaEnvelope } from "react-icons/fa";

const team = [
  {
    image: person2,
    name: "Liam Carter",
    role: "Lead Architect"
  },
  {
    image: person1,
    name: "Emma Johnson",
    role: "Founder & Designer"
  },
  {
    image: person3,
    name: "Sophia Martinez",
    role: "Interior Designer"
  }
];

const About = () => {
  return (
    <section className="about">

      <div className="section-header">

        <p className="section-tag">
          OUR WORK
        </p>

        <h1>
          Designing Spaces,
          <br></br>
          Creating Better Living
        </h1>

        <p className="stitle">
          At Decorio, we believe great design has the power to transform
          the way you live. We create beautiful, functional and inspiring
          spaces tailored to your lifestyle and needs.
        </p>

      </div>

      <div className="team-section">

        <p className="section-tag">
          MEET THE TEAM
        </p>

        <h2>
          The Creative Mind Behind Decorio
        </h2>

        <div className="team-grid">

          {team.map((member, index) => (
            <TeamCard
              key={index}
              image={member.image}
              name={member.name}
              role={member.role}
            />
          ))}

        </div>

      </div>

      <div className="about-contact">

        <div className="contact-left">

          <div className="mail-box">
            <FaEnvelope />
          </div>

          <div>
            <h3>Have a Project in Mind?</h3>
            <p>
              Let's work together to create a space that's uniquely yours.
            </p>
          </div>

        </div>

        <button>
          Get in Touch
        </button>

      </div>

    </section>
  );
};

export default About;