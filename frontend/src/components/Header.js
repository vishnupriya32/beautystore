import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => (
  <header>
    <nav className="navbar navbar-expand-lg navbar-light bg-white">
      <div className="container-fluid fw-bold">
        <Link className="navbar-brand" to="/">BeautyStore</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/signin">Sign In</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/signup">Sign Up</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
);

export default Header;
