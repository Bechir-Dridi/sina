import React from 'react'
import Conseil from './Conseil.js'
import "../index.css"
//import imgs:
import azola1 from "../media/conseils/azola1.jpg"
import azola2 from "../media/conseils/azola2.jpg"
import azola3 from "../media/conseils/azola3.jpg"


export default function Conseils() {
    const title = "L’azola : complément alimentaire pour le bétail";
    const description = "L’Azolla fixe l’azote de l’air et le stocke dans ses feuilles. Il est plus riche en protéines, en vitamines et en minéraux que les grains et la plupart des fourrages verts. Grâce à ses propriétés et au fait qu’il pousse rapidement et facilement dans un petit espace, l’Azolla est un complément alimentaire idéal.";
    return (
        <div>
            <div className="conseils-container">
                <Conseil conseilImg1={azola1} conseilImg2={azola2} conseilImg3={azola3} description={description} title={title} />
            </div>
        </div>
    )
}
