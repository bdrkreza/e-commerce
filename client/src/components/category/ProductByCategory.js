import { useQuery } from "@apollo/client";
import React from "react";
import { Link, useParams } from "react-router-dom";
import { GET_PRODUCT_BY_CATEGORY } from "../../gqlOperation/Query";
import { BACKEND_URL } from "../../helpers/helpers";

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

  return (
    <div className="container">
      {data?.category.data.attributes.products.data.map(
        ({ id, attributes }) => {
          const { name, image, description, price } = attributes;
          return (
            <div>
              <Link to={`/product/${id}`}>
                <div className="card card-body">
                  <div className="card-image">
                    <img
                      src={`${BACKEND_URL + image.data[0].attributes.url}`}
                    />
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
            </div>
          );
        }
      )}
    </div>
  );
};
