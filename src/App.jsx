import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Homepage from './pages/Homepage'
import { ThemeProvider } from '@mui/material'
import theme from './style/theme'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='*' element={<p>404 page not found!</p>} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
