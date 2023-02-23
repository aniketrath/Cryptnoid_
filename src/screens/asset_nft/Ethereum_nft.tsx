import Navbar from "../../components/modules/Navbar"
import {Box, Text} from "../../components/root"
import {Eth_List} from "../../hooks/index"
import NftCard from "./components/Nft_Card"

const Eth_nft = () => {

    const nft_list = Eth_List()

    return (
        <Box>
            <Navbar/>
            <Text className="text-slate-200 text-3xl px-8 py-4">
                NFTs from Platform : Ethereum
            </Text>
            <Box className="px-5 gap-4 md:grid md:grid-cols-2 lg:grid-cols-4 ">
                {
                nft_list.map((asset, i) => {
                    return <NftCard key={i}
                        name={
                            asset.name
                        }
                        id
                        ={asset.id}
                        price
                        ={asset.usd_price}
                        image={
                            asset.image
                        }/>
                })
            } </Box>
        </Box>
    )
}

export default Eth_nft
