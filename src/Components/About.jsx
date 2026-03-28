import Title from "./Title"
import img from "../assets/img.jpg"
import { CalendarSync, LetterText, Paintbrush } from "lucide-react";


const aboutSections = [
    {
        id: 1,
        title: "Développeur Frontend",
        description: "Je suis un développeur frontend avec une bonne expérience.",
        icon: <LetterText className="icon-sec" />,
    },
    {
        id: 2,
        title: "Développeur Backend",
        description: "Je maîtrise les bases du développement backend pour créer des APIs robustes.",
        icon: <CalendarSync className="icon-sec" />,
    },
    {
        id: 3,
        title: "Passionné par l'UI/UX",
        description: "Créer des interfaces utilisateur attrayantes et fonctionnelles est ma priorité.",
        icon: <Paintbrush className="icon-sec" />,
    },
];

const About = () => {
    return (
        <div className="about">
            <Title title="A propos" />
            <div className="about-div">
                <div>
                    <img src={img} alt="" className='img2' />

                </div>

                <div className="about-container ml-4 space-y-4">
                    {
                        aboutSections.map((section) => (
                            <div key={section.id}
                            className="section-about">
                                <div className="section-icon">
                                    {section.icon}
                                </div>
                                <div className="section-text">
                                    <h2 className="section-title">
                                        {section.title}
                                    </h2>
                                    <p className="section-description">
                                        {section.description}
                                    </p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default About