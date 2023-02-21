import React from 'react'
import {Box, Text, Image} from '../../../components/root'
import {NFT} from '../../../assets/images'

interface NFTProps {
    name: string,
    floor_price: number,
    image: string
}

const NFTcards = ({name, floor_price, image} : NFTProps) => {
    return (<Box horizontal className='bg-neutral-800 h-[110px] min-w-[420px] rounded-3xl'>
        <Box className='w-28 min-h-full rounded-xl px-6 py-4'>
            <Box className='w-14 mx-2 py-2.5 rounded-lg overflow-hidden'>
                <Image src={image}/>
            </Box>
        </Box>
        <Box className='py-3 px-4 w-full gap-2'>
            <Text className='text-slate-300 text-lg'> {name}</Text>
            <Text className='text-slate-300 text-lg'>Floor Price : {floor_price}</Text>
        </Box>
    </Box>)
}

export default NFTcards
