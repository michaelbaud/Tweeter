import React from 'react'
import { FaFacebook } from 'react-icons/fa'

const Header = () => {
    return (
        <div className="header">
            <h1 className="header-title">Tweeter</h1>
            <button type="button" className="login-btn">
                <FaFacebook /> Login
            </button>
        </div>
    );
}

export default Header;
