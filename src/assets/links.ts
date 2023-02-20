const trend_url ='https://api.coingecko.com/api/v3/search/trending'
const coin_market ='https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'
const eth_nft_list ='https://api.coingecko.com/api/v3/nfts/list?order=market_cap_usd_asc&asset_platform_id=ethereum&per_page=10&page=1'

export {trend_url , coin_market,eth_nft_list}