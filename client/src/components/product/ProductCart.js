import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "react-use-cart";
/**
 * @author
 * @function ProductCard
 **/

export const ProductCard = ({ data }) => {
  const { name, title, price, image, _id } = data;
  const { addItem } = useCart();
  const addToCart = () => {
    addItem({
      id: _id,
      name,
      title,
      price,
      img: image,
    });
  };

  return (
    <>
      <div className="card card-body card_body">
        <div className="card-image">
          <Link to={`/product/${_id}`}>
            <img src={image} alt="img" />
          </Link>
          <button
            onClick={addToCart}
            className="btn-floating halfway-fab waves-effect waves-light red"
          >
            <i className="material-icons">add</i>
          </button>
        </div>
        <Link to={`/product/${_id}`}>
          <div className="card_title">
            <h4>{name}</h4>
            <h5 className="truncate">{title}</h5>
          </div>
        </Link>
        <div>
          <button className="btn-large">${price}</button>
        </div>
      </div>
    </>
  );
};
