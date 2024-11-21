import React, { useState } from 'react'

export default function Product() {
   // Definnig State
   const [productName, setProductName] = useState ("Shampoo")
 
  // Handling arrow function 
  let handleClick = () => {
   console.log ("Hi")
   setProductName("New Toy")
  }  



  return (
    <>
      <div>This is {productName}</div>
      <button type="button" onClick={handleClick} >Change Product</button>
    </>
    
    
  )
}
