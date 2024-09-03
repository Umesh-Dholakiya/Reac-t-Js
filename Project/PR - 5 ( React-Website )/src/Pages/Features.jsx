import React from 'react';
import './Features.css';

const featuresData = [
  {
    icon: 'fa-box',
    title: 'Product Packing',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
  },
  {
    icon: 'fa-headset',
    title: '24X7 Support',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
  },
  {
    icon: 'fa-truck',
    title: 'Delivery in 5 Days',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
  },
  {
    icon: 'fa-dollar-sign',
    title: 'Payment Secure',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
  },
];

const Features = () => {
  return (
    <div className="features-container">
      {featuresData.map((feature, index) => (
        <div className="feature-card" key={index}>
          <div className="feature-icon">
            <i className={`fas ${feature.icon}`}></i>
          </div>
          <h3 className="feature-title">{feature.title}</h3>
          <p className="feature-description">{feature.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Features;
