import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from './pages/HomePage/HomePage';
import Welcome from './pages/Welcome/Welcome';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome/>}/>
        <Route path="/Home" element={<HomePage/>}/>
      </Routes>
    </Router>
  );
}

export default App;
