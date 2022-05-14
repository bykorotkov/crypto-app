import React from 'react'
import { Navigate, Route, Routes, } from 'react-router-dom';
import About from '../pages/About';
import Error from '../pages/Error';
import CoinIdPage from '../pages/CoinIdPage';
import Coins from '../pages/Coins';

const AppRouter = () => {
  return (
    <Routes>
        <Route path="/about" element={<About />} />
        <Route exact path="/coins" element={<Coins />} />
        <Route path="/error" element={<Error />} />
        <Route exact path="/coins/:id" element={<CoinIdPage />} />
        <Route path='*' element={<Navigate to="/error"/>} />  
        <Route path='/' element={<Navigate to="/coins"/>} />  
    </Routes>
  )
}

export default AppRouter