import React from 'react';
import './Card_3.css';

const Card_3 = () => {
  const cards = [
    {
      title: 'Fresh & Healthy Organic Fruits',
      discount: '35%',
      image: 'src/Pages/img/13.jpg', 
    },
    {
      title: 'Healthy Bakery Products',
      discount: '30%',
      image: 'src/Pages/img/14.jpg',  
    },
    {
      title: 'Fresh Snacks & Sweets',
      discount: '20%',
      image: 'src/Pages/img/15.jpg',  
    },
  ];

  return (
    <div className="card-container">
      {cards.map((card, index) => (
        <div className="card" key={index}>
          <div
            className="card-image"
            style={{ backgroundImage: `url(${card.image})` }}
          >
            <img src={card.image} alt={card.title} />
          </div>
          <div className="card-content">
            <h3>{card.title}</h3>
            <p>{card.discount} Off on first order</p>
            <button className="shop-button">Shop Now</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card_3;
