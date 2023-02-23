import React from 'react'
import {Box, Text, Image} from '../../../components/root'

interface CardProps {
    name: string,
    image: string,
    price: number,
    id: string
}

const Nft_Card = ({name, id, price, image} : CardProps) => {
    return (
        <Box horizontal className='bg-neutral-800 h-[140px] w-[350px] md:w-[360px] rounded-3xl'>
            <Box className='w-32 py-10 px-6'>
                <Box className='w-14 mx-2'>
                    <Image src={image}/>
                </Box>
            </Box>
            <Box className='text-slate-200 text-lg py-2'>
                <Text>Name :</Text>
                <Text>{
                    name.substring(0, 20)
                } </Text>
                <Text>ID : {
                    id.substring(0, 20)
                } </Text>
                <Text>Price in USD : {price} </Text>
            </Box>
        </Box>
    )
}

export default Nft_Card
