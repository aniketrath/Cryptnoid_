import React from "react";
import {Provider} from 'react-redux';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {Signin} from "./screens/login";
import {Screen} from "./components/root";
import {Home} from "./screens/home/index";
import {Store} from "./store/index";
import {AllCoinsPage} from "./screens/allcoins";

function App() {
    return (<Provider store={Store}>
        <Screen className="bg-neutral-900">
            <Router>
                <Routes>
                    <Route path="/"
                        element={<Signin/>}/>
                    <Route path="/home"
                        element={<Home/>}/>
                    <Route path="/home/AllCoins"
                        element={<AllCoinsPage/>}/>
                </Routes>
            </Router>
        </Screen>
    </Provider>);
}

export default App;
