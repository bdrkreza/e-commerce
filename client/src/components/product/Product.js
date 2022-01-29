import React from "react";
import { ProductCard } from "./ProductCart";

/**
 * @author
 * @function Product
 **/

export const Product = ({ data }) => {
  return (
    <div>
      <div className="container card_container">
        {data.map((data) => (
          <ProductCard data={data} />
        ))}
      </div>
    </div>
  );
};
