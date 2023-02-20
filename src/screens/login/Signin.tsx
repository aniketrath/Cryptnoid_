import React from "react";
import {Box, Text, Image} from "../../components/root/index";
import {LOGIN} from "../../assets/images";
import Login from "./components/Login";

const Signin = () => {
    return (
        <Box className="grid place-items-center">
            <Box className=" py-10 ">
                <Text className="text-zinc-400 text-6xl text-center font-bold">
                    Cryptnoid
                </Text>
            </Box>
            <Box className=" pt-6 w-72 ">
                <Image src={LOGIN}/>
            </Box>
            <Box className="py-5 w-64">
                <Text className="text-stone-300 text-2xl text-center font-bold">
                    Research and Comparision between all exchanges in the world
                </Text>
            </Box>
            <Box className="w-72 py-5">
                <Login/>
            </Box>
        </Box>
    );
};
export default Signin;
