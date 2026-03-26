import Title from "./Title"

import imgCSS from "../assets/techno/css.png";
import imgJS from "../assets/techno/js.png";
import imgREACT from "../assets/techno/react.png";
import imgHTML from "../assets/techno/html.png";
import imgNEXT from "../assets/techno/next-js.webp";
import imgNODE from "../assets/techno/node-js.png";
import imgTYPE from "../assets/techno/typescript.svg";
import imgTAILWIND from "../assets/techno/tailwind.png";
import imgPRISMA from "../assets/techno/prisma.webp";

// import google from "../assets/companies/google.png";
// import meta from "../assets/companies/meta.webp";
// import amazon from "../assets/companies/amazon.png";



const skills = [
    { id: 1, name: "HTML", image: imgHTML },
    { id: 2, name: "CSS", image: imgCSS },
    { id: 3, name: "JavaScript", image: imgJS },
    { id: 4, name: "React", image: imgREACT },
    { id: 5, name: "Node.js", image: imgNODE },
    { id: 6, name: "Tailwind CSS", image: imgTAILWIND },
    { id: 7, name: "TypeScript", image: imgTYPE },
    { id: 8, name: "Next.js", image: imgNEXT },
    { id: 9, name: "Prisma", image: imgPRISMA },
];

const Experiences = () => {
    return (
        <div>
            <Title title="Expériences"/>
            <div>
                <div className="experience">
                    {skills.map((skill) => (
                        <div key={skill.id} className="skills">
                            <div className="skill">
                                <img src={skill.image} alt={skill.name}
                                className="skill-image" />
                            </div>
                            <span className="skill-name">
                                {skill.name}
                            </span>
                        </div>
                    ))

                    }
                </div>
                <div></div>
            </div>
        </div>
    )
}

export default Experiences