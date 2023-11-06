import React from "react";
import { Route, Routes } from "react-router-dom";
import 'tailwindcss/tailwind.css';


// Importez les composants des pages
import Home from "../pages/home";
import Boutique from "../pages/boutique";
import Grappling from "../pages/grappling";
import Partenaires from "../pages/partenaires";
import Resultat from "../pages/resultat";
import Videos from "../pages/videos";
import Equipe from "../pages/equipe";
import Liens from "../pages/liens";
import Sinscrire from "../pages/sinscrire";
import VieDuClub from "../pages/vieduclub";
import Photos from "../pages/photos";

// Importez votre Navbar et Footer
import Navbar from "./navbar";
import Footer from "./Footer";

// Composant de mise en page pour le contenu principal
export const MainContent = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/boutique" element={<Boutique />} />
      <Route path="/grappling" element={<Grappling />} />
      <Route path="/partenaires" element={<Partenaires />} />
      <Route path="/resultat" element={<Resultat />} />
      <Route path="/videos" element={<Videos />} />
      <Route path="/equipe" element={<Equipe />} />
      <Route path="/liens" element={<Liens />} />
      <Route path="/sinscrire" element={<Sinscrire />} />
      <Route path="/vieduclub" element={<VieDuClub />} />
      <Route path="/photos" element={<Photos />} />
    </Routes>
  );
};

// Composant de mise en page pour la structure générale
export const Layout = ({ children }) => {
  return (
    <>
      <Navbar /> {/* Votre Navbar */}
      <main>
        {children}
      </main>
      <Footer /> {/* Votre Footer */}
    </>
  );
};
