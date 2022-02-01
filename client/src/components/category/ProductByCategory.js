import { useQuery } from "@apollo/client";
import React from "react";
import { useParams } from "react-router-dom";
import { GET_PRODUCT_BY_CATEGORY } from "../../gqlOperation/Query";
import { ProductCard } from "../product/ProductCart";
/**
 * @author
 * @function ProductByCategory
 **/

export const ProductByCategory = () => {
  const { categoryId } = useParams();
  const { loading, error, data } = useQuery(GET_PRODUCT_BY_CATEGORY, {
    variables: {
      categoryId: categoryId,
    },
  });

  if (loading) {
    return <h3 className=" card-panel cyan-text center-align">category are loading...</h3>;
  }
  if (error) {
    return <h3 className=" card-panel red-text">{error.message}</h3>;
  }
  return (
    <div className="container card_container">
      {data?.category.products.map((category) => {
        return (
          <div>
            <ProductCard data={category}/>
          </div>
        );
      })}
    </div>
  );
};
