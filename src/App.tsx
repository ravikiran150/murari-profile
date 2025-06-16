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

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="min-h-screen bg-white dark:bg-gray-900">
          <Header />
          <main className="pt-16">
            <Hero />
            <About />
            <Education />
            <Experience />
            <Skills />
            <Contact />
          </main>
          <Footer />
          <Chatbot />
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App; 