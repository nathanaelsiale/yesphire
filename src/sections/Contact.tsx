import { useState } from 'react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import '../styles/contact.css';

export default function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const phoneNumber = "23674615221"; // Numéro WhatsApp YESPHIRE

        const text = 
`*Nouveau message depuis le site YESPHIRE* 🌿

👤 *Nom :* ${name}
📧 *Email :* ${email}
📌 *Objet :* ${subject}

💬 *Message :*
${message}`;

        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;
        
        window.open(whatsappUrl, '_blank');

        // Réinitialisation des champs après l'envoi
        setName('');
        setEmail('');
        setSubject('');
        setMessage('');
    };

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
                            <span>Téléphone / WhatsApp</span>
                            <b><a href="https://wa.me/23674615221" target="_blank" rel="noreferrer">+236 74 61 52 21</a></b>
                        </div>
                    </div>

                    <div className="contact-item">
                        <Mail />
                        <div>
                            <span>Email</span>
                            <b><a href="mailto:yesphire@gmail.com">yesphire@gmail.com</a></b>
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

                <form className="contact-form" onSubmit={handleSubmit}>
                    <input 
                        type="text" 
                        placeholder="Votre nom complet" 
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required 
                    />
                    <input 
                        type="email" 
                        placeholder="Votre adresse email" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required 
                    />
                    <input 
                        type="text" 
                        placeholder="Objet du message" 
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        required 
                    />
                    <textarea 
                        placeholder="Votre message..." 
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                    ></textarea>
                    <button type="submit" className="contact-btn">
                        <Send size={16} style={{ display: 'inline', marginRight: '8px' }} />
                        Envoyer via WhatsApp
                    </button>
                </form>
            </div>
        </section>
    );
}
