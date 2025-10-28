// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Explore from "./pages/Explore";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white flex flex-col">
     
        <Header />

      
        <main className="grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
                <Route path="/explore" element={<Explore/>} />
          </Routes>
        </main>

      
        <Footer />
      </div>
    </Router>
  );
}

export default App;
