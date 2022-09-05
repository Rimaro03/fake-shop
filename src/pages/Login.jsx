import { AccountCircle, Key, Lock, Password } from '@mui/icons-material'
import { Backdrop, Button, CircularProgress, InputBase, Link, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useEffect, useState } from 'react'
import { FormContainer } from '../style/components'
import { palette } from '../style/theme'
import { useCookies } from 'react-cookie'
import { useNavigate } from 'react-router-dom'
import Message from '../components/Message/Message'
import { useUIContext } from '../context/ui'

const Login = () => {
    const [cookie, setCookie] = useCookies();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const { snackOpen, setSnackOpen } = useUIContext();
    const navigate = useNavigate();

    useEffect(() => {
        if (cookie.session) {
            navigate("/")
        }
        fetch('https://fakestoreapi.com/users')
            .then(res => res.json())
            .then(json => window.localStorage.setItem("userList", JSON.stringify(json)))
    }, [])

    const handleSubmit = () => {
        setIsLoading(true)
        fetch('https://fakestoreapi.com/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Headers': 'Content-Type, Authorization',
                'Access-Control-Allow-Methods': 'POST',
                'Access-Control-Allow-Origin': '*'
            },
            body: JSON.stringify({
                username: username,
                password: password
            })
        })
            .then(res => res.json())
            .catch(err => {
                setSnackOpen(true)
                setIsLoading(false)
            })
            .then(json => {
                setCookie("session", json["token"], { path: "/" });
                window.localStorage.setItem("currentUser", JSON.stringify({
                    username: username,
                    password: password
                }))
                window.localStorage.setItem("cart", "")
                navigate("/");
                setIsLoading(false)
            })
    }

    return (
        <FormContainer>
            <Typography variant='h4'>SIGN IN</Typography>
            <Box sx={{ display: 'flex', alignItems: 'flex-end', mt: 2, justifyContent: "center", width: "100%" }}>
                <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                <TextField id="input-with-sx"
                    label="Username"
                    variant="standard"
                    sx={{ width: "100%" }}
                    onChange={(e) => { setUsername(e.target.value) }} />
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'flex-end', mt: 2, justifyContent: "center" }}>
                <Lock sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                <TextField id="input-with-sx"
                    label="Password"
                    variant="standard"
                    type={"password"}
                    sx={{ width: "100%" }}
                    onChange={(e) => { setPassword(e.target.value) }} />
            </Box>
            <Button variant="contained" sx={{ width: "100%", mt: 2 }} onClick={handleSubmit}>SIGN IN</Button>
            <Typography variant={"caption"} sx={{}}>Don't have an account? Check the <Link href='https://fakestoreapi.com/users' color={palette.black.main}> account list!</Link></Typography>
            {isLoading ? <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={isLoading}
            >
                <CircularProgress color="inherit" />
            </Backdrop> : <></>}
            <Message message={"Incorrect credentials"} severity={"error"} />
        </FormContainer>
    )
}

export default Login