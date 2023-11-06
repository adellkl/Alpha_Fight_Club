import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { MainContent } from "./components/MainContent";
import 'tailwindcss/tailwind.css';

import Footer from "./components/Footer";
import Navbar from "./components/navbar";

const App = () => {
  // État pour gérer le mode sombre/clair
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Fonction pour basculer le mode sombre/clair
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Classes CSS pour le mode sombre/clair
  const appClass = isDarkMode ? "dark" : "light"; // Assurez-vous d'avoir ces classes définies dans votre CSS

  return (
    <Router>
      <div className={`app ${appClass}`}>
        <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
        <MainContent />
        <Footer />
      </div>
    </Router>
  );
};

export default App;
