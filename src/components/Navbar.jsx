import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import {
  FaSignInAlt,
  FaUserCircle,
  FaHome,
  FaCouch,
  FaTools,
  FaInfoCircle,
  FaEnvelope,
} from "react-icons/fa";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 900);

  const navigate = useNavigate();
  const location = useLocation();

  // Logged in user
  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 900);
    };

    window.addEventListener("resize", handleResize);

    return () =>
      window.removeEventListener("resize", handleResize);
  }, []);

  // Logout
  const logout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("activeUser");
    localStorage.removeItem("isLoggedIn");

    setMenuOpen(false);

    navigate("/");
  };

  // Smooth Scroll
  const scrollToSection = (id) => {
    setMenuOpen(false);

    if (location.pathname !== "/") {
      navigate("/");

      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 250);
    } else {
      document.getElementById(id)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <nav className="navbar">

      {/* Logo */}
      <div className="logo">
        <h2 onClick={() => navigate("/")}>Decorio</h2>
      </div>

      {/* Navigation */}
      <div className={menuOpen ? "nav-menu active" : "nav-menu"}>

        <a onClick={() => scrollToSection("home")}>
          <FaHome /> Home
        </a>

        <a onClick={() => scrollToSection("rooms")}>
          <FaCouch /> Rooms
        </a>

        <a onClick={() => scrollToSection("services")}>
          <FaTools /> Services
        </a>

        <a onClick={() => scrollToSection("about")}>
          <FaInfoCircle /> About
        </a>

        <a onClick={() => scrollToSection("contact")}>
          <FaEnvelope /> Contact
        </a>

        {/* Mobile Login */}
        {!user && isMobile && (
          <Link
            to="/login"
            className="mobile-login"
            onClick={() => setMenuOpen(false)}
          >
            <FaSignInAlt />
            <span>Sign In</span>
          </Link>
        )}

      </div>

      {/* Right Section */}
      <div className="right-section">

        {user ? (
          <div className="profile">

            {/* Profile Icon Only */}
            <Link
              to="/profile"
              className="profile-link"
              onClick={() => setMenuOpen(false)}
            >
              <FaUserCircle className="profile-btn" />
            </Link>

            {/* Logout only on Desktop */}
            {!isMobile && (
              <button
                className="logout-btn"
                onClick={logout}
              >
                Logout
              </button>
            )}

          </div>
        ) : (
          !isMobile && (
            <Link
              to="/login"
              className="signin-btn"
            >
              <FaSignInAlt />
              <span>Sign In</span>
            </Link>
          )
        )}

        {/* Mobile Menu */}
        <button
          className="menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <HiX /> : <HiMenuAlt3 />}
        </button>

      </div>

    </nav>
  );
};

export default Navbar;