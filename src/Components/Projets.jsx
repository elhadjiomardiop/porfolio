import Title from "./Title"


import { FaGithub } from "react-icons/fa";

import { projects } from '../data/Projet_bd'
import { NavLink } from "react-router-dom";


const Projets = () => {
    return (
        <div className="projets">
            <Title title="Mes Projets"/>
            <div className="projet_list">
                {projects.map((projet) => (
                    <NavLink to={`/projets/${projet.id}`} key={projet.id} className="projet_list_name">
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
                            {projet.technologies.map((tech, index) => (
                                <span key={index}>{tech}</span>
                            ))}
                        </div>
                        
                    </NavLink>
                ))
                }
            </div>
        </div>
    )
}

export default Projets