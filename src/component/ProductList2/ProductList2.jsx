import React from 'react'
import './ProductList2.css'

export default function ProductList2() {

  let productList = [
    {productName:"Shampoo", productPrice:12},
    {productName:"toys", productPrice:20},
    {productName:"food", productPrice:11}
  ]
  return (
   <table>
   {
    productList.map ((product,idx)=>(
       <tr key="1" className="blue">
        <td>{product.productName}</td>
        <td>{product.productPrice}</td>
      </tr>
    ))
   } 
   </table>
  )
}
