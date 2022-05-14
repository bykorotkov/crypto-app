import React, { useState } from 'react'
import './modal.css'
import {useNavigate} from 'react-router-dom'
import Modal from './Modal'

function CoinCard ({id, name, icon, price, symbol, coin}) {
  const [modalActive, setModalActive] = useState(false)
  const router = useNavigate()
  return (
    <div className='coin'>
        <h1> {name} </h1>
        <img src={icon} alt=''/>
        <h3> Price: {price.toFixed(2)} </h3>
        <h3> Symbol: {symbol} </h3>
        <button onClick={() => setModalActive(true)}>Links</button>
        <button onClick={() => router(`./coins/${id}`)}>More</button>
        <Modal active={modalActive} setActive={setModalActive} twitterUrl={coin.twitterUrl} websiteUrl={coin.websiteUrl}/>
    </div>
  )
}

export default CoinCard