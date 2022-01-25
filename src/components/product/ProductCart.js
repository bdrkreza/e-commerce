import React from "react";
import { Link } from "react-router-dom";
import { BACKEND_URL } from "../../helpers/helpers";

/**
 * @author
 * @function ProductCard
 **/

export const ProductCard = ({ data, image,Id }) => {
  const { description, name, price } = data;
  return (
    <Link to={`/product/${Id}`}>
      <div className="card card-body">
        <div className="card-image">
          <img src={`${BACKEND_URL + image}`} />
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
