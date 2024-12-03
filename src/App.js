import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, {useState} from 'react'
import ProductForm from './component/ProductForm/ProductForm';
import ProductList from './component/ProductList/ProductList';
import HomePage from './pages/HomePage/HomePage'
import ContactUsPage from './pages/ContactUsPage/ContactUsPage'
import AboutUsPage from './pages/AboutUsPage/AboutUsPage';


function App() {
  
  let IntialProduct= [
    {productName:"Shampoo", productPrice:12},
    {productName:"toys", productPrice:20},
    {productName:"food", productPrice:11}
  ]
  const [products, setProducts] = useState(IntialProduct)

  return (
    <>
       <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contactus" element={<ContactUsPage />} />
          <Route path="/haha" element={<AboutUsPage />} />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
