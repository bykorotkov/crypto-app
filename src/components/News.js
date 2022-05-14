import React from 'react'

function News({title, link}) {
  return (
    <div className='news'>
        <h2> {title} </h2>
        <a target="blank" href={link}> View the details! </a>
    </div>
  )
}

export default News