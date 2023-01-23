import React from 'react'
import StoreSlider from './StoreSlider'
import Partners from './Partners'
//import components:

export default function Accueil() {
    return (
        <div>
            <StoreSlider />
            <section className="partners">
                <div className="title-container"><h1>Nos Partenaires</h1></div>
                <div className="slider-container">
                    <div className="slider">
                        <Partners />
                    </div>
                </div>
            </section>
        </div>
    )
}
