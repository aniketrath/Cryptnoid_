import {useEffect, useState} from 'react'
import axios from 'axios'
import {coin_market} from '../assets/links'

type CoinDetails = {
    id: string,
    symbol: string,
    name: string,
    image: string,
    current_price: number,
    market_cap: number,
    market_rank: number,
    total_volume: number,
    day_high: number,
    day_low: number,
    price_change: number,
    perc_price_change: number,
    day_market_cap_change: number
}

function All_coin_data() {
    const [data, setData] = useState < CoinDetails[] > ([])
    const getCoins = async () => {
        try {
            const resp = await axios.get(coin_market);
            const coin_details: CoinDetails[] = resp.data.map((ele : any) => {
                return {
                    id: ele.id,
                    symbol: ele.symbol,
                    name: ele.name,
                    image: ele.image,
                    current_price: ele.current_price,
                    market_cap: ele.market_cap,
                    market_rank: ele.market_cap_rank,
                    total_volume: ele.total_volume,
                    day_high: ele.high_24h,
                    day_low: ele.low_24h,
                    price_change: ele.price_change_24h,
                    perc_price_change: ele.price_change_percentage_24h,
                    day_market_cap_change: ele.market_cap_change_24h
                }
            })
            setData(coin_details);
        } catch (err) {
            console.error(err);
        }
    };
    useEffect(() => {
        getCoins()
    }, [])

    return data
}

export default All_coin_data
