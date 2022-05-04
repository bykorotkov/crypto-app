import React from 'react'

const Pagination = ({ coinsPerPage, totalCoins, paginate }) => {
    const pageNumbers = []

    for(let i = 1; i <= Math.ceil(totalCoins / coinsPerPage); i++) {
        pageNumbers.push(i)
    }

  return (
    <div>
        <ul className='pagination'>
            {
                pageNumbers.map(number => (
                    <li className='pageItem' key={number}>
                        <a href='#' className='pageLink' onClick={() => paginate(number)}>
                            {number}
                        </a>
                    </li>
                ))
            }
        </ul>
    </div>
  )
}

export default Pagination