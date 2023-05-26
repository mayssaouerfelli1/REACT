import React, { useState } from 'react';
import NavBar from './NavBar';

function Authentification({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onLogin(email, password);
  };

  return (
    <div>
      <NavBar /><br/><br/><br/><br/><br/>

      <div className="container mt-4">
        <h2>Authentification</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email :</label>
            <input type="email" id="email" className="form-control" value={email} onChange={handleEmailChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Mot de passe :</label>
            <input type="password" id="password" className="form-control" value={password} onChange={handlePasswordChange} required />
          </div>
          <button type="submit" className="btn btn-primary">Se connecter</button>
        </form>
      </div>
    </div>
  );
}

export default Authentification;
