import React from 'react';
import './Offer.css';

const Offer = () => {
    return (
        <div className="product-card-container">
            <div className="product-card_1">
                <img
                    src="src/Pages/img/5.jpg"
                    alt="Sweet snakes crunchy nut mix"
                    className="product-image"
                />
                <div className="product-info">
                    <p className="product-category">Snacks</p>
                    <div className="product-rating">
                        <span>★★★★★</span> <span className="rating-value">(5.0)</span>
                    </div>
                    <p className="product-name">Sweet snakes crunchy nut mix <br /> 250gm pack</p>
                    <div className="product-pricing">
                        <span className="current-price">$100.00</span>
                        <span className="original-price">$110.00</span>
                    </div>
                </div>
            </div>

            <div className="product-card_1">
                <img
                    src="src/Pages/img/6.jpg"
                    alt="Best snakes with hazel nut mix"
                    className="product-image"
                />
                <div className="product-info">
                    <p className="product-category">Snacks</p>
                    <div className="product-rating">
                        <span>★★★★☆</span> <span className="rating-value">(4.5)</span>
                    </div>
                    <p className="product-name">Best snakes with hazel nut mix <br /> pack 200gm</p>
                    <div className="product-pricing">
                        <span className="current-price">$120.25</span>
                        <span className="original-price">$123.25</span>
                    </div>
                </div>
            </div>

            <div className="product-card_1">
                <img
                    src="src/Pages/img/7.jpg"
                    alt="Sweet snakes crunchy nut mix"
                    className="product-image"
                />
                <div className="product-info">
                    <p className="product-category">Snacks</p>
                    <div className="product-rating">
                        <span>★★★★★</span> <span className="rating-value">(5.0)</span>
                    </div>
                    <p className="product-name">Sweet snakes crunchy nut mix <br />250gm pack</p>
                    <div className="product-pricing">
                        <span className="current-price">$100.00</span>
                        <span className="original-price">$110.00</span>
                    </div>
                </div>
            </div>

            <div className="promo-card">
                <img src="src/Pages/img/19.jpg" alt="Organic & Healthy Vegetables" className="promo-image" />
                <div className="promo-info">
                    <h2>Organic & Healthy <br /> Vegetables</h2>
                    <p>25% OFF</p>
                    <button className="shop-now-btn">Shop Now</button>
                </div>
            </div>
        </div>
    );
};

export default Offer;
