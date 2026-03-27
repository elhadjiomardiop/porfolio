import Title from "./Title"

import img1 from '../assets/projects/1.png';
import img2 from '../assets/projects/2.png';
import img3 from '../assets/projects/3.png';
import img4 from '../assets/projects/4.png';
import img5 from '../assets/projects/5.png';
import img6 from '../assets/projects/6.png';
import { FaGithub } from "react-icons/fa";

const projects = [
    {
        id: 1,
        title: 'Gestionnaire de tâches',
        description: "Application web permettant de créer, organiser et suivre ses tâches quotidiennes. L’utilisateur peut ajouter des deadlines, marquer les tâches comme terminées et filtrer selon leur statut pour une meilleure productivité.",
        technologies: ['React', 'Node.js', 'Tailwind CSS'],
        demoLink: '#',
        repoLink: '#',
        image: img1,
    },
    {
        id: 2,
        title: 'Plateforme E-commerce',
        description: "Plateforme de vente en ligne complète avec gestion des produits, panier, commandes et paiement. Elle inclut un espace administrateur pour gérer les stocks et analyser les ventes.",
        technologies: ['Next.js', 'TypeScript', 'Prisma'],
        demoLink: '#',
        repoLink: '#',
        image: img2,
    },
    {
        id: 3,
        title: 'Portfolio interactif',
        description: "Site web moderne présentant mes compétences, projets et expériences. Il propose une navigation fluide, des animations interactives et un design responsive adapté à tous les écrans.",
        technologies: ['HTML', 'CSS', 'JavaScript'],
        demoLink: '#',
        repoLink: '#',
        image: img3,
    },
    {
        id: 4,
        title: 'Application de Chat en temps réel',
        description: "Application de messagerie instantanée permettant aux utilisateurs de communiquer en temps réel. Elle inclut la gestion des utilisateurs, des conversations privées et des notifications en direct.",
        technologies: ['React', 'Socket.io', 'Express.js'],
        demoLink: '#',
        repoLink: '#',
        image: img4,
    },
    {
        id: 5,
        title: 'Système de réservation de salles',
        description: "Solution de gestion de réservation permettant de consulter les disponibilités des salles, réserver en ligne et éviter les conflits d’horaires grâce à un système automatisé.",
        technologies: ['Next.js', 'MongoDB', 'Chakra UI'],
        demoLink: '#',
        repoLink: '#',
        image: img5,
    },
    {
        id: 6,
        title: 'Analyseur de sentiment',
        description: "Application utilisant l’intelligence artificielle pour analyser les avis et déterminer le sentiment (positif, négatif ou neutre). Utile pour les entreprises souhaitant comprendre les retours clients.",
        technologies: ['Python', 'Flask', 'NLTK'],
        demoLink: '#',
        repoLink: '#',
        image: img6,
    },
];


const Projets = () => {
    return (
        <div className="projets">
            <Title title="Mes Projets"/>
            <div className="projet_list">
                {projects.map((projet) => (
                    <div className="projet_list_name">
                        <img 
                            src={projet.image} 
                            alt={projet.title}
                        />
                        <div>
                            <h3>
                                {projet.title}
                            </h3>
                            <p>
                                {projet.description}
                            </p>
                        </div>

                        <div className="tech">
                            {projet.technologies.map((tech) => (
                                <span>{tech}</span>
                            ))}
                        </div>
                        <div className="demo">
                            <a href={projet.demoLink} className="a1">
                                Demo
                            </a>
                            <a href={projet.repoLink} className="a2">
                                <FaGithub />
                                
                            </a>
                        </div>
                    </div>
                ))
                }
            </div>
        </div>
    )
}

export default Projets