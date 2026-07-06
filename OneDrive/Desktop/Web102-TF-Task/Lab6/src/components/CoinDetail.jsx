import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import CoinChart from "./CoinChart"



const MY_KEY = import.meta.env.VITE_CRYPTOCOMPAR_API


function CoinDetail(){
    const { symbol } = useParams()
    const [fullDetails, setFullDetails] = useState(null)

    useEffect(() => {
    const getCoinDetail = async () => {
        const details = await fetch(
            `https://min-api.cryptocompare.com/data/pricemultifull?&tsyms=USD&fsyms=${symbol}&api_key=${MY_KEY}`
        )
        const description = await fetch(
            `https://min-api.cryptocompare.com/data/all/coinlist?fsym=${symbol}&api_key=${MY_KEY}`
        )

        const detailsJson = await details.json()
        const descripJson = await description.json()

        console.log(detailsJson);
        console.log(descripJson);

        setFullDetails({
            numbers: detailsJson.DISPLAY,
            textData: descripJson.Data
        })
    }

    getCoinDetail().catch(console.error)
}, [symbol])

return (
    <div>
        {/* <h1>{fullDetails?.textData[symbol].FullName}</h1> */}
            <img
            className="images"
            // src={`https://www.cryptocompare.com${
            //     fullDetails?.numbers[symbol].IMAGEURL
            // }`}
            alt={`Small icon for ${symbol} crypto coin`}
            />
        <div> 
            {fullDetails?.textData[symbol].Description}
        </div>
            <br></br>
        <div>
            This coin was built with the algorithm{" "}
            {fullDetails?.textData[symbol].Algorithm}{" "}
        </div>
        <table>
            <tbody>
                <tr>
                    <th>Launch Date </th>
                    <td>{fullDetails?.textData[symbol].AssetLaunchDate}</td>
                </tr>
                <tr>
                    <th>Website </th>
                    <td>{fullDetails?.textData[symbol].Url} </td>
                </tr>
                <tr>
                    <th>Whitepaper </th>
                    <td>{fullDetails?.textData[symbol].AssetWhitepaperUrl}</td>
                </tr>
                <tr>
                    <th>Monetary Symbol </th>
                    <td>{fullDetails?.numbers[symbol].SYMBOL}</td>
                </tr>
                <tr>
                    <th>Market </th>
                    <td> {fullDetails?.numbers[symbol].MARKET} </td>
                </tr>
                <tr>
                    <th>Last Transaction </th>
                    <td>{fullDetails?.numbers[symbol].LASTTRADEID}</td>
                </tr>
                <tr>
                    <th>Last Transaction Value</th>
                    <td> {fullDetails?.numbers[symbol].LASTVOLUME} </td>
                </tr>
                <tr>
                    <th>Volume </th>
                    <td>{fullDetails?.numbers[symbol].VOLUME24HOUR} </td>
                </tr>
                <tr>
                    <th>Today's Open Price </th>
                    <td>{fullDetails?.numbers[symbol].OPEN24HOUR}</td>
                </tr>
                <tr>
                    <th>Highest Price during the Day </th>
                    <td>{fullDetails?.numbers[symbol].HIGH24HOUR} </td>
                </tr>
                <tr>
                    <th>Lowest Price during the Day </th>
                    <td>{fullDetails?.numbers[symbol].LOW24HOUR} </td>
                </tr>
                <tr>
                    <th>Change from Previous Day </th>
                    <td>{fullDetails?.numbers[symbol].CHANGE24HOUR} </td>
                </tr>
                <tr>
                    <th>Market Cap </th>
                    <td>{fullDetails?.numbers[symbol].MKTCAP} </td>
                </tr>
            </tbody>
        </table>

        <CoinChart
            symbol={symbol}
            market={fullDetails?.numbers[symbol].MARKET}
        />
        {/* <div>
            {fullDetails?.textData[symbol].FullName}
            {fullDetails?.textData[symbol].Symbol}
            {fullDetails?.textData[symbol].Algorithm}
            {fullDetails?.textData[symbol].Description}
            {fullDetails?.textData[symbol].AssetLaunchDate}
            {fullDetails?.textData[symbol].Url}
            {fullDetails?.textData[symbol].AssetWhitepaperUrl}
        </div> */}
        {/* <div>
            {fullDetails?.numbers[symbol].USD.MARKET}
            {fullDetails?.numbers[symbol].USD.LASTTRADEID}
            {fullDetails?.numbers[symbol].USD.LASTVOLUME}
            {fullDetails?.numbers[symbol].USD.VOLUME24HOUR}
            {fullDetails?.numbers[symbol].USD.OPEN24HOUR}
            {fullDetails?.numbers[symbol].USD.HIGH24HOUR}
            {fullDetails?.numbers[symbol].USD.LOW24HOUR}
            {fullDetails?.numbers[symbol].USD.CHANGE24HOUR}
            {fullDetails?.numbers[symbol].USD.MKTCAP}
        </div> */}
        
    </div>


)
    
}


export default CoinDetail