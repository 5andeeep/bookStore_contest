import React from 'react'

const SherlockBooks = (props) => {
  return (
    <div className='sh-book-card'>
        <img src={props.img} alt="" />
        <p>{props.title}</p>
    </div>
  )
}

export default SherlockBooks