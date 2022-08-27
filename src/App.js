import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Main from './pages/Main';
import "./App.css"

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Main />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;