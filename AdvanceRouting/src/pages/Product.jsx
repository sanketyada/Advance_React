import React from 'react'
import { useParams } from 'react-router-dom'
// Go for http://localhost:5173/products/101
function Product() {
  const {id} =useParams();
  return (
    <div>
     All Product
    </div>
  )
}

export default Product
