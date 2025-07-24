import React, { useState } from "react";
import Product from "./Product";
import {product,more} from './Products.module.css'
const Products = ({ products }) => {
  const [showMore,setShowMore]= useState(false)
  return (
    <div className={`container ${product}`}>
      {products.slice(0,showMore?7:5).map((product, idx) => {
        return (
          <Product product={product} key={idx}></Product>
        );
      })}
      <div className={more} onClick={()=>{
        setShowMore(!showMore)
      }}>
        <i className="fa-solid fa-utensils" style={{fontSize:'32px',color:"#264653"}}></i>
        {!showMore?"show more":"show less"}
      </div>
    </div>
  );
};

export default Products;
