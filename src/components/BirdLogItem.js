import React from 'react';
import './BirdLogItem.css'; 

const BirdLogItem = ({ bird }) => {
  return (
    <div className="bird-log-item">
      <img src={bird.image} alt={bird.name} className="bird-image" />
      <div className="bird-name">{bird.name}</div>
      <input
        type="number"
        placeholder="Number seen"
        className="bird-input"
        min="0"
      />
    </div>
  );
};

export default BirdLogItem;




