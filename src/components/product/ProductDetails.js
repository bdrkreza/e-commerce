import { useQuery } from "@apollo/client";
import React from "react";
import { useParams } from "react-router-dom";
import { useCart } from "react-use-cart";
import { GET_PRODUCT } from "../../gqlOperation/Query";
import { BACKEND_URL } from "../../helpers/helpers";
import "./product.css";
import { ProductImg } from "./ProductImage";
/**
 * @author
 * @function ProductDetails
 **/

export const ProductDetails = (props) => {
  const { addItem } = useCart();
  const { productId } = useParams();
  const { loading, error, data } = useQuery(GET_PRODUCT, {
    variables: {
      productId: productId,
    },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :{error}}</p>;
  const { name, image, description, price } = data?.product.data.attributes;

  const addToCart = () => {
    addItem({
      id: productId,
      name,
      price,
      img: BACKEND_URL + image.data[0].attributes.url,
    });
  };

  return (
    <div className="card card-container">
      <div className="container">
        <div className="row card">
          <div className="col s6">
            <ProductImg image={image.data} />
          </div>
          <div className="col s6">
            <h4>{name}</h4>
            <h6>{description}</h6>
            <div className="addToCart">
              <h3>${price}</h3>

              <button
                onClick={addToCart}
                className="btn  #d50000 red  pulse actionButtons"
              >
                addToCart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
