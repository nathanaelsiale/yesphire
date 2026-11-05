import { Phone, Mail, MapPin, Send } from 'lucide-react';
import '../styles/contact.css';

export default function Contact() {
    return (
        <section className="contact-section" id="contact">
            <div className="contact-header">
                <p>Contactez-nous</p>
                <h3>Écrivez-nous pour toute question ou partenariat</h3>
            </div>

            <div className="contact-container">
                <div className="contact-info">
                    <h4>Restons connectés</h4>
                    <p>
                        Notre équipe est à votre écoute pour échanger sur nos actions,
                        nos projets ou les opportunités de collaboration.
                    </p>

                    <div className="contact-item">
                        <Phone />
                        <div>
                            <span>Téléphone</span>
                            <b>+236 72 00 00 00</b>
                        </div>
                    </div>

                    <div className="contact-item">
                        <Mail />
                        <div>
                            <span>Email</span>
                            <b>contact@yesphire.org</b>
                        </div>
                    </div>

                    <div className="contact-item">
                        <MapPin />
                        <div>
                            <span>Localisation</span>
                            <b>Bangui, République centrafricaine</b>
                        </div>
                    </div>
                </div>

                <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                    <input type="text" placeholder="Votre nom complet" required />
                    <input type="email" placeholder="Votre adresse email" required />
                    <input type="text" placeholder="Objet du message" required />
                    <textarea placeholder="Votre message..." required></textarea>
                    <button type="submit" className="contact-btn">
                        <Send size={16} style={{ display: 'inline', marginRight: '8px' }} />
                        Envoyer le message
                    </button>
                </form>
            </div>
        </section>
    );
}
