import React from 'react'
import { useLocation } from 'react-router-dom'

function Cart() {
    const location=useLocation()
  return (
    <div>
    <h2>Dear {location.state}</h2>
    </div>
  )
}

export default Cart