import React from 'react'
import FacebookIcon from "@mui/icons-material/Facebook"
import InstagramIcon from "@mui/icons-material/Instagram"
import YoutubeIcon from "@mui/icons-material/YouTube"
import LinkedinIcon from "@mui/icons-material/LinkedIn";
import '../styles/Footer.css';

function Footer() {
  return (
    <div className="footer">
      <div className="social-icons">
        <FacebookIcon />
        <InstagramIcon />
        <YoutubeIcon />
        <LinkedinIcon />
      </div>
      <p> &copy; 2023 pipapa.com</p>
    </div>
  );
}

export default Footer