import React from 'react'
import './DescriptionBox.css'

function DescriptionBox() {
  return (
    <div className='descriptionbox' >
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">Description</div>
            <div className="descriptionbox-nav-box fade">Reviews (122)</div>
        </div>
        <div className="descriptionbox-description">
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam, nulla ducimus ex iste tempore veritatis! Ducimus autem, cumque amet ex distinctio impedit perferendis eligendi deleniti, at porro, tenetur quasi minus.L
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci ipsa, nihil incidunt consequuntur beatae veniam dolore dolorum veritatis quisquam, commodi debitis obcaecati dolorem tempore explicabo eos. Quod distinctio minima eum!
            </p>
        </div>
    </div>
  )
}

export default DescriptionBox