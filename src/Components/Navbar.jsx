import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className='navbar'>
            <h2>TOBI</h2>
            <div className='nav-link'>
                <ul>
                    <li>
                        <NavLink to="/">Accueil</NavLink>
                    </li>
                    
                    <li>
                        <NavLink to="/experiences">Mes experiences</NavLink>
                    </li>
                    <li>
                        <NavLink to="/projets">Mes projet</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar