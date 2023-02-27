import React from 'react'
import {Box} from '../../../components/root/index'
import TrendingCards from './CoinCards'
import {Market_Data} from '../../../hooks'

const MarketData = () => {
 const market_data = Market_Data()
  return ( 
    <Box className='py-6'>
        <Box horizontal className='no-scrollbar overflow-x-scroll scrollbar-hide gap-10 px-8'>
            {
            market_data.map((coins, i) => {
                return <TrendingCards key={i}
                    name={
                        coins.name
                    }
                    symbol
                    ={coins.symbol}
                    price
                    ={coins.price}
                    thumbnail={
                        coins.thumbnail
                    }/>
            })
        } </Box>
    </Box>
  )
}

export default MarketData