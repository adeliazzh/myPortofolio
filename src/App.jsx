import React from 'react';
import Header from './components/Header';
import MyProject from './components/MyProject';
import ProjectShowcase from './components/ProjectShowcase';
import AboutContact from './components/AboutContact';
import Footer from './components/Footer'; // PASTIKAN FOOTER DIIMPORT
import './index.css';

function App() {
  return (
    <div className="App font-poppins">
      <Header />
      <MyProject />
      <ProjectShowcase />
      <AboutContact />
      <Footer />
    </div>
  );
}

export default App;