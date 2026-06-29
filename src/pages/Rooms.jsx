import "./Rooms.css";
import {
  FaCouch,
  FaUtensils,
  FaBath,
  FaLaptopHouse,
  FaTree,
  FaThLarge,
  FaArrowRight,
  FaEnvelope
} from "react-icons/fa";

import living from "../assets/living-room.jpg";
import kitchen from "../assets/kitchen.jpg";
import bathroom from "../assets/bathroom.jpg";
import office from "../assets/office.jpg";
import outdoor from "../assets/outdoor.jpg";

const rooms = [
  {
    image: living,
    title: "LIVING ROOM",
    size: "320+ Designs"
  },
  {
    image: kitchen,
    title: "KITCHEN ROOM",
    size: "450+ Designs"
  },
  {
    image: bathroom,
    title: "BATH ROOM",
    size: "200+ Designs"
  },
  {
    image: office,
    title: "OFFICE ROOM",
    size: "240+ Designs"
  },
  {
    image: outdoor,
    title: "OUTDOOR ROOM",
    size: "310+ Designs"
  }
];

function Rooms() {
  return (
    <section className="rooms">

      <p className="section-tag">OUR COLLECTIONS</p>

      <h1>Explore Beautiful Rooms</h1>

      <p className="stitle">
        Discover thoughtfully designed spaces for every part of your home.
      </p>

     

      <div className="category-bar">

        <button className="active">
          <FaThLarge /> All Rooms
        </button>

        <button>
          <FaCouch /> Living Room
        </button>

        <button>
          <FaUtensils /> Kitchen
        </button>

        <button>
          <FaBath /> Bathroom
        </button>

        <button>
          <FaLaptopHouse /> Office
        </button>

        <button>
          <FaTree /> Outdoor
        </button>

      </div>

      <div className="room-grid">

        {rooms.map((room, index) => (

          <div className="room-card" key={index}>

            <img src={room.image} alt="" />

            <div className="card-content">

              <h3>{room.title}</h3>

              <div className="bottom">

                <span>{room.size}</span>

                <button>
                  <FaArrowRight />
                </button>

              </div>

            </div>

          </div>

        ))}

      </div>

      <div className="newsletter">

  <div className="newsletter-left">
    <div className="mail-icon">
      <FaEnvelope />
    </div>

    <div>
      <h3>Subscribe Newsletter</h3>
      <p>Get the latest interior design updates.</p>
    </div>
  </div>

  <div className="newsletter-right">
    <input
      type="email"
      placeholder="Enter email"
    />
    <button>Subscribe</button>
  </div>

</div>

    </section>
  );
}

export default Rooms;