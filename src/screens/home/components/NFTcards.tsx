import React from 'react'
import {Box, Text, Image} from '../../../components/root'
import {NFT} from '../../../assets/images'

const NFTcards = () => {
    return (<Box horizontal className='bg-neutral-800 h-[80px] min-w-[330px] rounded-3xl'>
        <Box className='w-28 bg-zinc-700 min-h-full rounded-xl'>
            <Box className='w-16 mx-2 py-2.5'>
                <Image src={NFT}/>
            </Box>
        </Box>
        <Box className='py-2 px-4 w-full gap-2'>
            <Text className='text-slate-300 text-xl'>Bored Ape Yatch Club</Text>
            <Text className='text-slate-300 text-xl'>Floor Price : 71.8ETH</Text>
        </Box>
    </Box>)
}

export default NFTcards
