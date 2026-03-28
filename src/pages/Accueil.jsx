import About from '../Components/About';
import Experiences from '../Components/Experiences';
import Home from '../Components/Home';
import Projets from '../Components/Projets';

const Accueil = () => {
    return (
        <div>
            <Home />
            <About />
            <Experiences />
            <Projets />
        </div>
    )
}

export default Accueil