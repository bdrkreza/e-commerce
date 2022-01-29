import { useQuery } from "@apollo/client";
import React from "react";
import { Link, useParams } from "react-router-dom";
import { GET_PRODUCT_BY_CATEGORY } from "../../gqlOperation/Query";

/**
 * @author
 * @function ProductByCategory
 **/

export const ProductByCategory = (props) => {
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
        const { name, image, description, price, _id } = category;
        return (
          <div>
            <Link to={`/product/${_id}`}>
              <div className="card card-body">
                <div className="card-image">
                  <img src={image} alt="img" />
                  <button className="btn-floating halfway-fab waves-effect waves-light red">
                    <i className="material-icons">add</i>
                  </button>
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
          </div>
        );
      })}
    </div>
  );
};
