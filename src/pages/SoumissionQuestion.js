import React, { useState } from 'react';
import NavBar from './NavBar';
import { getAllErrors } from '../Api/Question';

function SoumissionQuestion() {
  const [question, setQuestion] = useState('');

  const handleQuestionChange = (event) => {
    setQuestion(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Question soumise :', question);
    setQuestion('');
  };
  getAllErrors()


  return (
    <div>
      <NavBar/>

      <div className="container MT-5">
        <h2>Soumettre une question</h2>
        <div className="row justify-content-center">
          <div className="col-md-6">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="question">Question :</label>
                <textarea id="question" className="form-control" value={question} onChange={handleQuestionChange} required />
              </div>
              <button type="submit" className="btn btn-primary">Soumettre</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SoumissionQuestion;
