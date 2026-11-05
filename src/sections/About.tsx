import { Eye } from 'lucide-react';
import { CircleCheck } from 'lucide-react';
import '../styles/about.css';

export default function About() {
    return (
        <section className="about-section" id="about">
            <h1>À propos de YESPHIRE</h1>
            <div>
                <img src="/logo.png" alt="image de Yesphire"></img>
            </div>

            <div>
                <p>Qui sommes-nous ?</p>
                <p>YESPHIRE est une initiative en cours de formation, née de la volonté
                    de contribuer à la transformation positive des personnes et des
                    communautés à travers des actions concrètes, responsables et 
                    porteuses d'espoir.
                </p>
            </div>

            <div>
                <div>
                    <Eye /> 
                    <p>Devenir une organisation reconnue pour
                        sa capacité à inspirer les personnes, 
                        à mobiliser les énergies et à contribuer
                        durablement au bien-être des communautés.
                    </p>
                </div>

                <div>
                    <CircleCheck />
                    <p>Concevoir, organiser et soutenir des initiatives
                        sociales, solidaires, éducatives, culturelles et 
                        spirituelles qui favorisent le bien-être des personnes
                        et renforcent la solidarité communautaire.
                    </p>
                </div>
            </div>

        </section>
    )
}
