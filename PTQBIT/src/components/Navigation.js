import React, { useState } from 'react';
import { HiMenuAlt3 } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import ScrollTrigger from 'react-scroll-trigger';

function Navigation() {
  const [navBar, setNavBar] = useState(true);
  return (
    <ScrollTrigger onEnter={() => setNavBar(true)} onExit={() => setNavBar(false)}>
      {
        navBar ? (
          <nav className="navbar navbar-expand-lg bg-transparent fixed-top app-container" data-bs-theme="dark">
            <div className="container-fluid">
              <Link className="navbar-brand" to="/">COFFEE BRO</Link>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <HiMenuAlt3 className="navbar-toggler-icon" />
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/about-us">About</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/our-menu">Menu</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/contact-us">Contact</Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        ) : (
          <nav className="navbar navbar-expand-lg bg-dark fixed-top app-container" data-bs-theme="dark">
            <div className="container-fluid">
              <Link className="navbar-brand" to="/">COFFEE BRO</Link>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <HiMenuAlt3 className="navbar-toggler-icon" />
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/about-us">About</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/our-menu">Menu</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/contact-us">Contact</Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        )
      }
    </ScrollTrigger>
  );
}

export default Navigation;
