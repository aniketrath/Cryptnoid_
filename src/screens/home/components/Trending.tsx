import {Box, Text, Button} from '../../../components/root/index'
import TrendingCards from './COINcards'
import NFTcards from './NFTcards'
import {useTrendingCoins} from '../../../hooks'
import {useNavigate} from 'react-router-dom'


const Trending = () => {
    const navigate = useNavigate()
    function viewAll() {
        navigate("/home/AllCoins");
    }
    const trending_coins = useTrendingCoins()

    return (<Box className='py-6'>
        <Text className="text-slate-200 text-3xl px-8 py-4">Trending Cryptos :</Text>
        <Box horizontal className='no-scrollbar overflow-x-scroll scrollbar-hide gap-10 px-8'> {
            trending_coins.map((coins, i) => {
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
        <Box className='w-64'>
            <Button onClick={viewAll}
                className='bg-neutral-800 px-4 py-3 text-slate-200 text-xl mx-8 my-4 rounded-2xl'>
                View All Coins
            </Button>
        </Box>
        <Text className="text-slate-200 text-3xl px-8 py-4">Top NFTs [ ETH ] :</Text>
        <Box horizontal className='no-scrollbar overflow-x-scroll scrollbar-hide gap-10 px-8'>
            <NFTcards/>
        </Box>
        <Box className='w-64'>
            <Button className='bg-neutral-800 px-4 py-3 text-slate-200 text-xl mx-8 my-4 rounded-2xl'>
                View More
            </Button>
        </Box>
    </Box>)
}

export default Trending
