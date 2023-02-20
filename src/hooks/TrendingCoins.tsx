import {useEffect, useState} from 'react'
import axios from 'axios'
import {trend_url} from '../assets/links'

type CoinsData = {
    thumbnail: string;
    symbol: string;
    name: string;
    price: number
}

function TrendingCoins() {

    const [data, setData] = useState < CoinsData[] > ([])

    const getTrendingCoins = async () => {
        try {
            const resp = await axios.get(trend_url);
            const items: CoinsData[] = resp.data.coins.map((element : any) => {
                const item = element.item
                return {thumbnail: item.large, name: item.name, symbol: item.symbol, price: item.price_btc}
            })

            setData(items);

        } catch (err) {

            console.error(err);
        }
    };
    useEffect(() => {
        getTrendingCoins()
    }, [])

    return data
}

export default TrendingCoins
