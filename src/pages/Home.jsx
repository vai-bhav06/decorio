import Hero from "../components/Hero";
import Rooms from "./Rooms";
import Services from "./Services";
import About from "./About";
import Contact from "./Contact";

const Home = () => {
  return (
    <>
      <section id="home">
        <Hero />
      </section>

      <section id="rooms">
        <Rooms />
      </section>

      <section id="services">
        <Services />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="contact">
        <Contact />
      </section>
    </>
  );
};

export default Home;