import React, { useState } from 'react';
import NavBar from './NavBar';


function CreationCompte({ onSignup }) {
  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleNomChange = (event) => {
    setNom(event.target.value);
  };

  const handlePrenomChange = (event) => {
    setPrenom(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSignup(nom, prenom, email, password);
  };

  return (
    <div>
      <NavBar/><br/><br/><br/><br/><br/><br/><br/>
      

      <div className="container">
        <h2>Création de compte</h2>
        <div className="row justify-content-center">
          <div className="col-md-6">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="nom">Nom :</label>
                <input type="text" id="nom" className="form-control" value={nom} onChange={handleNomChange} required />
              </div>
              <div className="form-group">
                <label htmlFor="prenom">Prénom :</label>
                <input type="text" id="prenom" className="form-control" value={prenom} onChange={handlePrenomChange} required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email :</label>
                <input type="email" id="email" className="form-control" value={email} onChange={handleEmailChange} required />
              </div>
              <div className="form-group">
                <label htmlFor="password">Mot de passe :</label>
                <input type="password" id="password" className="form-control" value={password} onChange={handlePasswordChange} required />
              </div>
              <button type="submit" className="btn btn-primary">Créer un compte</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreationCompte;
