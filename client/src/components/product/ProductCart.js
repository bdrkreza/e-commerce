import React from "react";
import { Link } from "react-router-dom";

/**
 * @author
 * @function ProductCard
 **/

export const ProductCard = ({ data }) => {
  const { description, name, price, image, _id } = data;
  return (
    <Link to={`/product/${_id}`}>
      <div className="card card-body">
        <div className="card-image">
          <img src={image} />
          <a className="btn-floating halfway-fab waves-effect waves-light red">
            <i className="material-icons">add</i>
          </a>
        </div>
        <div className="card-content">
          <h4 className="truncate">{name}</h4>
          <p className="truncate"> {description}</p>
        </div>
        <div>
          <h2>{price}</h2>
        </div>
      </div>
    </Link>
  );
};
