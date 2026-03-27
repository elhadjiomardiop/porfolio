import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    const [open, setOpen] = useState(false)

    const closeMenu = () => setOpen(false)

    return (
        <nav className='navbar'>
            <h2>TOBI</h2>

            {/* menu desktop */}
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

            {/* bouton hamburger (mobile uniquement) */}
            <div className={`menu-icon ${open ? "open" : ""}`} onClick={() => setOpen(!open)}>
                <span></span>
                <span></span>
                <span></span>
            </div>

            {/* menu mobile */}
            <div className={`mobile-menu ${open ? "active" : ""}`}>
                <ul>
                    <li><NavLink to="/" onClick={closeMenu}>Accueil</NavLink></li>
                    <li><NavLink to="/experiences" onClick={closeMenu}>Mes experiences</NavLink></li>
                    <li><NavLink to="/projets" onClick={closeMenu}>Mes projet</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar