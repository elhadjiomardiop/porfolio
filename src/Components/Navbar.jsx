import React from 'react'

const Navbar = () => {
    return (
        <nav className='navbar'>
            <h2>TOBI</h2>
            <div className='nav-link'>
                <ul>
                    <li>
                        <a href="">Accueil</a>
                    </li>
                    <li>
                        <a href="">A propos</a>
                    </li>
                    <li>
                        <a href="">Mes experiences</a>
                    </li>
                    <li>
                        <a href="">Mes projet</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar