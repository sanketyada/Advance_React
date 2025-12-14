import React from 'react'
import { useParams } from 'react-router-dom'
function YourProduct() {
    const {id} = useParams()
  return (
    <div>
      Your Searched Product ID: {id}
    </div>
  )
}

export default YourProduct
