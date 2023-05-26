import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <nav className="navbar navbar-expand navbar-primary bg-primary">
      <Link to="/" className="navbar-brand text-light">Gestion des erreurs</Link>
      <div className="navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to="/souQuest" className="nav-link text-light">Soumettre question</Link>
          </li>
          <li className="nav-item">
            <Link to="/answer" className="nav-link text-light">Soumettre réponse</Link>
          </li>
          <li className="nav-item">
            <Link to="/question" className="nav-link text-light">Recherche</Link>
          </li>
        </ul>
        <ul className="navbar-nav ml-auto">
          {isLoggedIn ? (
            <li className="nav-item">
              <Link to="/logout" className="nav-link text-light" onClick={handleLogout}>Logout</Link>
            </li>
          ) : (
            <li className="nav-item">
              <Link to="/" className="nav-link text-light">Login</Link>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
