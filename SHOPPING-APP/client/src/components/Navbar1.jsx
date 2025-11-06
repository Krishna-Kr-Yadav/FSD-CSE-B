import React from 'react'
import { Link } from 'react-router-dom'

const Navbar1 = () => {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/cart">View Cart</Link>
      <Link to="/order">View Order</Link>
    </div>
  )
}

export default Navbar1
