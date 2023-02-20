import React from 'react'
import {Box, Text} from '../../components/root'
import Navbar from '../../components/modules/Navbar'
import Trending from './components/Trending'

const Home = () => {
    return (
        <Box>
            <Navbar/>
            <Box className='mt-10 mx-2'>
                <Text className='text-zinc-300 text-3xl font-semibold px-8'>
                    Trending</Text>
                <Trending/>
            </Box>
        </Box>
    )
}

export default Home
