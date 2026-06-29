import "./Contact.css";

import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
} from "react-icons/fa";

const Contact = () => {
  return (
    <section className="contact">

      <div className="contact-header">

        <p className="section-tag">GET IN TOUCH</p>

        <h1>
          Let's Create Something
          <br />
          Beautiful Together
        </h1>

        <p className="stitle">
          We'd love to hear from you! Whether you have a question,
          need a consultation, or want to start a project,
          our team is here to help.
        </p>

      </div>

      <div className="contact-container">

  {/* Top Row */}
  <div className="contact-top">

    {/* Contact Information */}

   <div className="contact-info">

    <h2>Contact Info</h2>

    <p className="info-text">
        We'd love to hear from you.
    </p>

    <div className="info-box">
        <div className="icon">
            <FaMapMarkerAlt />
        </div>

        <div className="details">
            <h4>Office</h4>
            <p>Mumbai, Maharashtra</p>
        </div>
    </div>

    <div className="info-box">
        <div className="icon">
            <FaPhoneAlt />
        </div>

        <div className="details">
            <h4>Phone</h4>
            <p>+91 98765 43210</p>
        </div>
    </div>

    <div className="info-box">
        <div className="icon">
            <FaEnvelope />
        </div>

        <div className="details">
            <h4>Email</h4>
            <p>hello@decorio.com</p>
        </div>
    </div>

    <div className="info-box">
        <div className="icon">
            <FaClock />
        </div>

        <div className="details">
            <h4>Hours</h4>
            <p>Mon - Sat | 9 AM - 6 PM</p>
        </div>
    </div>

</div>

    {/* Contact Form */}

 <div className="contact-form">

    <h2>Send us a Message</h2>

    <p className="form-text">
        Fill out the form below and we'll get back to you within 24 hours.
    </p>

    <form>

        <div className="row">
            <input type="text" placeholder="Full Name" />
            <input type="email" placeholder="Email Address" />
        </div>

        <div className="row">
            <input type="tel" placeholder="Phone Number" />
            <input type="text" placeholder="Subject" />
        </div>

        <textarea
            placeholder="Write your message here..."
        ></textarea>

        <button className="send-btn">
            Send Message
        </button>

    </form>

</div>

  </div>

  {/* Bottom Map */}

  <div className="map">

    <iframe
      title="Decorio Location"
      src="https://www.google.com/maps?q=Mumbai&output=embed"
      loading="lazy"
    ></iframe>

  </div>

</div>

    </section>
  );
};

export default Contact;