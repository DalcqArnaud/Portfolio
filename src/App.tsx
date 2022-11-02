import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from './pages/HomePage/HomePage';
import Welcome from './pages/Welcome/Welcome';


function App() {

  const hostname = (window.location.hostname === 'localhost' ? '/' : 'Portfolio/');

  return (
    <Router>
      <Routes>
        <Route path={`${hostname}`} element={<Welcome/>}/>
        <Route path={`${hostname}Home`} element={<HomePage/>}/>
      </Routes>
    </Router>
  );
}

export default App;
