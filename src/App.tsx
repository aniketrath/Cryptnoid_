import React from "react";
import {Provider} from 'react-redux';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {Signin} from "./screens/login";
import {Screen} from "./components/root";
import {Home} from "./screens/home/index";
import {Store} from "./store/index";
import {AllCoinsPage} from "./screens/allcoins";
import {
    EthereumNft,
    BinanceNft,
    ArbirtumNft,
    AvalancheNft,
    MaticNft,
    SolanaNft
} from "./screens/asset_nft";

function App() {
    return (
        <Provider store={Store}>
            <Screen className="bg-neutral-900 overflow-x-scroll scrollbar-hide">
                <Router>
                    <Routes>
                        <Route path="/"
                            element={<Signin/>}/>
                        <Route path="/home"
                            element={<Home/>}/>
                        <Route path="/home/AllCoins"
                            element={<AllCoinsPage/>}/>
                        <Route path="/home/nft/ethereum"
                            element={<EthereumNft/>}/>
                        <Route path="/home/nft/matic"
                            element={<MaticNft/>}/>
                        <Route path="/home/nft/solana"
                            element={<SolanaNft/>}/>
                        <Route path="/home/nft/arbitrum"
                            element={<ArbirtumNft/>}/>
                        <Route path="/home/nft/avalanche"
                            element={<AvalancheNft/>}/>
                        <Route path="/home/nft/binance"
                            element={<BinanceNft/>}/>
                    </Routes>
                </Router>
            </Screen>
        </Provider>
    );
}

export default App;
