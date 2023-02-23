import React from 'react'
import {useNavigate} from 'react-router-dom'
import {Box, Button} from '../../../components/root'

const Nft = () => {
    const navigate = useNavigate()
    return (
        <Box>
            <Box horizontal className='overflow-x-scroll scrollbar-hide w-full'>
                <Box>
                    <Button onClick={
                            () => navigate("/home/nft/ethereum")
                        }
                        className='bg-neutral-800 px-4 py-3 text-slate-200 text-xl mx-8 my-4 rounded-2xl'>
                        Ethereum [ETH]
                    </Button>
                </Box>
                <Box>
                    <Button onClick={
                            () => navigate("/home/nft/matic")
                        }
                        className='bg-neutral-800 px-4 py-3 text-slate-200 text-xl mx-8 my-4 rounded-2xl'>
                        Polygon [MATIC]
                    </Button>
                </Box>
                <Box>
                    <Button onClick={
                            () => navigate("/home/nft/avalanche")
                        }
                        className='bg-neutral-800 px-4 py-3 text-slate-200 text-xl mx-8 my-4 rounded-2xl'>
                        Avalanche [AVAX]
                    </Button>
                </Box>
                <Box>
                    <Button onClick={
                            () => navigate("/home/nft/solana")
                        }
                        className='bg-neutral-800 px-4 py-3 text-slate-200 text-xl mx-8 my-4 rounded-2xl'>
                        Solana [SOLANA]
                    </Button>
                </Box>
                <Box>
                    <Button onClick={
                            () => navigate("/home/nft/arbitrum")
                        }
                        className='bg-neutral-800 px-4 py-3 text-slate-200 text-xl mx-8 my-4 rounded-2xl'>
                        Arbitrum [ARBBITRUM]
                    </Button>
                </Box>
                <Box>
                    <Button onClick={
                            () => navigate("/home/nft/binance")
                        }
                        className='bg-neutral-800 px-4 py-3 text-slate-200 text-xl mx-8 my-4 rounded-2xl'>
                        Binance [BSC]
                    </Button>
                </Box>
            </Box>

        </Box>
    )
}

export default Nft
