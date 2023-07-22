import React from 'react'

const HarryBooks = (props) => {
  return (
    <div className='hp-book-card'>
        <img src={props.img} alt="" />
        <p>{props.title}</p>
    </div>
  )
}

export default HarryBooks