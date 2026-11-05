import '../styles/footer.css';

export default function Fouter() {
    return (
        <footer className="footer-section">
            <div className="footer-top">
                <div className="footer-brand">
                    <img src="/logo.png" alt="YESPHIRE Logo" />
                    <p>Ensemble, faisons grandir l'espoir.</p>
                    <p>Une initiative solidaire, éducative et communautaire porteuse de changement.</p>
                </div>

                <div className="footer-col">
                    <h5>Contact</h5>
                    <p><a href="tel:+23672000000">+236 72 00 00 00</a></p>
                    <p><a href="mailto:contact@yesphire.org">contact@yesphire.org</a></p>
                    <p>Bangui, République centrafricaine</p>
                </div>

                <div className="footer-col">
                    <h5>Suivez-nous</h5>
                    <div className="footer-social-links">
                        <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook">
                            <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                            </svg>
                        </a>
                        <a href="https://x.com" target="_blank" rel="noreferrer" aria-label="X">
                            <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                            </svg>
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">
                            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
                                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                            </svg>
                        </a>
                        <a href="https://whatsapp.com" target="_blank" rel="noreferrer" aria-label="WhatsApp">
                            <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/>
                            </svg>
                        </a>
                    </div>
                </div>

                <div className="footer-col">
                    <h5>Nous écrire</h5>
                    <p>Vous avez une question ou une proposition ? Écrivez-nous, nous vous répondrons rapidement.</p>
                    <a href="#contact" className="footer-cta-btn">Accéder au formulaire &rarr;</a>
                </div>
            </div>

            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} YESPHIRE. Tous droits réservés.</p>
                <div>
                    <a href="#mentions">Mentions légales</a>
                    <a href="#privacy">Politique de confidentialité</a>
                </div>
            </div>
        </footer>
    );
}
