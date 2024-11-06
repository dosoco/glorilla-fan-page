import React from 'react';
import NavigationBar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Footer from './components/Footer';
import Albums from './pages/Albums';
import AlbumDetails from './pages/AlbumDetails';



function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/albums" element={<Albums />} />
        <Route path="/albums/:id" element={<AlbumDetails />} />
       
      </Routes>
      <Footer />
    </div>
  );
}

export default App;