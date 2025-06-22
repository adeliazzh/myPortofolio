import React from 'react';
import Header from './components/Header';
import MyProject from './components/MyProject';
import ProjectShowcase from './components/ProjectShowcase';
import AboutContact from './components/AboutContact';
import './index.css'; // Import your Tailwind CSS

function App() {
  return (
    <div className="App font-poppins">
      <Header />
      <MyProject />
      <ProjectShowcase />
      <AboutContact />
    </div>
  );
}

export default App;