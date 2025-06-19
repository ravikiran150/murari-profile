import React from 'react';
import { LanguageProvider } from './contexts/LanguageContext';
import { ThemeProvider } from './contexts/ThemeContext';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Videos from './components/Videos';
import Images from './components/Images';

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="min-h-screen bg-white dark:bg-gray-900">
          <BrowserRouter>
            <Header />
            <main className="pt-16">
              <Routes>
                <Route path="/" element={
                  <>
                    <Hero />
                    <About />
                    <Education />
                    <Experience />
                    <Skills />
                    <Contact />
                  </>
                } />
                <Route path="/videos" element={<Videos />} />
                <Route path="/images" element={<Images />} />
              </Routes>
            </main>
            <Footer />
            <Chatbot />
          </BrowserRouter>
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App; 