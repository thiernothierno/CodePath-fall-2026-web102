import React from "react"
import { useEffect, useState } from "react"
const API_KEY = import.meta.env.VITE_APP_API_KEY
const MESSARI_KEY = import.meta.env.VITE_MESSARI_APP_API_KEY
const URL = "https://api.messari.io/news/v1/news/feed?publishedBefore=2025-11-06T23%3A59%3A59Z&publishedAfter=2025-11-05T00%3A00%3A00Z&sourceTypes=News&sourceIds=67852f4b-e8a8-4468-80c0-dd0319db014c&assetIds=bitcoin&assetIds=ethereum&limit=10";

const CryptoPanicBaseEndpoin = "https://cryptopanic.com/api/API_PLAN/v2/posts/"

function CryptoNews() {

    const [newsList, setNewsList] = useState([])

    useEffect(() => {
        const messariCryptoNews = async () => {
            const response = await fetch(URL,
            {
                "headers" : {
                    "x-messari-api-key" : MESSARI_KEY
                }
            })
            const data = await response.json()
            setNewsList(data)
            console.log(data)
        }
    
    messariCryptoNews().catch(console.error)
    }, [])

    return (
        <div>
        <h3>Crypto News</h3>
            <ul className="side-list">
                {newsList && newsList.map((article) => 
                <li className="news-article" key={article.title}><a href={article.url}>{article.title}</a></li>
           
                )}
            </ul>
        </div>
    )
    
}

export default CryptoNews  