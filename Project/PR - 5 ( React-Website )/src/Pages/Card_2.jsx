import React from 'react';
import './Card_2.css';

function Card_2() {
    const categories = ['All', 'Snack', 'Vegetable', 'Fruit', 'Bakery'];
    const products = [
        {
            id: 1,
            image: 'src/Pages/img/5.jpg',
            title: 'Fresh organic villa farm lemon 500gm pack',
            category: 'Vegetables',
            rating: 4.5,
            price: 120.25,
            oldPrice: 123.25,
            discount: true,
            locked: true
        },
        {
            id: 2,
            image: 'src/Pages/img/6.jpg',
            title: 'Best snacks with hazel nut pack 200gm',
            category: 'Snacks',
            rating: 5.0,
            price: 145,
            oldPrice: 150,
            discount: true,
            locked: true
        },
        {
            id: 3,
            image: 'src/Pages/img/7.jpg',
            title: 'Fresh organic apple 1kg simla marming',
            category: 'Fruits',
            rating: 4.5,
            price: 120.25,
            oldPrice: 123.25,
            discount: true,
            locked: true
        },
        {
            id: 4,
            image: 'src/Pages/img/8.jpg',
            title: 'Delicious white baked fresh bread and toast',
            category: 'Bakery',
            rating: 5.0,
            price: 20,
            oldPrice: 22.10,
            discount: true,
            locked: true
        },
        {
            id: 5,
            image: 'src/Pages/img/9.jpg',
            title: 'Sweet crunchy nut mix 250gm pack',
            category: 'Snacks',
            rating: 5.0,
            price: 120.25,
            oldPrice: 123.25,
            discount: true,
            locked: true
        },
        {
            id: 6,
            image: 'src/Pages/img/10.jpg',
            title: 'Organic fresh vanilla farm watermelon 5kg',
            category: 'Fruits',
            rating: 3.2,
            price: 50.30,
            oldPrice: 72.60,
            discount: true,
            locked: true
        },
        {
            id: 7,
            image: 'src/Pages/img/11.jpg',
            title: 'Organic fresh vanilla farm watermelon 5kg',
            category: 'Fruits',
            rating: 3.2,
            price: 50.30,
            oldPrice: 72.60,
            discount: true,
            locked: true
        },
        {
            id: 8,
            image: 'src/Pages/img/6.jpg',
            title: 'Organic fresh vanilla farm watermelon 5kg',
            category: 'Fruits',
            rating: 3.2,
            price: 50.30,
            oldPrice: 72.60,
            discount: true,
            locked: true
        },
    ];

    return (
    
        <div className="product-section_1">
            <div className="categories">
                {categories.map((category, index) => (
                    <div className="category-item" key={index}>
                        {category}
                    </div>
                ))}

                <div className="advertisement-card">
                    <div className="ad-content">
                        <h2>Juicy</h2>
                        <h3>FRUITS</h3>
                        <p>100% Natural</p>
                        <button className="shop-now_2">Shop Now</button>
                    </div>
                </div>
            </div>

            <div className="products-grid">
                {products.map(product => (
                    <div className="product-card" key={product.id}>
                        <img src={product.image} alt={product.title} />
                        <div className="product-info">
                            <h4>{product.category}</h4>
                            <p className="rating">Rating: {product.rating} ★</p>
                            <p>{product.title}</p>
                            <p className="price">
                                ${product.price} <span className="old-price">${product.oldPrice}</span>
                            </p>
                            {product.locked && <i className="fa fa-lock"></i>}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Card_2;
