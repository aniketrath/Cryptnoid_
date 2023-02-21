import React, {useState} from 'react'
import {Box, Text, Image, Button} from '../../../components/root/index'

interface CoinDetail {
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

const CoinDetails = ({
    id,
    name,
    symbol,
    image,
    current_price,
    market_cap,
    market_rank,
    total_volume,
    day_high,
    day_low,
    price_change,
    perc_price_change,
    day_market_cap_change
} : CoinDetail) => {

    const [expand, setExpand] = useState(false)

    function checkExpand() {
        setExpand(!expand)
    }


    return (<Button onClick={checkExpand}
        className='text-left'>
        <Box>
            <Box className={
                `bg-neutral-800 rounded-xl  py-4 w-[330px] ${
                    expand ? '' : 'overflow-y-hidden h-[210px]'
                }`
            }>
                <Box horizontal className='px-4 '>
                    <Box className='w-1/3 px-8'>
                        <Box className='w-16 rounded-full overflow-hidden'>
                            <Image src={image}/>
                        </Box>
                    </Box>
                    <Text className='text-slate-200 text-2xl font-bold uppercase py-4 px-6'> {symbol}</Text>
                </Box>
                <Box className='text-slate-200 text-xl px-8 mt-4 gap-2'>
                    <Box horizontal>
                        <Text>Name :
                        </Text>
                        <Text className='px-2 font-semibold'> {name}</Text>
                    </Box>
                    <Text>id : {id}</Text>
                    <Text>Current Price : {current_price}</Text>
                    <Text>Market Cap :<br/> {market_cap}</Text>
                    <Text>Market Rank : {market_rank}</Text>
                    <Text>Trading Volume :<br/> {total_volume}</Text>
                    <Text>24hr High : {day_high}</Text>
                    <Text>24hr Low : {day_low}</Text>
                    <Text>Price Change :<br/> {price_change}</Text>
                    <Text>Price Change % : {perc_price_change}</Text>
                    <Text>Market Cap Change % :<br/> {day_market_cap_change}</Text>
                </Box>
            </Box>
        </Box>
    </Button>)
}

export default CoinDetails
