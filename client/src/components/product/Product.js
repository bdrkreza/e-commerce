import React from "react";
import { ProductCard } from "./ProductCart";

/**
 * @author
 * @function Product
 **/

export const Product = ({ data }) => {

  return (
    <div>
      <div className="card_container">
        {data.map(({ id, attributes }) => (
          <ProductCard
            data={attributes}
            Id={id}
            image={attributes.image.data[0].attributes.url}
          />
        ))}
      </div>
      
    </div>
  );
};
