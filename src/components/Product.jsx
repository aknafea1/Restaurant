import React, { useState } from "react";
import Button from "./Button";
import Toast from "./Toast";
import {card ,title,starsContainer,priceText} from "./Product.module.css"
const Product = ({ product: { name, image, category, stars,price } }) => {
  const [toast, setToast] = useState(false);
  const toastHandler = () => {
    setToast(true);
    setTimeout(() => setToast(false), 3000);
  };

  return (
    <div className={card}>
      {toast && <Toast>added to cart</Toast>}
      <div className={title}>
        <i className="fa-solid fa-bowl-food"></i>
      <h2>{name}</h2>
      </div>
      <img src={image} alt={name} />
      <h3>{category}</h3>
      <div className={starsContainer}>
        {new Array(parseInt(stars)).fill(0).map((_, idx) => (
          <i className="fa-solid fa-star" key={idx}></i>
        ))}
        {parseFloat(stars) - parseInt(stars)> 0.5?<i className="fa-solid fa-star-half"></i>:''}
      </div>
      <p className={priceText}>{price}$</p>
      <Button onClick={toastHandler} style={{margin:"auto"}}>Add To Cart</Button>
    </div>
  );
};

export default Product;
