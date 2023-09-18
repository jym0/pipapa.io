import React from 'react'
import PinoyUlam from '../assets/Pinoy-Ulam.jpg';
import '../styles/About.css';

function About() {
  return (
    <div className="about">
      <div
        className="img"
        style={{ backgroundImage: `url(${PinoyUlam})` }}
      ></div>
      <div className="about-txt">
        <h1>About us</h1>
        <p>
          Welcome to our Filipino food haven! At PIPAPA, we are
          passionate about sharing the rich and diverse flavors of Filipino
          cuisine with food enthusiasts from all around the world. Our journey
          began with a deep appreciation for the culinary traditions and
          cultural heritage of the Philippines. From the bustling streets of
          Manila to the tranquil shores of Palawan, we've embarked on a culinary
          adventure to bring you the most authentic and mouthwatering Filipino
          dishes. Our team of talented chefs and food experts work tirelessly to
          curate a menu that celebrates the vibrant flavors, aromatic spices,
          and unique cooking techniques that define Filipino cooking. Whether
          you're craving the comfort of adobo, the tinolang manok, or the
          sweetness of pinakbet, we're here to transport your taste buds to the
          heart of the Philippines. Join us on this gastronomic journey as we
          invite you to savor the essence of Filipino culture, one delicious
          bite at a time. Mabuhay and enjoy!
        </p>
      </div>
    </div>
  );
}

export default About