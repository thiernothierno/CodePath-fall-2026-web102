import React from "react";
import { useState } from "react";

const CoinInfo = ({id, image, name, symbol, price}) => {

    return (
        <div>
            <li className="main-list" key={id}>
                <img
                    className="icons" 
                    src={image}
                    alt={`Small icon for ${name} crypto coin`}
                />
                {/* <p className="name-symbol"><img
                    className="icons" 
                    src={image}
                    alt={`Small icon for ${name} crypto coin`}
                /></p> */}
                
                {name} ({symbol}) 
                <p className="price">{price ? ` $${price} USD` : null}</p>
               
            </li>
        </div>
    )

}





export default CoinInfo