import React from 'react'
import './ProductList.css'

export default function ProductList2({products}) {

 
  return (
   <table>
   {
    products.map ((product,idx)=>(
       <tr key={idx} className="blue">
        <td>{product.productName}</td>
        <td>{product.productPrice}</td>
      </tr>
    ))
   } 
   </table>
  )
}
