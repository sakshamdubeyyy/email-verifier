import React from 'react'
import "../styles/Box.css"

export default function Box({thumbnail, heading}) {
  return (
    <div className='box'>
        <div className='top'>
            <img src={thumbnail} alt="thumbnail" />
            <h2>{heading}</h2>
        </div>
        <div className='bottom'>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum iure nulla sit aliquam, aliquid distinctio!</p>
        </div>
    </div>
  )
}
