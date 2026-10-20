import { Link } from "react-router"




const CoinInfo = ({id, image, name, symbol, price}) => {

    return (
        <div>
            <li className="main-list" key={id}>
                <Link id="inner-link"
                    style={{ color: "White" }}
                    to={`/coinDetails/${id}`}
                    key={id}
                    >
                <span style={{padding: "100px"}}><img
                className="icons"
                src={image}
                alt={`Small icon for ${name} crypto coin`}
                />
                    {name} ({id.toUpperCase()})</span>
                    <span style={{padding: "160px"}}>{price ? ` $${price.toFixed(2)} USD` : null}</span>
                </Link>
                  
            </li>
            
            
        </div>
    )

}





export default CoinInfo