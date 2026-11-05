import { HandHeart, Landmark, Briefcase, Users } from 'lucide-react';
import '../styles/partenaires.css';

export default function Partenaires() {
    return (
        <section className="partenaires-section" id="partenaires">
            <div className="partenaires-container">
                <img
                    src="/assets/solidarite.jpg"
                    alt="Partenariats"
                    className="partenaires-image"
                />

                <div className="partenaires-content">
                    <p>Partenariats et engagement</p>
                    <h3>Ensemble, donnons vie aux initiatives qui font la différence.</h3>
                    <p>
                        YESPHIRE souhaite collaborer avec des entreprises, institutions,
                        associations et personnes de bonne volonté pour renforcer l'impact
                        de ses actions.
                    </p>

                    <button
                        className="partenaires-btn"
                        onClick={() => {
                            const el = document.getElementById("contact");
                            if (el) el.scrollIntoView({ behavior: "smooth" });
                        }}
                    >
                        Construisons un partenariat &rarr;
                    </button>

                    <div className="partenaires-grid">
                        <div className="partenaires-card">
                            <Landmark />
                            <span>Soutien financier</span>
                        </div>
                        <div className="partenaires-card">
                            <HandHeart />
                            <span>Dons matériels</span>
                        </div>
                        <div className="partenaires-card">
                            <Briefcase />
                            <span>Accompagnement pro</span>
                        </div>
                        <div className="partenaires-card">
                            <Users />
                            <span>Engagement bénévole</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

