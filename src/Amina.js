import React from 'react';
import amina from './Amina.jpeg';
import './Basic.css'; // Import your CSS file for styling

const Amina = () => {
  return (
    <div className="container">
      <h2 className="title">Hi, my name is Amina</h2>
      <img className="image" src={amina} alt="Amina" />
    </div>
  );
};

export default Amina;
