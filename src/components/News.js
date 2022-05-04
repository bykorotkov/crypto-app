import React from 'react'

function News({title, feedDate, link}) {
  return (
    <div className='news'>
        <h2> {title} </h2>
        <h5> Posted time: {feedDate} </h5>
        <a target="blank" href={link}> View the details! </a>
    </div>
  )
}

export default News