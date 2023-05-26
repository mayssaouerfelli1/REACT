import { BrowserRouter,Route,Routes} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css'
import React, { Component } from 'react'

// import "./App.css";
import Authentification from './pages/Authentification';
import CreationCompte from './pages/CreationCompte';
import RechercheQuestions from './pages/RechercheQuestions';
import SoumissionReponse from './pages/SoumissionReponse';
import SoumissionQuestion from './pages/SoumissionQuestion';
import WelcomeInterface from './pages/Welcome';
import ErrorComponent from "./pages/ErrorComponent";


class App extends Component {
  render() {
    return (
      <BrowserRouter >
      <div className='App'>
        <Routes>
            
          <Route path='/' element={<Authentification />}/>
          <Route path='/account' element={<CreationCompte />}/>
          <Route path='/ErrorComponent' element={<ErrorComponent />}/>
          <Route path='/question' element={<RechercheQuestions/>}/>
          <Route path='/answer' element={<SoumissionReponse/>}/>
          <Route path='/souQuest' element={<SoumissionQuestion/>}/>
          <Route path='/welcome/:id' element={<WelcomeInterface/>}/>



        </Routes>
      </div>
    
    </BrowserRouter>
    )
  }
}

export default App