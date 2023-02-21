import React, {useState} from 'react'
import {Box, Text, Button} from '../root/index'
import {Menu} from 'iconsax-react'
import {useNavigate} from 'react-router-dom'

const Navbar = () => {
    const navigate = useNavigate()
    const [open, setOpen] = useState(false)

    function goHome() {
        navigate('/home')
    }

    function OpenList() {
        setOpen(!open);
    }

    return (<Box className='py-2 px-2'>
        <nav className="p-3 bg-neutral-800 rounded-lg shadow md:flex md:items-center md:justify-between">
            <Box horizontal className="flex justify-between items-center ">
                <Button onClick={goHome}>
                    <Text className="text-slate-200 text-3xl px-4 font-semibold ">Cryptnoid</Text>
                </Button>
                <Button className="mx-2 md:hidden">
                    <Menu onClick={OpenList}
                        name='menu'
                        size="32"
                        color="#d9e3f0"/>
                </Button>
            </Box>
            <ul id='list'
                className={
                    `bg-neutral-800 md:flex md:items-center md:static md:pb-0 md:w-auto md:pl-0 ${
                        open ? '' : 'absolute'
                    }
                    pb-2
                    md:z-auto z-[-1] left-0 w-full pl-9
                    transition-all duration-500 ease-in`
            }>
                <li className="md:mx-4 my-6 md:my-0">
                    <a href="/home" className="text-xl text-slate-400 hover:text-slate-200 duration-500">HOME</a>
                </li>
                <li className="md:mx-4 my-6 md:my-0">
                    <a href="/about" className="text-xl text-slate-400 hover:text-slate-200 duration-500">ABOUT</a>
                </li>
                <li className="md:mx-4 my-6 md:my-0">
                    <a href="/contact" className="text-xl text-slate-400 hover:text-slate-200 duration-500">CONTACT</a>
                </li>
                <li className="md:mx-4 mt-6 md:my-0">
                    <a href="/" className="text-xl text-slate-400 hover:text-slate-200 duration-500">LOG OUT</a>
                </li>
            </ul>
        </nav>
    </Box>)
}

export default Navbar
