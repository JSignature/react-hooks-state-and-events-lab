import React, { useState } from 'react'

function Item({ name, category }) {
  const [btnText, setBtnText] = useState('Add to Cart')
  const [liText, setLiText] = useState('')

  function addToCart() {
    // console.log(e)
    // e.target.outerText = 'Added to cart'
    setBtnText('Remove From Cart')
    setLiText('in-cart')
  }

  return (
    <li className={liText}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={addToCart}>
        {btnText}
      </button>
    </li>
  )
}

export default Item
