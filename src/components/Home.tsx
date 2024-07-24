import React from 'react';
import './Home.css';
import jasperImage from '../assets/jasper.jpg';

const Home: React.FC = () => {
  return (
    <div id="home">
      <h1>Jasper's Portfolio</h1>
      <br></br>
      <hr></hr>
      <br></br>
      <img src={jasperImage} alt="Jasper" height = "200" className="example-image" />
      <br></br>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio repellat sapiente provident, voluptatem temporibus illo quod, voluptas reprehenderit aliquam enim nisi eaque laudantium doloremque esse! Libero aperiam repellendus ipsa error.</p>
      <br></br>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi nemo provident est ipsam, non impedit delectus voluptatem soluta, maxime ad obcaecati minus autem temporibus veritatis facere! Saepe aliquam quasi nihil?</p>
      <br></br>
    </div>
  );
};

export default Home;
