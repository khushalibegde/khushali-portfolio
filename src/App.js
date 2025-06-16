import React from 'react';
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Education from './components/Education';
import Footer from './components/Footer';
import Header from './components/Header';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Socials from './components/Socials';
import Volunteer from './components/Volunteer';
import Achievement from './components/Achievement';

function App() {
  return (
    <div className="App">
      <Header />
      <div id="about" className="section"><About /></div>
      <div id="achievement" className="section"><Achievement /></div>
      <div id="skills" className="section"><Skills /></div>
      <div id="projects" className="section"><Projects /></div>
      <div id="volunteer" className="section"><Volunteer /></div>
      <div id="education" className="section"><Education /></div>
      <div id="socials" className="section"><Socials /></div>
      <div id="contact" className="section"><Contact /></div>
      <Footer />
    </div>
  );
}

export default App;
