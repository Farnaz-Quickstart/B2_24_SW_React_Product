import React, {useState} from 'react'

export default function ProductForm({products,setProducts}) {
 
  const [newProductName, setNewProductName] = useState ("Book")
  const [newProductPrice, setNewProductPrice] = useState ("25")

  let handleADD = () => {

    console.log ("Handle ADD")
    let NewProduct = {
      productName:newProductName,
      productPrice:newProductPrice
    }
    console.log (NewProduct)
    // e.preventDefault()

    setProducts([...products,NewProduct])
    
  }


  return (
    <form>
      <label>Product Name: 
        <input type="text" name="productName" id="productName" value={newProductName} onChange={(e)=>setNewProductName(e.target.value)} ></input>
      </label>
      <label>Product Price: 
        <input type="text" name="productPrice" id="productPrice" value={newProductPrice} onChange={(e)=>setNewProductPrice(e.target.value)} ></input>
      </label>
      <button type="button" onClick={handleADD}>Add Product</button>
    </form>
  )
}
