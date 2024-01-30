import React from 'react';
import {Routes, Route } from 'react-router-dom';


import Header from './Header';
import AboutMe from './AboutMe';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';
import Home from './Home';

function App() {
  return (
    <div>

      <Header />
      <Routes>
          <Route path="/experience" element={<AboutMe />}>
          </Route>
          <Route path="/skills" element={<Skills />}>
          </Route>
          <Route path="/projects" element={<Projects />}>
          </Route>
          <Route path="/contact" element={<Contact />}>
          </Route>
          <Route path="/" element={<Home />}>
            
          </Route>
    </Routes>
    </div>
  );
}

export default App;
