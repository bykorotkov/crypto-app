import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import HistoryChart from '../components/HistoryChart'
import coinGecko from '../components/API/coinGecko'
import CoinData from '../components/CoinData'
import Loader from '../components/UI/Loader/Loader'

const CoinIdPage = () => {
    const {id} = useParams()
    const [coinData, setCoinData] = useState({})
    const [isLoading, setIsLoading] = useState(false)

    const formatData = data => {
      return data.map(el => {
        return {
          t: el[0],
          y: el[1].toFixed(2)
        }
      })
    }

    useEffect(() => {
      setIsLoading(true)
      const fetchData = async () => {
        const [day, week, year, detail] = await Promise.all([
        coinGecko.get(`/coins/${id}/market_chart/`, {
          params: {
            vs_currency: "usd",
            days: "1",
          }
        }),
        coinGecko.get(`/coins/${id}/market_chart/`, {
          params: {
            vs_currency: "usd",
            days: "7",
          }
        }),
        coinGecko.get(`/coins/${id}/market_chart/`, {
          params: {
            vs_currency: "usd",
            days: "365",
          }
        }),
        coinGecko.get("/coins/markets/", {
          params: {
            vs_currency: "usd",
            ids: id,
          }
        })
        ])
        setCoinData({
          day: formatData(day.data.prices), 
          week: formatData(week.data.prices), 
          year: formatData(year.data.prices),
          detail: detail.data[0],
        })
        setIsLoading(false)
      }
      fetchData()
    }, [])

  return (
    <div className='details'>
        {isLoading 
            ? <div style={{display: 'flex', justifyContent: 'center'}}><Loader /></div>
            : <div><h1 className='idPage'>You visited {id.toUpperCase()} page</h1>
        <HistoryChart data={coinData} />
        <CoinData data={coinData.detail} />
        </div>}
    </div>
  )
}

export default CoinIdPage