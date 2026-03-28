import React from 'react'
import { useParams } from 'react-router-dom'
import { projects } from '../data/Projet_bd'
import Title from '../Components/Title'

const Detail = () => {
    const { id } = useParams()

    const mon_projet = projects.find((projects) => projects.id == id)

    if (!mon_projet) {
        return <p>Projet introuvable</p>
    }


    return (
        <div>
            <Title title="Details projet" />

            <div className='box_detail'>
                {/* Image */}
                <div className='image_container'>
                    <img src={mon_projet.image} alt={mon_projet.title} />
                </div>

                {/* Infos */}
                <div className='info_container'>
                    <h2>{mon_projet.title}</h2>

                    <p className='desc'>
                        {mon_projet.description || "Projet moderne développé avec les meilleures pratiques."}
                    </p>

                    <div className="links">
                        <a href={mon_projet.demoLink} target="_blank">Demo</a>
                        <a href={mon_projet.repoLink} target="_blank">Git</a>
                    </div>

                    <div className="techno">
                        <strong>Technologies :</strong>
                        <p>
                            {mon_projet.technologies.map((tech, index) => (
                                <span key={index}>{tech}</span>
                            ))}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Detail