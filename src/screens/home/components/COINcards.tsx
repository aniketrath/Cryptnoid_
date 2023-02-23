import React from 'react'
import {Box, Text, Image} from '../../../components/root/index';

interface TrendindCardProps {
    name: string,
    price: number,
    thumbnail: string,
    symbol: string
}

const TrendingCards = ({name, price, symbol, thumbnail} : TrendindCardProps) => {
    return (<Box horizontal className='bg-neutral-800 h-[180px] min-w-[350px] rounded-3xl'>
        <Box className='w-1/2 bg-zinc-700/20 min-h-full rounded-xl p-8'>
            <Box className='rounded-full overflow-hidden'>
                <Image src={thumbnail}/>
            </Box>
        </Box>
        <Box className='w-1/2 py-4 px-4 gap-2'>
            <Text className='text-slate-300 text-xl'> {name}
                ({symbol})</Text>
            <Text className='text-slate-300 text-xl'>price:<br/>{
                price.toFixed(8)
            }</Text>
        </Box>


    </Box>)
}

export default TrendingCards
