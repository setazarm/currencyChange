import React from 'react';
// import './Card.css';

const Card = ({ title, description, image, url }) => {
  return (
    <div className='card'>
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <p>{description}</p>
      <a href={url}>Read more</a>
    </div>
  );
};

export default Card;
