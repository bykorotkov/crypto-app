import React from 'react'

const CoinData = ({data}) => {

  const renderData = () => {
    if (data) {
      return (
      <div className='main-details'>
        <div className='column-details'>
          <div className='coin-details'>
            <span>Market Cap</span>
            <span>{data.market_cap}</span>
          </div>
          <hr />
          <div className='coin-details'>
            <span>Total Supply</span>
            <span>{data.total_supply}</span>
          </div>
        </div>
        <div className='column-details'>
          <div className='coin-details'>
            <span>Volume (24H)</span>
            <span>{data.total_volume}</span>
          </div>
          <hr />
          <div className='coin-details'>
            <span>high 24h</span>
            <span>{data.high_24h}</span>
          </div>
        </div>
        <div className='column-details'>
          <div className='coin-details'>
            <span>Circulating Supply</span>
            <span>{data.circulating_supply}</span>
          </div>
          <hr />
          <div className='coin-details'>
            <span>low 24h</span>
            <span>{data.low_24h}</span>
          </div>
        </div>
      </div>
      )
    }
  }
  
  return (
    <div>{renderData()}</div>
  )
}

export default CoinData