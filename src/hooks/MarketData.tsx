import {useEffect, useState} from 'react'
import axios from 'axios'

type CoinsData = {
    thumbnail: string;
    symbol: string;
    name: string;
    price: number
}

const getCoinDetail = async (id : string) => {
    const link = `https://api.coingecko.com/api/v3/coins/${id}?tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false`
    try {
        const {data} = await axios(link)
        return {name: data.name, symbol: data.symbol, thumbnail: data.image.large, price: data.market_data.current_price.usd}as CoinsData
    } catch (err) {
        return null
    }
}


const MarketData = () => {
    const [data, setData] = useState < CoinsData[] > ([])
    const getDetails = async () => {
        const ids = ['bitcoin', 'ethereum']
        const _data = [];
        for (const id of ids) {
            const detail = await getCoinDetail(id);
            if (detail !== null) {
                _data.push(detail)
            }
        }
        setData(_data);
    }
    useEffect(() => {
        getDetails()
    }, [])
    console.log(data);

    return data;
}
export default MarketData
