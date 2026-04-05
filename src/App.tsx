import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/shared/Navbar';
import Footer from './components/shared/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Why from './pages/Why';
import Aday from './pages/Aday';
import './App.css';

const App: React.FC = () => {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/why" element={<Why />} />
          <Route path="/aday" element={<Aday />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
