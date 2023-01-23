import React from 'react'
import "../index.css"

export default function Conseil({ conseilImg1, conseilImg2, conseilImg3, title, description }) {
    return (
        <div className='conseil-container'>
            <h1>{title}</h1>
            <p>{description}</p>
            <div className="conseil-imgs">
                <img src={conseilImg1} alt="" className="conseil-image" />
                <img src={conseilImg2} alt="" className="conseil-image" />
                <img src={conseilImg3} alt="" className="conseil-image" />
            </div>
        </div>
    )
}
