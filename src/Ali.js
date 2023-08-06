import React from 'react';
import ali from './Ali.jpeg';
import './Basic.css'; // Import your CSS file for styling

const Amina = () => {
  return (
    <div className="container">
      <h2 className="title">Hi, my name is Ali</h2>
      <img className="image" src={ali} alt="Ali" />
    </div>
  );
};

export default Amina;
