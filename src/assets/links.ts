const trend_url ='https://api.coingecko.com/api/v3/search/trending'
const coin_market ='https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'
const eth_nft ='https://api.coingecko.com/api/v3/nfts/list?order=market_cap_usd_asc&asset_platform_id=ethereum&per_page=30&page=1'
const solana_nft='https://api.coingecko.com/api/v3/nfts/list?order=market_cap_usd_asc&asset_platform_id=solana&per_page=30&page=1'
const polygon_pos ='https://api.coingecko.com/api/v3/nfts/list?order=market_cap_usd_asc&asset_platform_id=polygon-pos&per_page=30&page=1'
const arbitrum_pos ='https://api.coingecko.com/api/v3/nfts/list?asset_platform_id=arbitrum-one&per_page=50&page=1'
const binance_coin ='https://api.coingecko.com/api/v3/nfts/list?asset_platform_id=binance-smart-chain&per_page=50&page=1'
const avalanche ='https://api.coingecko.com/api/v3/nfts/list?asset_platform_id=avalanche&per_page=50&page=1'

export {trend_url , 
    coin_market,
    eth_nft,
    solana_nft,
    polygon_pos,
    arbitrum_pos,
    binance_coin,
    avalanche}