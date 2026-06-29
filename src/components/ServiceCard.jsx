import "./ServiceCard.css";
import { FaArrowRight } from "react-icons/fa";

const ServiceCard = ({ image, title, description }) => {
  return (
    <div className="service-card">

      <div className="service-image">
        <img src={image} alt={title} />
      </div>

      <div className="service-info">

        <h3>{title}</h3>

        <p>{description}</p>

        <button className="service-btn">
          <FaArrowRight />
        </button>

      </div>

    </div>
  );
};

export default ServiceCard;