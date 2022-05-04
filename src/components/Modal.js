import React from 'react'
import './modal.css'

const Modal = ({active, setActive, children, websiteUrl, twitterUrl}) => {
  return (
    <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
        <div className={active ? "modal__content active" : "modal__content"} onClick={e => e.stopPropagation()}>
            {children}
            <h1>You can also check their official links such as:</h1>
            <ul>
              <li><a className='modalLinks' href={websiteUrl} alt=''>Official Website</a></li>
              <li><a className='modalLinks' href={twitterUrl} alt=''>Twitter</a></li>
            </ul>
        </div>
    </div>
  )
}
export default Modal