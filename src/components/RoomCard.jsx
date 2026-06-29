import "./RoomCard.css";
import { FaArrowRight } from "react-icons/fa";

const RoomCard = ({ image, title, designs }) => {
  return (
    <div className="room-card">

      <div className="room-image">
        <img src={image} alt={title} />
      </div>

      <div className="room-content">

        <h3>{title}</h3>

        <div className="room-footer">

          <span>{designs}</span>

          <button className="arrow-btn">
            <FaArrowRight />
          </button>

        </div>

      </div>

    </div>
  );
};

export default RoomCard;