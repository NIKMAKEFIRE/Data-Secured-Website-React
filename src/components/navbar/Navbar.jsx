import React from 'react'
import { SiDatabricks } from 'react-icons/si'
import {FaBars} from 'react-icons/fa'
import './NavbarStyles.css'

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="container">
                <div className="logo">
                    <SiDatabricks className="icon" />
                    <h1>Secured</h1>
                </div>

                <ul className="nav-menu">
                    <li>Home</li>
                    <li>Recovery</li>
                    <li>Cloud</li>
                    <li>Contact</li>
                    <button>Sign in</button>
                </ul>
                <div className="hamburger">
                    <FaBars />
                </div>
            </div>
        </div>
    )
}

export default Navbar