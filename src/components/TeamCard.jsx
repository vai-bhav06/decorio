import "./TeamCard.css";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn
} from "react-icons/fa";

const TeamCard = ({ image, name, role }) => {
  return (
    <div className="team-card">

      <img src={image} alt={name} className="team-img" />

      <div className="team-details">
        <h3>{name}</h3>
        <p>{role}</p>

        <div className="team-social">
          <FaFacebookF />
          <FaInstagram />
          <FaLinkedinIn />
        </div>
      </div>

    </div>
  );
};

export default TeamCard;