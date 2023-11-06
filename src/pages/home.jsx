import React from 'react';
import nagaImage from '../images/naga2012.jpg';

const Home = () => {
    return (
        <section className="bg-white py-16 ">
            <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
                <div className="md:w-1/4 text-center md:text-left">
                    <h1 className="text-3xl font-bold text-indigo-700 mt-16">
                        BIENVENUE SUR LE SITE DE L'ALPHA FIGHT CLUB: GRAPPLING À SAINT-OUEN (93)
                    </h1>
                    <h4 className="text-lg text-gray-600 mb-2">
                        IMPORTANT : nous ne pratiquons plus le Pancrace ni le Bugei, mais seulement le GRAPPLING
                    </h4>
                    <h2 className="text-2xl text-indigo-800 mb-4">
                        Nos cours reprennent le mercredi 6/09/2023 à 20h au Gymnase JOLIOT CURIE, 8 rue Pierre Curie de Saint-Ouen.
                    </h2>
                    <p className="text-gray-800 text-lg mb-4">
                        Le GRAPPLING est un système de combat hybride corps à corps qui se pratique en short et rashguard. Il est une référence pour la préparation au corps-à-corps du combat libre.
                    </p>
                    <p className="text-gray-800 text-lg mb-4">
                        Nos enseignements sont complémentaires:
                    </p>
                    <ul className="list-disc list-inside text-gray-800 ml-8 mb-4">
                        <li>A distance de saisie, toutes les projections de la lutte et du judo,</li>
                        <li>Au sol, toutes les techniques de grappling/jjb, avec les soumissions.</li>
                    </ul>
                    <p className="text-gray-800 text-lg mb-4">
                        Adaptés à tous, notre sport de combat est mixte et peut être pratiqué à tout âge.
                    </p>
                    <p className="text-gray-800 text-lg mb-4">
                        Dans notre club, nous commençons à l'âge de 15 ans avec autorisation des parents.
                    </p>
                </div>
                <div className="md:w-1/2 mt-4 md:mt-0">
                    <div className="rounded-lg shadow-lg overflow-hidden">
                        <img src={nagaImage} alt="Naga 2012" className="w-full" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;
