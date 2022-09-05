import { Box } from '@mui/system'
import React, { useEffect } from 'react'
import { useCookies } from 'react-cookie'
import { useNavigate } from 'react-router-dom'
import Appbar from '../components/Appbar/Appbar'
import DailyChoice from '../components/DailyChoice/DailyChoice'
import Nav from '../components/Navbar/Nav'

const Homepage = () => {
    const backgrounds = ["transparent", "transparent", "transparent"]
    const [cookie] = useCookies();
    const navigate = useNavigate();

    useEffect(() => {
        if (!cookie.session) {
            navigate("/login")
        }
    });

    return (
        <>
            {cookie.session ? <><Nav backgrounds={backgrounds} />
                <Appbar />
                <DailyChoice /></> : <></>}
        </>
    )
}

export default Homepage