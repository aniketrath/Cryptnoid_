import React from 'react'
import {Box, Text} from '../../../components/root'

const NFTcards = () => {
    return (<Box horizontal className='bg-neutral-800 h-[80px] min-w-[330px] rounded-3xl'>
        <Box className='w-20 bg-zinc-700 min-h-full rounded-xl'> {/* Image */} </Box>
        <Box className='py-2 px-4 w-full gap-2'>
            <Text className='text-slate-300 text-xl'>Bored Ape Yatch Club</Text>
            <Text className='text-slate-300 text-xl'>Floor Price : 71.8ETH</Text>
        </Box>
    </Box>)
}

export default NFTcards
