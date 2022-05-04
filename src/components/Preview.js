import React from 'react'

const Preview = ({detail}) => {
  return (
    <div>
        <p className='actual'>${detail.current_price.toFixed(2)}</p>
        <p className={detail.price_change_24h < 0 ? "text-danger" : "text-success"}>
        {detail.price_change_percentage_24h.toFixed(2)}%</p>
    </div>
  )
}

export default Preview