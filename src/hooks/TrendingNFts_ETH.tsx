import {useState, useEffect} from 'react'
import {eth_nft_list} from '../assets/links'
import axios from 'axios'

type AssetData = {
    id: string,
    name: string
}
type NFTdata = {
    total_supply: number,
    unique_addresses: number,
    /* Floor Price */
    usd_price: number,
    image: string
}

function TrendingNFts_ETH() {
    const [list_data, SetlistData] = useState < AssetData[] > ([])
    const get_ETH_NFTs = async () => {
        try {
            const resp = await axios.get(eth_nft_list);
            const nft_list: AssetData[] = resp.data.map((element : any) => {
                return {id: element.id, name: element.name}
            })
            SetlistData(nft_list);

        } catch (err) {
            console.error(err);
        }
    };
    useEffect(() => {
        get_ETH_NFTs()
    }, [])
    return list_data
}

export default TrendingNFts_ETH
