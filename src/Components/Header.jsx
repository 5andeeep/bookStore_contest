import React from 'react';
import heart from '../images/bx_bx-book-heart.png';
import bell from '../images/ic_round-notifications-none.png';
import diamond from '../images/fluent_premium-person-20-regular.png';
import {FaSistrix} from "react-icons/fa";



const Header = () => {
  return (
    <div className='header'>
        <span className="logo">BookShop</span>
        <div className="search-area">
            <div className="search-box">
                <span id='search-icon'><FaSistrix /></span>
                <input type="text" id='search-input'placeholder='Search'/>
            </div>
            <button id='search-btn'>Search</button>
        </div>
        <div className="other-icons">
            <span><img src={heart} alt="" /></span>
            <span><img src={bell} alt="" /></span>
            <span><img src={diamond} alt="" /></span>
        </div>
    </div>
  )
}

export default Header