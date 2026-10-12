import { useState, useEffect } from 'react'
import heroImg from './assets/hero.png'
import CoinInfo from './components/CoinInfo'
import SideNav from './components/SideNav'
import './App.css'

const API_KEY = import.meta.env.VITE_APP_API_KEY
const URL =  "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=30&page=1";

function App() {
  const [count, setCount] = useState(null);
  const [list, setList] = useState([])
  const [filteredResults, setFilteredResults] = useState([])
  const [searchInput, setSearchInput] = useState("")

  useEffect(() => {
    const fetchAllCoinData = async () => {
        const response = await fetch(URL)

        const data = await response.json()
        setList(data)
    }

    fetchAllCoinData().catch(console.error)
    }, []);

    //  function that takes the input string and filters through your API results:
    const searchItems = searchValue => {
      setSearchInput(searchValue)
      if (searchValue !== "") {
        const filteredData = list.filter(coin =>
          coin.name.toLowerCase().includes(searchValue.toLowerCase()) ||
          coin.symbol.toLowerCase().includes(searchValue.toLowerCase())
        )
        setFilteredResults(filteredData)
      } else {
        setFilteredResults(list)
      }
    }

  return (
    <div className="whole-page">
      <SideNav/>
      <h1>My Crypto List</h1>
      <input
        type="text"
        placeholder="Search..."
        onChange={(inputString) => searchItems(inputString.target.value)}
      />

          <ul>
            {searchInput.length > 0
              ? filteredResults.map(coin => (
                  <CoinInfo
                    key={coin.id}
                    id={coin.id}
                    image={coin.image}
                    name={coin.name}
                    symbol={coin.symbol}
                    price={coin.current_price}
                  />
                ))
              : list?.map(coin => (
                  <CoinInfo
                    key={coin.id}
                    id={coin.id}
                    image={coin.image}
                    name={coin.name}
                    symbol={coin.symbol}
                    price={coin.current_price}
                  />
                ))}
          </ul>
    </div>
  )
}

export default App
