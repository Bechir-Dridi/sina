import React from 'react'
import './index.css';
import Nav from './Nav';
//import media:
import sinaLogo from "./media/sinaLogo.png"
//import icons:
import { IconContext } from "react-icons"
import { CiLocationOn } from "react-icons/ci"
import { TbPhoneCall } from "react-icons/tb"


export default function Header() {
    return (
        <div className='Header' >
            <section className='head'>
                <div className='logo'>
                    <img src={sinaLogo} alt='sinaLogo' />
                    <h1>SINA</h1>
                </div>
                <div className='contact'>
                    <IconContext.Provider value={{ size: "2rem", title: "icon" }}>
                        <p><span><CiLocationOn /></span><span> El Azib Bizerte</span></p>
                        <p><span><TbPhoneCall /></span><span>28 666 530</span></p>
                    </IconContext.Provider>
                </div>
            </section>
            <div className='slogan-container'>
                <span>SINA pour une production animale continue</span>
            </div>
            <Nav />
        </div>
    )
}
