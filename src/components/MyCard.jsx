import React from 'react';
import Tags from './Tags';

const MyCard = ({ dogs }) => {
  return (
    <div className={`card ${dogs.color}`}>
      <h2>{dogs.name}</h2>
      <img src={dogs.image} alt={dogs.name} />
      <p>{dogs.description}</p>
      <Tags dog={dogs} />
    </div>
  );
};

export default MyCard;
