import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom"

const CoinInfo = ({id, image, name, symbol, price}) => {

    return (
        <div>
            <li className="main-list" key={id}>
                <Link id="inner-link"
                    style={{ color: "White" }}
                    to={`/coinDetails/${symbol}`}
                    key={symbol}
                    >
                <span style={{padding: "100px"}}><img
                className="icons"
                // src={`https://www.cryptocompare.com${image}`}  Does not work when used. 
                src={image}
                alt={`Small icon for ${name} crypto coin`}
                />
                    {name} ({symbol.toUpperCase()})</span>
                    <span style={{padding: "160px"}}>{price ? ` $${price.toFixed(2)} USD` : null}</span>
                </Link>
                  
            </li>
            
            
        </div>
    )

}





export default CoinInfo