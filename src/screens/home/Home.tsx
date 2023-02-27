import React from 'react'
import {Box, Text} from '../../components/root'
import Navbar from '../../components/modules/Navbar'
import Trending from './components/Trending'
import Nft from './components/Nft'
import MarketData from './components/MarketData'

const Home = () => {
    return (
        <Box>
            <Navbar/>
            <Box className='mt-10 mx-2'>
                <Text className='text-zinc-300 text-3xl font-semibold px-8'>
                    Market Update:</Text>
                <MarketData/>
                <Text className='text-zinc-300 text-3xl font-semibold px-8'>
                    Trending</Text>
                <Trending/>
                <Text className="text-slate-200 text-3xl px-8 py-4">Top NFTs from :</Text>
                <Nft/>
            </Box>
        </Box>
    )
}

export default Home
