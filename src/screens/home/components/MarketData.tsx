import React, { useState } from 'react'
import axios from 'axios'
import {Box, Text} from '../../../components/root'

interface CoinProps{
    name:string,
    price:number,
    price_change:number
    supply:number,
    symbol:string,
    image:string,
}

const MarketData = () => {
    return (
        <Box horizontal className='pt-2 gap-10'>
            <Box horizontal className=' bg-neutral-800 rounded-lg w-[350px] h-[200px]'>
                <Box className='w-1/2'></Box>
                <Box className='py-4 text-slate-200 text-xl'>
                    <Text>Name : 
                    </Text>
                    <Text>Symbol : BTC</Text>
                    <Text>Price USD :
                    </Text>
                    <Text>23456
                    </Text>
                    <Text>Current Supply :</Text>
                    <Text>235234234</Text>
                </Box>
            </Box>
            <Box horizontal className=' bg-neutral-800 rounded-lg w-[350px] h-[200px]'>
            <Box className='w-1/2'></Box>
            <Box className='py-4 text-slate-200 text-xl'>
                <Text>Name : Bitcoin
                </Text>
                <Text>Symbol : BTC</Text>
                <Text>Price USD :
                </Text>
                <Text>23456
                </Text>
                <Text>Current Supply :</Text>
                <Text>235234234</Text>
            </Box>
                </Box>
        </Box>
    )
}

export default MarketData
