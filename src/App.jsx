import { useEffect, useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes, Outlet } from 'react-router-dom'
import { Navbar } from './Components/Navbar'
import Footer from './Components/Footer';
import { Products } from './Components/Products';
import toast, { Toaster } from 'react-hot-toast';
import ProductDetails from './Components/ProductDetails';
import { Cart } from './Components/Mycart';


function App() {

  const [showproduct, setShowProduct] = useState([])
  const [addcart, setaddcart] = useState([]);
  const [showitem, setshowItem] = useState([]);
  const [subTotal, setSubTotal] = useState(0)

 
  // add cart
  const addToCart = (data) => { 
    setaddcart([...addcart, data])
  };

  // inc and dec function
  const handleAmount = (item, value) => {

    const updatedAmount = addcart.map((item1) => {
      if(item1.id === item.id){
        item1.qty += value

        if(item1.qty < 1){
          item1.qty = 1;
        }
        else if(item1.qty > 5){
          item1.qty = 5;
        }
      }
      return item1;
    })
    setaddcart([...updatedAmount]);
  } 


  useEffect(()=> {
    handleSubTotal();
  })
  // SubTotal amount
  const handleSubTotal = () => {
    let sum = 0;
    addcart.forEach(element => {
      sum += element.qty * element.price
      setSubTotal(sum)
    })
  }

   // Calculate Total Amount
   const TotalAmount = (i) => {
    let amount = i.price * i.qty;
    return amount;
  };

  // delete item
  const handledelete = (index) => {
    const letestProduct = [...addcart]
    letestProduct.splice(index, 1);
    setaddcart(letestProduct);
  }

  const ProductShow = (product) => {
    console.log([{...product}])
    setShowProduct([{ ...product }])
  };

    // show card items
    const handleCart = (prd) => {
      if (showitem.includes(prd.id)) {
        toast.error(`This product is already added to cart`);
      } else {
        setaddcart([...addcart, prd]); // Append the new product to the existing array
        setshowItem([...showitem, prd.id]);
      toast.success("product added to cart")
      }
    };

  return (
    <>
      <BrowserRouter>
      <>
        <Navbar count={addcart.length} brandname="Ecommerce Cart" />
        <Outlet/>
        <Routes>
          <Route path="/" element={<Products addcart={addToCart} ProductShow={ProductShow} handleCart={handleCart} />} />
          <Route path="/cart" element={<Cart addcart={addcart} count={addcart.length} handledelete={handledelete} subTotal={subTotal} handleamount={handleAmount} TotalAmount={TotalAmount}/>}/>
          <Route path="/product/:id/:name" element={<ProductDetails showproduct={showproduct}/>} />
        </Routes>
        <Footer/>
        <Toaster/>
      </>
    </BrowserRouter>
    </>
  )
}

export default App
