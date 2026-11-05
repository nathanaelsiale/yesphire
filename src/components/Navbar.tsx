import { Link } from "react-router-dom";
import { useState } from "react";
import { X, Menu } from 'lucide-react';
import '../styles/navbar.css';

export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <nav className="navbar-contanair">

            <a href="/"><img src="/logo.png" alt="Logo" /></a>

            {/*menu web*/}
            <div className="menu-web">
                <Link to="/">Accueil</Link>
                <a href="#about">À propos</a>
                <a href="#domains">Nos actions</a>
                <a href="#team">Notre équipe</a>
                <a href="#partenaires">Partenaires</a>
                <a href="#contact">Contact</a>
            </div>

            <button 
                className="btn-menu"
                onClick={() => setOpen(!open)}
                aria-label="Ouvrir le menu ou le fermer"
            >
                {open ? <X /> : <Menu />}
            </button>
        
            {/*Menu mobile */}
            <div className={`menu-mobile ${open ? 'open' : ''}`}>
                <Link to="/" onClick={() => setOpen(false)}>Accueil</Link>
                <a href="#about" onClick={() => setOpen(false)}>À propos</a>
                <a href="#domains" onClick={() => setOpen(false)}>Nos actions</a>
                <a href="#team" onClick={() => setOpen(false)}>Notre équipe</a>
                <a href="#partenaires" onClick={() => setOpen(false)}>Partenaires</a>
                <a href="#contact" onClick={() => setOpen(false)}>Contact</a>
            </div>
        </nav>
    );
}
