import React, { useState } from 'react';
import NavBar from './NavBar';


function SoumissionReponse() {
  const [reponse, setReponse] = useState('');

  const handleReponseChange = (event) => {
    setReponse(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Réponse soumise :', reponse);
    setReponse('');
  };

  return (
    <div>
      
      <NavBar/> <br/><br/><br/><br/><br/><br/><br/>
      <div className="container">
        <h2>Soumettre une réponse</h2>
        <div className="row justify-content-center">
          <div className="col-md-6">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="reponse">Réponse :</label>
                <textarea id="reponse" className="form-control" value={reponse} onChange={handleReponseChange} required />
              </div>
              <button type="submit" className="btn btn-primary">Soumettre</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SoumissionReponse;
