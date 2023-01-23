import { React, useState } from 'react'
import "./index.css"
import { Link } from 'react-router-dom'
//import icon:
import { IconContext } from "react-icons"
import { FiMenu } from "react-icons/fi"

export default function Nav() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className='nav-container'>
            <IconContext.Provider value={{ size: "2rem", title: "icon" }}>
                <button onClick={() => setMenuOpen(!menuOpen)} className="btn">                                        <IconContext.Provider />
                    {menuOpen ? ("X") : (<FiMenu />)}
                </button>
            </IconContext.Provider>

            <nav className={menuOpen ? "open" : "close"} >
                <div className="link">
                    <Link to='/'>Accueil</Link>
                </div>
                <div className="link">
                    <Link to='/NosProduits'>Nos Produits</Link>
                </div>
                <div className="link">
                    <Link to='/Conseils'>Conseils</Link>
                </div>
            </nav >
        </div >
    )
}
