import React from 'react'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'

const Navbar = () => {

    const [open, setOpen] = useState(false)

    const closeMenu = () => setOpen(false)

    return (
        <nav className='navbar'>
            <h2>TOBI</h2>

            {/* bouton hamburger */}
            <div className="menu-icon" onClick={() => setOpen(!open)}>
                {open ? "✖" : "☰"}
            </div>

            <div className={`nav-link ${open ? "active" : ""}`}>
                <ul>
                    <li>
                        <NavLink to="/" onClick={closeMenu}>Accueil</NavLink>
                    </li>
                    
                    <li>
                        <NavLink to="/experiences" onClick={closeMenu}>
                            Mes experiences
                        </NavLink>

                    </li>
                    <li>
                        <NavLink to="/projets" onClick={closeMenu}>
                            Mes projet
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar