import '../styles/hero.css';

export default function Hero() {
    return (
        <div style={{ backgroundImage: "url(/assets/OIP.png)" }} className="accueil">
            <p>ASSOCIATION ENGAGEE POUR LE CHANGEMENT</p>
            <b>Ensemble, faisons grandir l'espoir.</b>
            <p>YESPHIRE rassemble les énergies et les compétences pour construire des 
            initiatives solidaires, éducatives et communautaire porteuses de changement
            </p>

            <p>Plus qu'une assosiation, une vision pour demain</p>

            <button onClick={() => {
                const el = document.getElementById("domains");
                if (el) el.scrollIntoView({ behavior: "smooth" });
            }}>Découvrir nos actions</button>
            <button onClick={() => {
                const el = document.getElementById("partenaires");
                if (el) el.scrollIntoView({ behavior: "smooth" });
            }}>Devenir partenaire</button>

        </div>
    )
}
