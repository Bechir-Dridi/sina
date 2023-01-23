import React from 'react'
import { HashRouter as Brouter, Routes, Route } from "react-router-dom";
import './index.css';
//import components:
import Accueil from './Accueil/Accueil.js';
import NosProduits from './NosProduits/NosProduits.js';
import Conseils from './Conseils/Conseils';
//import pages:
import Header from './Header';

function App() {
  return (
    <div className='app'>
      <Brouter>
        <Header />
        <Routes>
          <Route path='/' exact element={<Accueil />} />
          <Route path='/NosProduits' element={<NosProduits />} />
          <Route path='/Conseils' element={<Conseils />} />
        </Routes>
      </Brouter>
    </div>
  );
}

export default App;
