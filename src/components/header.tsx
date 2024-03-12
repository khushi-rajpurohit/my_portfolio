// header.tsx

import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

const Header: React.FC = () => {
  return (
    <div className='header'>
      <ul className="nav justify-content-center">
        <li className="nav-item">
          <Link className="nav-link header-hover" to="/">
            Khushi Rajpurohit
          </Link>
        </li>
        <li className="nav-item">
          <span className="nav-link disabled header-hover " aria-disabled="true">
          Full-Stack Developer
          </span>
        </li>
        <li className="nav-item resume">
          <Link className="nav-link header-hover" to="/resume">
            Resume
          </Link>
        </li>
        <li className="nav-item work">
          <Link className="nav-link header-hover" to="/work">
            Work
          </Link>
        </li>
        <li className="nav-item about">
          <Link className="nav-link header-hover" to="/about">
            About
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
