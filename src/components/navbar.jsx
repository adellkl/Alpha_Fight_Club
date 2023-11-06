import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../images/68539082_2308753956042833_582183074670837760_n.jpg';

const Nav = () => {
    let Links = [
        { name: "Accueil", link: "/" },
        { name: "Services", link: "/boutique" },
        { name: "Grappling", link: "/grappling" },
        { name: "Partenaires", link: "/partenaires" },
        { name: "Contact", link: "/resultat" },
        { name: "Vidéos", link: "/videos" },
        { name: "Equipe", link: "/equipe" },
        { name: "Liens", link: "/liens" },
        { name: "S'inscrire", link: "https://alpha-fight-club.assoconnect.com/collect/description/253579-x-inscriptions-a-l-afc-2022-2023", external: true },
        { name: "Vie du club", link: "/vieduclub" },
        { name: "Photos", link: "/photos" },
    ];

    return (
        <header className="bg-white">
            <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    <div className="flex-1 md:flex md:items-center md:gap-12">
                        <a className="block" href="/">
                            <img
                                className="h-16"
                                src={Logo}
                                alt="Alpha Fight Club Logo"
                            />
                        </a>
                    </div>

                    <div className="md:flex md:items-center md:gap-12">
                        <nav aria-label="Global" className="hidden md:block">
                            <ul className="flex items-center gap-6 text-sm">
                                {Links.map((link) => (
                                    <li key={link.name}>
                                        {link.external ? (
                                            <a
                                                className="text-gray-500 transition hover:text-gray-500/75"
                                                href={link.link}
                                                target="_blank"
                                                rel="noreferrer"
                                            >
                                                {link.name}
                                            </a>
                                        ) : (
                                            <Link
                                                to={link.link}
                                                className="text-gray-500 transition hover:text-gray-500/75"
                                            >
                                                {link.name}
                                            </Link>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Nav;
