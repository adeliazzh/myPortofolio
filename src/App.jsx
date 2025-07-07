import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Router, Routes, and Route
import Header from './components/Header';
import MyProject from './components/MyProject';
import ProjectShowcase from './components/ProjectShowcase';
import AboutContact from './components/AboutContact';
import Footer from './components/Footer';
import FullProject from './components/FullProject'; // Import your FullProject component
import './index.css';

function App() {
  return (
    <Router> {/* Wrap your application with Router */}
      <div className="App font-poppins">
        <Header />
        <Routes> {/* Define your routes here */}
          <Route path="/" element={
            <>
              <MyProject />
              <ProjectShowcase />
            </>
          } />
          <Route path="/another-projects-page" element={<FullProject />} /> {/* Route for the full projects page */}
        </Routes>
        <AboutContact />
        <Footer />
      </div>
    </Router>
  );
}

export default App;