


export interface Domain {
    id: number,
    nom: string,
    image: string,
    propos: string,
}




const domain: Domain[] = [
    {
        id:1,
        nom: "Solidarité",
        image: "./assets/solidarite.jpg",
        propos: "Soutien aux personnes et familles vulnérables",

    },
    {
        id:2,
        nom: "Education",
        image: "./assets/education.jpg",
        propos: "Apprentissage et accompagnement des jeunes",
    },
     {
        id:3,
        nom: "Culture et art",
        image: "./assets/art.webp",
        propos: "Valorisation des talents et évènements culturels",
    },
     {
        id:4,
        nom: "Développement communautaire",
        image: "./assets/communautaire.jpg",
        propos: "Sensibilisation et mobilisation citoyenne",
    },
     {
        id:5,
        nom: "Spiritualité et engagement chrétienne",
        image:"./assets/chretienne.jpg",
        propos: "Prière, partage et engagement autour des valeurs chrétiennes",
    },
]

export default domain