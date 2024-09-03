import React from 'react';
import './Header.css';

function Header() {
    return (
        <header className="header">
            <div className="container top_header">
                <div className="navbar-brand">
                    <img src="src/Pages/img/logo.png" alt="Logo" />
                </div>
                <div className="search-bar">
                    <input type="text" placeholder="Search for items..." />
                    <select>
                        <option value="All Categories">All Categories</option>
                        <option value="Mens">Men's</option>
                        <option value="Womens">Women's</option>
                        <option value="Electronics">Electronics</option>
                    </select>
                    <button type="submit">
                        <i className="fa fa-search"></i>
                    </button>
                </div>
                <div className="navbar-right">
                    <a href="#account" className="nav-link"><i className="fa fa-user"></i> Account</a>
                    <a href="#wishlist" className="nav-link"><i className="fa fa-heart"></i> Wishlist</a>
                    <a href="#cart" className="nav-link"><i className="fa fa-shopping-cart"></i> Cart</a>
                </div>
            </div>

          
        </header>
    );
}

export default Header;
