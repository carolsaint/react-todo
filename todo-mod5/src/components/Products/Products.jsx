import { React, useEffect, useState } from "react";
import ProductCard from "../ProductCard/ProductCard";
import style from "./Products.module.css";
import Button from "../Button/Button";

const Products = () => {
  const [requisition, setRequisition] = useState([]);
  const [page, setPage] = useState(1);

  async function handleRequisition() {
    const response = await fetch(
      `https://frontend-intern-challenge-api.iurykrieger.vercel.app/products?page=${page}`
    );
    const json = await response.json();
    const resposta = json.products;
    setRequisition([...requisition, ...resposta]);
    // [oito itens, novos 8 itens]
    setPage(page + 1);
  }

  useEffect(() => {
    handleRequisition();
  }, []);

  return (
    <div className={style.content}>
      <div className={style.produtos}>
        {!!requisition &&
          requisition.map((produto) => {
            return <ProductCard dados={produto} key={produto.id} />;
          })}
      </div>

      <Button onClick={() => handleRequisition()} text='Ainda mais produtos aqui!'/>
    </div>
  );
};

export default Products;