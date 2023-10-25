import React from 'react'
import './Main.css'
import hand_icon from '../Images/hand_icon.png'
import arrow_icon from "../Images/arrow.png"
import hero_image from "../Images/hero_image.png"

function Main() {
  return (
    <div className='main' >
        <div className="main-left">
            <h2>NEW ARRIVALS ONLY</h2>
            <div>
                <div className="main-hand-icon">
                    <p>new</p>
                    <img src={hand_icon} alt="" />
                </div>
                <p>collections</p>
                <p>for everyone</p>
            </div>
            <div className='main-latest-btn' >
               <div>Latest Collection</div>
               <img src={arrow_icon} alt="" />
            </div>
        </div>
        
        <div className="main-right">
            <img src={hero_image} alt="" />
        </div>
    </div>
  )
}

export default Main