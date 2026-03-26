import React from 'react'

const Navbar = () => {
    return (
        <nav className='navbar'>
            <h2>TOBI</h2>
            <div className='nav-link'>
                <ul>
                    <li>
                        <a href="#Home">Accueil</a>
                    </li>
                    <li>
                        <a href="#About">A propos</a>
                    </li>
                    <li>
                        <a href="#Experiences">Mes experiences</a>
                    </li>
                    <li>
                        <a href="#Projects">Mes projet</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar