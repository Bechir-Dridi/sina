import React from 'react'
import Product from './Product'
import "../index.css"
//import imgs:
import gms7hp from "../media/products/gms7hp.jpg"
import gms5 from "../media/products/gms5.png"
import gmsCap from "../media/products/gmsCap.png"
import gmsDinde from "../media/products/gmsDinde.png"

export default function NosProduits() {
    const description01 = "GMS 7 HP pour vaches laitières";
    const description02 = "GMS 5 Bovin Engraissement El Bosten";
    const description03 = "Caprin Viande";
    const description04 = "Dinde De Chair Croissance";
    return (
        <div>
            <div className="products-container">
                <Product productImg={gms7hp} description={description01} />
                <Product productImg={gms5} description={description02} />
                <Product productImg={gmsCap} description={description03} />
                <Product productImg={gmsDinde} description={description04} />
            </div>
        </div>
    )
}
