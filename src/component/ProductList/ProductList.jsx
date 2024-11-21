import React from 'react'

export default function ProductList() {
  let productList = ["Shampoo", "Conditioner", "Toys", "Book"]

  return (
    <>
    <h1>This is Product List</h1>
    <ul>
      {
        productList.map ((item)=>(<li>{item}</li>))
      }
    </ul>
    </>
    
  )
}
