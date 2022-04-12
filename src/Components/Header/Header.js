import React from 'react';
import './Header.css';
import logo from '../../images/Logo.svg';

const Header = () => {
    return (
        <nav className="header">
            <div>
                <img src={logo} alt="" srcset="" />
            </div>
            <div>
                <a href="/home">Home</a>
                <a href="/shop">Shop</a>
                <a href="/orders">Orders</a>
                <a href="/inventory">Inventory</a>
                <a href="/aboutus">About Us</a>
            </div>
        </nav>
    );
};

export default Header;