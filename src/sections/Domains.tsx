import Domain from '../components/Domain';
import '../styles/domains.css';

export default function Domains() {
    return (
        <section className="domains-section" id="domains">
            <p>Nos domaines d'intervention</p>
            <b>Agir dans plusieurs domaines</b>
            <p>Nos actions s'articulent autour de cinq domaines
                complémentaires pour répondre aux besoins des communautés.
            </p>
            <Domain></Domain>
        </section>
    )
}
