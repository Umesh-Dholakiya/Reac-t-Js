import React from 'react';
import './Card_1.css';

function Card_1() {
    return (
        <div className="container product-section">
            <div className="product-list">
                <div className="product-item active">
                    <h4>Cake & Milk</h4>
                    <p>(65 items)</p>
                </div>
                <div className="product-item">
                    <h4>Fresh Meat</h4>
                    <p>(30 items)</p>
                </div>
                <div className="product-item">
                    <h4>Vegetables</h4>
                    <p>(25 items)</p>
                </div>
                <div className="product-item">
                    <h4>Apple & Mango</h4>
                    <p>(45 items)</p>
                </div>
                <div className="product-item">
                    <h4>Strawberry</h4>
                    <p>(68 items)</p>
                </div>
                <div className="product-item view-more">
                    <h4>View More</h4>
                </div>
            </div>
            <div className="product-display">
                <div className="product-display-item">
                    <div className="discount">50% OFF</div>
                    <img src='src/Pages/img/3.jpg' alt="Cake" />
                    <h3>Cake</h3>
                    <button className="shop-now_1">Shop Now</button>
                </div>
                <div className="product-display-item">
                    <div className="discount">40% OFF</div>
                    <img src='src/Pages/img/4.jpg' alt="Milk" />
                    <h3>Milk</h3>
                    <button className="shop-now_1">Shop Now</button>
                </div>
            </div>
        </div>
    );
}

export default Card_1;
