import React from 'react'
import {Box, TextInput, Button, Image} from '../../../components/root/index'
import {ARROWSQUARERIGHT} from '../../../assets/images'
import {useDispatch, useSelector} from 'react-redux'
import {setUsername, setPassword, login} from '../../../store/reducers/AuthReducer'
import StoreState from '../../../types/store'
import {StoreNames} from '../../../store'

const Login = () => {
    const dispatch = useDispatch()
    const {username, password} = useSelector((state : StoreState) => state[StoreNames.AUTH]);

    function handleSubmit(e : React.FormEvent < HTMLFormElement >) {
        e.preventDefault();
        dispatch(login({username: username, password: password}))
    }

    return (
        <form onSubmit={
            (e) => handleSubmit(e)
        }>
            <Box className='gap-5 grid place-items-center'>
                <Box className="w-full">
                    <TextInput value={username}
                        onChange={
                            (text) => dispatch(setUsername(text))
                        }
                        className="outline text-center outline-zinc-400
                        focus:text-zinc-300 focus:outline focus:outline-zinc-300
                        text-zinc-300 text-xl"
                        placeholder="Enter Username"/>
                </Box>
                <Box className="w-full">
                    <TextInput type="password"
                        value={password}
                        onChange={
                            (text) => dispatch(setPassword(text))
                        }
                        className="outline text-center outline-zinc-400
                        focus:text-zinc-300 focus:outline focus:outline-zinc-300
                        text-zinc-300 text-xl"
                        placeholder="Enter Password"/>
                </Box>
                <Button>
                    <Box className='w-10'>
                        <Image src={ARROWSQUARERIGHT}></Image>
                    </Box>
                </Button>
            </Box>
        </form>
    )
}

export default Login
