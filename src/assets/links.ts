const trend_url ='https://api.coingecko.com/api/v3/search/trending'
const coin_market ='https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=name%2Csymbol&category=cryptocurrency&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=24hr'

export {trend_url , coin_market}