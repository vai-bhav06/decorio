import "./Hero.css";
import heroImage from "../assets/hero.jpg";

const Hero = () => {
  return (
    <section className="hero">

      <div className="hero-left">

        <span className="hero-tag">
          MAKE YOUR HOME BEAUTIFUL
        </span>

        <h1>
          Design Your <br />
          Dream Home
        </h1>

        <p className="hero-description">
          Discover inspiring interiors, elegant furniture, and
          personalized designs that transform every room into a
          beautiful and comfortable living space.
        </p>

        <div className="hero-buttons">
          <button className="primary-btn">
            Get Started
          </button>

          <button className="secondary-btn">
            Explore as Guest
          </button>
        </div>

        <div className="hero-stats">

          <div className="stat-box">
            <h2>2K+</h2>
            <p>Happy Clients</p>
          </div>

          <div className="stat-box">
            <h2>10+</h2>
            <p>Years Experience</p>
          </div>

          <div className="stat-box">
            <h2>500+</h2>
            <p>Projects Completed</p>
          </div>

        </div>

      </div>

      <div className="hero-right">

        <img
          src={heroImage}
          alt="Interior Design"
        />

      </div>

    </section>
  );
};

export default Hero;