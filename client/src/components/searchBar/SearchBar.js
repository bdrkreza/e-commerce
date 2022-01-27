import { useLazyQuery } from "@apollo/client";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { GET_PRODUCT_SEARCH_NAME } from "../../gqlOperation/Query";

/**
 * @author
 * @function SearchBar
 **/

export const SearchBar = (props) => {
  const [nameQuery, setNameQuery] = useState("");
  const [hide, setHide] = useState(true);
  const [getProduct, { loading, error, data }] = useLazyQuery(
    GET_PRODUCT_SEARCH_NAME,
    {
      variables: {
        filters: {
          name: {
            startsWith: nameQuery,
          },
        },
      },
    }
  );

  useEffect(() => {
    if (nameQuery.length !== 0) {
      getProduct();
      setHide(false);
    } else {
      setHide(true);
    }
  }, [nameQuery]);

  const handleChange=(e)=>{
    setTimeout(()=>{
      setNameQuery(e.target.value)  
    },2000)

}
  return (
    <div className="container">
      <div className="input-field">
      <input type="search" onChange={handleChange} required />
        <label className="label-icon" for="search">
          <i className="material-icons">search</i>
        </label>
        <i className="material-icons">close</i>
      </div>
      <div hidden={hide}>
        {data &&
          data.products.data.map(({ id, attributes }) => {
            return (
              <Link key={id} to={`/product/${id}`}>
                <h6>{attributes.name}</h6>
              </Link>
            );
          })}
      </div>
    </div>
  );
};
