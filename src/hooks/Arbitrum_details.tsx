import axios from 'axios'
import {useEffect, useState} from 'react'
import {arbitrum_pos} from '../assets/links'
type NFTdata = {
    id: string,
    name: string,
    /* Floor Price */
    usd_price: number,
    image: string
}
const getNFTids = async () => {
    try {
        const resp = await axios.get(arbitrum_pos);
        const nft_list: string[] = resp.data.map((element : any) => element.id)
        return nft_list;
    } catch (err) {
        return []
    }
}
const getNFTDetail = async (id : string) => {
    const link = `https://api.coingecko.com/api/v3/nfts/${id}`
    try {
        const {data} = await axios(link)
        return {id: data.id, image: data.image.small, name: data.name, usd_price: data.floor_price.usd}as NFTdata
    } catch (err) {
        return null
    }
}

const useNftDetails = () => {
    const [data, setData] = useState < NFTdata[] > ([])
    const getDetails = async () => {
        const ids = await getNFTids()
        const _data = [];
        for (const id of ids) {
            const detail = await getNFTDetail(id);
            if (detail !== null) {
                _data.push(detail)
            }
        }
        setData(_data);
    }
    useEffect(() => {
        getDetails()
    }, [])
    return data;
}

export default useNftDetails
