import DomainCard from "./DomainCard";
import domain from "../data/domain";
import "../styles/domains.css";

export default function Domain() {
    return (
        <section className="domain-grid">
            {domain.map(d => (
                <DomainCard key={d.id} {...d} />
            ))}
        </section>
    )
}
