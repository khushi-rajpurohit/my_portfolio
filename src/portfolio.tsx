import React from 'react'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { useEffect } from 'react';

import Header from './components/header';
import App from './App';
import About from './components/about.tsx'
import Resume from './components/resume.tsx'
import Work from './components/work.tsx'



const Portfolio:React.FC = () => {
   
  return (
    
    <div>
      <Router>
        <Header />

       
        <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<About />} />
        <Route path="/resume" element={<Resume/>} />
        <Route path="/work" element={<Work/>} />
        </Routes>
      </Router>
    </div>
    
  )
}

export default Portfolio
