import initiative from "../data/initiative";
import '../styles/initiatives.css';

export default function Initiatives() {
    return (
        <section className="initiatives-section" id="initiatives">
            <p>Nos initiatives et projets</p>
            <h3>Des projets que nous menons</h3>
            <div>
                {initiative.map(i => (
                    <div key={i.id}>
                        <h4>{i.title}</h4>
                        <p>{i.description}</p>
                        <img src={i.image.replace('..', '')} alt={i.title} />
                    </div>
                ))}
            </div>
        </section>
    )
}
