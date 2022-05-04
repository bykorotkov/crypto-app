import React from 'react'

const About = () => {
  return (
    <div>
      <h1 style={{marginLeft: 20}}>
          This app made by junior React dev Igor Korotkov for educational purposes. My contacts are:
      </h1>
      <ul className='contacts'>
        <li><a href='https://bykorotkov@gmail.com' target="_blank" rel="noreferrer">bykorotkov@gmail.com</a></li>
        <li>+7 (960) 858-00-43</li>
        <li><a href='https://t.me/bykorotkov' target="_blank" rel="noreferrer">https://t.me/bykorotkov</a></li>
        <li><a href='https://github.com/bykorotkov' target="_blank" rel="noreferrer">https://github.com/bykorotkov</a></li>
      </ul>
    </div>
  )
}

export default About