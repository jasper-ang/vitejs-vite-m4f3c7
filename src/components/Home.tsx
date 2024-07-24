import React from 'react';
import './Home.css';
import jasperImage from '../assets/jasper.jpg';

const Home: React.FC = () => {
  return (
    <div id="home">
      <h1>Welcome to My Portfolio</h1>
      <p>This is the home section.</p>
      <img src={jasperImage} alt="Jasper" className="example-image" />
    </div>
  );
};

export default Home;
