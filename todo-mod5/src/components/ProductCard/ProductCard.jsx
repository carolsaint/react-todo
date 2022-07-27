import React from "react";
import style from "./ProductCard.module.css";
import Button from "../Button/Button";

function ProductCard({ dados }) {
  const { id, name, image, description, oldPrice, price } = dados;
  return (
    <div className={style.card}>
      <img src={image} alt="" />
      <div>
        <h3>{name}</h3>
        <p className={style.description}>{description}</p>
        <small>
          DE: <span>R${oldPrice}</span>
        </small>
        <p className={style.price}>
          Por: <span>R${price}</span>
        </p>
        <Button className={style.Button} text="Comprar"/>
        
      </div>
    </div>
  )
};

export default ProductCard;