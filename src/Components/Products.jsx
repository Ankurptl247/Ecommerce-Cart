import { useEffect, useState } from "react";
import {Card} from "./Card";

export const Products = ({ addcart, ProductShow , handleCart}) => {

  const [products, setproducts] = useState([])
  useEffect(() =>{
    getdata()
  },[])

  const getdata = async () => {
   await fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(json => setproducts(json))
  }

  return(
    <>
 
     <section className="shop container">
                <h2 className="section-title text-center">Shop Product</h2>
                <div className="shop-content">
                    <div className="shop ">
                        <div className="row  gy-2">
                            {
                              products?.map((item, index) => {
                                item["qty"] = 1
                                return(
                                  <Card key={index} item={item} handleCart={handleCart} addcart={addcart} ProductShow={ProductShow} />
                                )
                              })
                            }
                        </div>
                    </div>
                </div>
            </section>
    </>
  )
}

