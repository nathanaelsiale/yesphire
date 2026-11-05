import "../styles/domains.css";

interface DomainCardProps {
    nom: string;
    image: string;
    propos: string;
}

export default function DomainCard({
    nom,
    image,
    propos,
}: DomainCardProps) {
    return (
        <div className="domain-card">
            <div>{nom}</div>
            <img src={image} alt={nom} />
            <p>{propos}</p>
        </div>
    )
}
