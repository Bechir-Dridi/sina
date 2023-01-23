import React from 'react'
import "../index.css"

export default function Product({ productImg, description }) {
    return (
        <div className='product-container'>
            <img src={productImg} alt="" className="product-image" />
            <p>{description}</p>
        </div>
    )
}
