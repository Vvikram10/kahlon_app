// import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './components/partials/HomePage';

function App() {

  return (
    <>
     <Router>

      <Routes>
        <Route path='/' element={<HomePage />} />
      </Routes>

     </Router>
    </>
  )
}

export default App
