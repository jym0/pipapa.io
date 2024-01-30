import React, {useState} from 'react'
import Logo from "../assets/pipapa.png";
import { Link, useLocation } from 'react-router-dom';
import ReorderIcon from "@mui/icons-material/Reorder";
import '../styles/Navbar.css'

function Navbar() {

  const [openLinks, setOpenLinks] = useState(false)
  const location = useLocation()

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  }
  return (
    <div className="navbar">
      <div className="leftside" id={openLinks ? "open" : "close"}>
        <img src={Logo} alt="Logo" />
        <div className="hiddenLinks">
          <Link
            to="/"
            className={location.pathname === "/" ? "active-link" : ""}
          >
            Home
          </Link>
          <Link
            to="/menu"
            className={location.pathname === "/menu" ? "active-link" : ""}
          >
            Menu
          </Link>
          <Link
            to="/about"
            className={location.pathname === "/about" ? "active-link" : ""}
          >
            About
          </Link>
          <Link
            to="/contact"
            className={location.pathname === "/contact" ? "active-link" : ""}
          >
            Contact
          </Link>
        </div>
      </div>
      <div className="rightside">
        <Link to="/" className={location.pathname === "/" ? "active-link" : ""}>
          Home
        </Link>
        <Link
          to="/menu"
          className={location.pathname === "/menu" ? "active-link" : ""}
        >
          Menu
        </Link>
        <Link
          to="/about"
          className={location.pathname === "/about" ? "active-link" : ""}
        >
          About
        </Link>
        <Link
          to="/contact"
          className={location.pathname === "/contact" ? "active-link" : ""}
        >
          Contact
        </Link>
        <button onClick={toggleNavbar}>
          <ReorderIcon></ReorderIcon>
        </button>
      </div>
    </div>
  );
}

export default Navbar
