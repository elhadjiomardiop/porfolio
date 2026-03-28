import React from 'react'
import { FaGithub, FaLinkedin, FaFacebook, FaPhone, FaEnvelope, FaGlobe } from "react-icons/fa";

const Contact = () => {
    return (
        <div className="contact">

            <h2>Contactez-moi</h2>

            <div className="contact_container">

                {/* FORMULAIRE */}
                <form className="contact_form">
                    <input type="text" placeholder="Votre nom" required />
                    <input type="email" placeholder="Votre email" required />
                    <textarea placeholder="Votre message..." required></textarea>

                    <button type="submit">Envoyer</button>
                </form>

                {/* INFOS */}
                <div className="contact_info">

                    <h3>Mes coordonnées</h3>

                    <p><FaPhone /> +221 77 190 77 88</p>
                    <p><FaEnvelope /> diopelhadjiomar@gmail.com</p>
                    <p><FaGlobe /> www.monsite.com</p>

                    <div className="socials">
                        <a href="https://github.com/elhadjiomardiop/porfolio" target="_blank"><FaGithub /></a>
                        <a href="#" target="_blank"><FaLinkedin /></a>
                        <a href="#" target="_blank"><FaFacebook /></a>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default Contact