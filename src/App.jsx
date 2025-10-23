// src/App.jsx
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import VideoCards from './components/VideoCards';
import AboutSection from './components/AboutSection';
import ConferenceSection from "./components/ConferenceSection";
import EducationSection from './components/EducationSection';
import EducationCTASection from './components/EducationCTASection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <VideoCards />
        <AboutSection />
         <ConferenceSection />
         <EducationSection/>
         <EducationCTASection/>
         <Footer/>
      </main>
    </div>
  );
}

export default App;