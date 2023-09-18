import React from 'react'
import { Link } from 'react-router-dom';
import HomeUlam from "../assets/home-ulam.png";
import '../styles/Home.css';

function Home() {
  return (
    <div className="home">
      <div className="header">
        <h1>Pinoy Palate Paradise</h1>
        <p>A taste of the Philippines, On-the-Go.</p>
        <Link to="/menu">
          <button>Order now</button>
        </Link>
      </div>
      <img src={HomeUlam} alt="Ulam" className="home-ulam"></img>
    </div>
  );
}

export default Home