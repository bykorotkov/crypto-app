import React, { useEffect, useRef, useState } from 'react'
import Chartjs from "chart.js"
import { historyOptions } from './chartConfig/chartConfigs'
import Preview from './Preview'

const HistoryChart = ({data}) => {
    const chartRef = useRef()
    const {day, week, year, detail} = data;
    const [timeFormat, setTimeFormat] = useState("24h")

    const determineTimeFormat = () => {
      switch (timeFormat) {
        case "24h":
          return day;
          case "7d":
            return week;
            case "1y":
              return year;
              default: 
              return day
      }
    }

    useEffect(() => {
      if (chartRef && chartRef.current && detail) {
        const chartInstance = new Chartjs(chartRef.current, {
          type: 'line',
          data: {
              datasets: [{
                  label: `${detail.id} price`,
                  data: determineTimeFormat(),
                  backgroundColor: "rgb(130, 245, 170)",
                  borderColor: "rgb(130, 245, 170)",
                  pointRadius: 0,
                  
                  borderWidth: 1
              }]
          },
          options: historyOptions
      })   
      } 
    }) 

    const renderPrice = () => {
      if (detail) {
        return (
          <div className='changes'>
            <Preview detail={detail}/>
          </div>
        )
      }
    }
  return (
    <div>
      <div>
        <div className='chart-price'>{renderPrice()}</div>
        <div className='chart-main'>
          <canvas ref={chartRef} id='myChart' width={250} height={250}></canvas>
        </div>
      </div>
      <div className='timeButtons'>
        <button onClick={() => setTimeFormat("24h") }>24h</button>
        <button onClick={() => setTimeFormat("7d")}>7d</button>
        <button onClick={() => setTimeFormat("1y")}>1y</button>
      </div>
    </div>
  )
}

export default HistoryChart