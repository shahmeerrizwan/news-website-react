import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../Assets/news-logo.png';
import './Navbar.css';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.pageYOffset;
            const scrolledPercentage = (currentScrollPos / document.body.scrollHeight) * 100;
            setVisible(prevScrollPos > currentScrollPos || scrolledPercentage < 5);
            setPrevScrollPos(currentScrollPos);
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, [prevScrollPos]);

    const handleMenuItemClick = () => {
        setMenuOpen(false);
    };

    return (
        <div className={`sticky ${visible ? 'visible' : 'hidden'}`}>
            <div className="logo"> <img src={logo} alt="" /></div>
            <nav>
                <input type="checkbox" id="click" checked={menuOpen} onChange={() => setMenuOpen(!menuOpen)} />
                <label htmlFor="click" className="menu-btn">
                    <i className="fas fa-bars"></i>
                    <div className="newslogo"><img src={logo} alt="" /></div>
                </label>
                <ul>
                    <li><Link to="/" onClick={handleMenuItemClick}>Home</Link></li>
                    <li><Link to="/news" onClick={handleMenuItemClick}>Business</Link></li>
                    <li><Link to="/entertainment" onClick={handleMenuItemClick}>Entertainment</Link></li>
                    <li><Link to="/general" onClick={handleMenuItemClick}>General</Link></li>
                    <li><Link to="/health" onClick={handleMenuItemClick}>Health</Link></li>
                    <li><Link to="/science" onClick={handleMenuItemClick}>Science</Link></li>
                    <li><Link to="/sports" onClick={handleMenuItemClick}>Sports</Link></li>
                    <li><Link to="/technology" onClick={handleMenuItemClick}>Technology</Link></li>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;
