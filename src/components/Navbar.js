import React from 'react';
import { Link } from 'react-router-dom';
import '../stylesheets/navbar.scss';

const links = ['Work', 'About', 'Contact'];

const Navbar = () => {
  const renderLinks = () => {
    return links.map(link => {
      return (
        <Link key={link} className="link" to={`/${link.toLowerCase()}`}>
          {link}
        </Link>
      )
    })
  }

  return (
    <nav className="navbar">
      <div className="logo-container">
        logo
      </div>
      <div className="links-container">
        {renderLinks()}
      </div>
    </nav>
  );
}

export default Navbar;
