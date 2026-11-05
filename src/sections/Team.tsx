import fondateur from "../data/fondateur";
import '../styles/team.css';

export default function Team() {
    return (
        <section className="team-section" id="team">
            <p>Notre équipe</p>
            <h3>Une équipe engagée</h3>

            <div>
                {fondateur.map(f => (
                    <div key={f.id}>
                        <h4>{f.nom}</h4>
                        <p>{f.prenom}</p>
                        <p>{f.poste}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}
