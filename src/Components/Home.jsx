import { Mail } from 'lucide-react'
import img from '../assets/img.jpg'

const Home = () => {
    return (
        <div className='home' id='Home'>
            <div>
                <h1>
                    Bonjour, je suis <br /> <span className='name'>Elhadji Omar Diop</span>
                </h1>
                <p className='my-4'>
                    Je suis un développeur web full-stack, <br />
                    spécialisé dans la création de sites web modernes <br />
                    et fonctionnels. <br />
                    Avec une expérience de 5 ans dans le domaine.
                </p>

                <a href="#" className='btn'>
                    <Mail className='mail' />Contacter-moi
                </a>
            </div>

            <div className='img-container'>
                <img src={img} alt="" className='img' style={{ borderRadius: '29% 71% 70% 30% / 49% 45% 55% 51%  ' }} />
                
            </div>
        </div>
    )
}

export default Home