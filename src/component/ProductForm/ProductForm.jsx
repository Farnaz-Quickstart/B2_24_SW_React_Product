import React, {useState} from 'react'

export default function ProductForm() {
 
  const [newProductName, setNewProductName] = useState ("Book")
  const [newProductPrice, setNewProductPrice] = useState ("25")

  let handleClick = (e) => {
    e.preventDefault()
    console.log ("hi")
    console.log (newProductName)
    console.log (newProductPrice)
  }


  return (
    <form>
      <label>Product Name: 
        <input type="text" name="productName" id="productName" value={newProductName} onChange={(e)=>setNewProductName(e.target.value)} ></input>
      </label>
      <label>Product Price: 
        <input type="text" name="productPrice" id="productPrice" value={newProductPrice} onChange={(e)=>setNewProductPrice(e.target.value)} ></input>
      </label>
      <button type="button" onClick={handleClick}>Add Product</button>
    </form>
  )
}
