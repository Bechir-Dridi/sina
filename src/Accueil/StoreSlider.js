import React from 'react'
import "../index.css"
//import carousel css:
import "react-responsive-carousel/lib/styles/carousel.min.css"
//import carousel components:
import { Carousel } from 'react-responsive-carousel'
//import imgs:
import sina01 from "../media/storeSliderPhotos/sina01.jpg"
import sina02 from "../media/storeSliderPhotos/sina02.jpg"
import sina03 from "../media/storeSliderPhotos/sina03.jpg"
import sina04 from "../media/storeSliderPhotos/sina04.jpg"
import sina05 from "../media/storeSliderPhotos/sina05.jpg"


export default function StoreSlider() {
    return (
        <div>
            <Carousel infiniteLoop autoPlay>
                <img src={sina01} alt="sina01" className="sina-image" />
                <img src={sina02} alt="sina02" className="sina-image" />
                <img src={sina03} alt="sina03" className="sina-image" />
                <img src={sina04} alt="sina04" className="sina-image" />
                <img src={sina05} alt="sina05" className="sina-image" />
            </Carousel>
        </div>
    )
}
