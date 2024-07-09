import React from 'react'

export default function Products({price,model,name}) {
  return (
    <div>
      <p>Name: {name}</p>
      <p>Price :${price}</p>
      <p>model :{model}</p>
      <p>color : black</p>
    
    </div>
  )
}
