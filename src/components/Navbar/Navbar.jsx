import React, { useState } from 'react';
import './Navbar.css';
import menu from '../../assets/burger-bar.png';
import { Link, animateScroll as scroll } from 'react-scroll';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <div className='navbar'>
      <ul className={isMobileMenuOpen ? 'hidden' : ''}>
      <li>
          <Link to="works" smooth={true} duration={500} offset={-50} onClick={closeMobileMenu}>
            Works
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={500} offset={-50} onClick={closeMobileMenu}>
            About
          </Link>
        </li>
        <li>
          <Link to="skills" smooth={true} duration={500} offset={-50} onClick={closeMobileMenu}>
            Skills
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={500} offset={-50} onClick={closeMobileMenu}>
            Contact
          </Link>
        </li>
      </ul>
      <div className='mobile-menu'>
        <button onClick={toggleMobileMenu} className={isMobileMenuOpen ? 'close-btn' : ''}>
          {isMobileMenuOpen ? 'X' : <img src={menu} alt='' />}
        </button>
        {isMobileMenuOpen && (
          <ul>
            <li onClick={closeMobileMenu}>
              <Link to="about" smooth={true} duration={500} offset={-50}>
                About
              </Link>
            </li>
            <li onClick={closeMobileMenu}>
              <Link to="works" smooth={true} duration={500} offset={-50}>
                Works
              </Link>
            </li>
            <li onClick={closeMobileMenu}>
              <Link to="skills" smooth={true} duration={500} offset={-50}>
                Skills
              </Link>
            </li>
            <li onClick={closeMobileMenu}>
              <Link to="contact" smooth={true} duration={500} offset={-50}>
                Contact
              </Link>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default Navbar;
