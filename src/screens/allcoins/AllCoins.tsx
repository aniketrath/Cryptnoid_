import React from 'react'
import Navbar from '../../components/modules/Navbar'
import {Box, Text} from '../../components/root/index'
import {All_Coins} from '../../hooks'
import CoinDetails from './components/CoinDetails'

const AllCoins = () => {
    const coin_list = All_Coins()
    return (<Box>
        <Navbar/>
        <Box className='px-10 my-2'>
            <Text className='text-slate-200 text-3xl'>All Coins :</Text>
        </Box>
        <Box className='px-10 gap-4 md:grid md:grid-cols-2 lg:grid-cols-4'> {
            coin_list.map((ele) => {
                return <CoinDetails key={
                        ele.id
                    }
                    id={
                        ele.id
                    }
                    name={
                        ele.name
                    }
                    symbol={
                        ele.symbol
                    }
                    image={
                        ele.image
                    }
                    current_price={
                        ele.current_price
                    }
                    market_cap={
                        ele.market_cap
                    }
                    market_rank={
                        ele.market_rank
                    }
                    day_market_cap_change={
                        ele.day_market_cap_change
                    }
                    total_volume={
                        ele.total_volume
                    }
                    day_high={
                        ele.day_high
                    }
                    day_low={
                        ele.day_low
                    }
                    price_change={
                        ele.price_change
                    }
                    perc_price_change={
                        ele.perc_price_change
                    }/>
            })
        } </Box>
    </Box>)
}

export default AllCoins
