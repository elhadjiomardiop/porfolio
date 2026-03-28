import React from 'react'
import { FaGithub, FaLinkedin, FaFacebook, FaEnvelope } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="footer">

            <div className="footer_container">

                {/* LOGO / NOM */}
                <div className="footer_brand">
                    <h2>TOBI</h2>
                    <p>Développeur Web passionné par la création d'expériences modernes et performantes.</p>
                </div>

                {/* LIENS RAPIDES */}
                <div className="footer_links">
                    <h3>Navigation</h3>
                    <ul>
                        <li><a href="/">Accueil</a></li>
                        <li><a href="/experiences">Expériences</a></li>
                        <li><a href="/projets">Projets</a></li>
                        <li><a href="/contact">Contact</a></li>
                    </ul>
                </div>

                {/* CONTACT */}
                <div className="footer_contact">
                    <h3>Contact</h3>
                    <p><FaEnvelope /> diopelhadjiomar70@gmail.com</p>
                    <p>📞 +221 77 190 77 88</p>
                </div>

                {/* RÉSEAUX */}
                <div className="footer_socials">
                    <h3>Suivez-moi</h3>
                    <div className="icons">
                        <a href="#"><FaGithub /></a>
                        <a href="#"><FaLinkedin /></a>
                        <a href="#"><FaFacebook /></a>
                    </div>
                </div>

            </div>

            {/* BAS */}
            <div className="footer_bottom">
                <p>
                    © {new Date().getFullYear()} Elhadji Omar Diop — Tous droits réservés
                </p>
            </div>

        </footer>
    )
}

export default Footer