import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import RepositoryPage from './components/RepositoryPage';


function App() {
  return (
    <div>
      <Routes>
        {/* Define routes and map them to components */}
        <Route path="/" element={<HomePage />} />
        <Route path="/repository" element={<RepositoryPage />} />
       
      </Routes>
    </div>
  );
}

export default App;
