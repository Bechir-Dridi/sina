import React from 'react'
import "../index.css"
//import carousel css:
import "react-responsive-carousel/lib/styles/carousel.min.css"
//import carousel components:
import { Carousel } from 'react-responsive-carousel'
//import imgs:
import gms01 from "../media/partnersSliderPhotos/gms1.png"
import gms02 from "../media/partnersSliderPhotos/gms2.jpg"
import alfa1 from "../media/partnersSliderPhotos/alfa1.jpg"
import alfa2 from "../media/partnersSliderPhotos/alfa2.jpg"


export default function Partners() {
    return (
        <div>
            <Carousel infiniteLoop autoPlay>
                <img src={gms01} alt="gms01" className="sina-image" />
                <img src={gms02} alt="gms02" className="sina-image" />
                <img src={alfa1} alt="sina03" className="sina-image" />
                <img src={alfa2} alt="sina04" className="sina-image" />
            </Carousel>
        </div>
    )
}
