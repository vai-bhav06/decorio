import { useEffect } from "react";
import "./Profile.css";
import {
  FaUserCircle,
  FaHeart,
  FaCalendarAlt,
  FaEnvelope,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  const logout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <div className="profile-page">

      <div className="profile-container">

        {/* Sidebar */}

        <div className="profile-sidebar">

          <FaUserCircle className="profile-image" />

          <h2>{user?.name}</h2>

          <p>{user?.email}</p>

          <div className="sidebar-menu">

            <button>
              <FaHeart />
              Wishlist
            </button>

            <button>
              <FaCalendarAlt />
              Appointments
            </button>

            <button>
              <FaEnvelope />
              Messages
            </button>

            <button>
              <FaCog />
              Settings
            </button>

            <button className="logout" onClick={logout}>
              <FaSignOutAlt />
              Logout
            </button>

          </div>

        </div>

        {/* Content */}

        <div className="profile-content">

          <div className="welcome-card">
            <h1>Welcome Back 👋</h1>

            <p>
              Manage your profile, appointments and saved interior designs from
              your dashboard.
            </p>
          </div>

          <div className="dashboard-cards">

            <div className="dash-card">
              <h3>Saved Designs</h3>
              <span>08</span>
            </div>

            <div className="dash-card">
              <h3>Appointments</h3>
              <span>03</span>
            </div>

            <div className="dash-card">
              <h3>Messages</h3>
              <span>12</span>
            </div>

          </div>

          <div className="recent-projects">

            <h2>Recent Projects</h2>

            <table>

              <thead>
                <tr>
                  <th>Project</th>
                  <th>Status</th>
                  <th>Date</th>
                </tr>
              </thead>

              <tbody>

                <tr>
                  <td>Modern Living Room</td>
                  <td className="active">Completed</td>
                  <td>20 Jun 2026</td>
                </tr>

                <tr>
                  <td>Luxury Bedroom</td>
                  <td className="pending">Pending</td>
                  <td>28 Jun 2026</td>
                </tr>

                <tr>
                  <td>Office Interior</td>
                  <td className="active">Completed</td>
                  <td>05 Jul 2026</td>
                </tr>

              </tbody>

            </table>

          </div>

        </div>

      </div>

    </div>
  );
};

export default Profile;