import { useEffect, useState } from "react"
import { useParams } from "react-router"


const MY_KEY = import.meta.env.VITE_APP_API_KEY

const CoinDetail = () => {
    const { id } = useParams()
    const [coin, setCoin] = useState(null)
    const md = coin?.market_data

const [error, setError] = useState(null)

useEffect(() => {
  const getCoinDetail = async () => {
    const response = await fetch(
      `https://api.coingecko.com/api/v3/coins/${id}`,
      { headers: { "x-cg-demo-api-key": MY_KEY } }
    )
    const json = await response.json()
    console.log(response.status, json)

    if (!response.ok) {
      setError(json?.status?.error_message ?? json?.error ?? `Error ${response.status}`)
      return
    }
    setCoin(json)
  }

  getCoinDetail().catch((err) => setError(err.message))
}, [id])

if (error) return <p>Couldn't load coin: {error}</p>
if (!coin) return <p>Loading...</p>

    return (
        <div className="coin-detail">
             <h1>{coin?.name}</h1>
                    <img className="coin-icon" src={coin?.image?.large} alt={`Icon for ${coin?.name}`} />
                    <p className="coin-description">{coin?.description?.en}</p>
                    <p className="coin-algorithm">
                    This coin was built with the algorithm <strong>{coin?.hashing_algorithm ?? "not listed"}</strong>
                    </p>
            
            <table className="coin-table">
                    <tbody>
                        <tr>
                        <th>Launch Date</th>
                        <td>{coin?.genesis_date ?? "N/A"}</td>
                        </tr>
                        <tr>
                        <th>Website</th>
                        <td>{coin?.links?.homepage?.[0] ?? "N/A"}</td>
                        </tr>
                        <tr>
                        <th>Whitepaper</th>
                        <td>{coin?.links?.whitepaper || "N/A"}</td>
                        </tr>
                        <tr>
                        <th>Symbol</th>
                        <td>{coin?.symbol?.toUpperCase()}</td>
                        </tr>
                        <tr>
                        <th>Market</th>
                        <td>{coin?.tickers?.[0]?.market?.name ?? "N/A"}</td>
                        </tr>
                        <tr>
                        <th>Current Price</th>
                        <td>${md?.current_price?.usd?.toLocaleString()}</td>
                        </tr>
                        <tr>
                        <th>Volume (24h)</th>
                        <td>${md?.total_volume?.usd?.toLocaleString()}</td>
                        </tr>
                        <tr>
                        <th>Highest Price during the Day</th>
                        <td>${md?.high_24h?.usd?.toLocaleString()}</td>
                        </tr>
                        <tr>
                        <th>Lowest Price during the Day</th>
                        <td>${md?.low_24h?.usd?.toLocaleString()}</td>
                        </tr>
                        <tr>
                        <th>Change from Previous Day</th>
                        <td>{md?.price_change_percentage_24h?.toFixed(2)}%</td>
                        </tr>
                        <tr>
                        <th>Market Cap</th>
                        <td>${md?.market_cap?.usd?.toLocaleString()}</td>
                        </tr>
                        <tr>
                        <th>Last Updated</th>
                        <td>{md?.last_updated && new Date(md.last_updated).toLocaleString()}</td>
                        </tr>
                    </tbody>
                </table>
        </div>
    )
}


export default CoinDetail