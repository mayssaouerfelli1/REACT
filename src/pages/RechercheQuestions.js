import React, { useState, useEffect } from 'react';
import NavBar from './NavBar';
import axios from 'axios';


function RechercheQuestions() {
  const [searchQuery, setSearchQuery] = useState('');
  const [errors, serErrors] = useState([]);

  useEffect(() => {
    const fetchErrors = () => {
      axios.get('http://localhost:8000/api/errors').then(res => {
        serErrors(res.data['hydra:member'])
      })
    }

    fetchErrors();
  })

  const handleSearch = () => {
    console.log('Recherche de questions :', searchQuery);
  };

  return (
    <div>
      <NavBar/><br/><br/><br/><br/><br/><br/><br/>
      

      <div className="container">
        <h2>Recherche de questions</h2>
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="input-group mb-3">
              <input type="text" className="form-control" placeholder="Rechercher..." value={searchQuery} onChange={(event) => setSearchQuery(event.target.value)} />
              <div className="input-group-append">
                <button className="btn btn-primary" type="button" onClick={handleSearch}>Rechercher</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RechercheQuestions;
