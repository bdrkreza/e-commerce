import { useQuery } from "@apollo/client";
import React from "react";
import { NavLink } from "react-router-dom";
import { GET_ALL_CATEGORY } from "../../gqlOperation/Query";
import "./category.css";
/**
 * @author
 * @function Categories
 **/

export const Categories = (props) => {
  const { loading, error, data } = useQuery(GET_ALL_CATEGORY);
  const category = data?.categories.data;
  if (loading) {
    return <h3 className=" card-panel cyan-text">category are loading...</h3>;
  }
  if (error) {
    return <h3 className=" card-panel red-text">{error.message}</h3>;
  }
  return (
    <div className=" container category_contain">
      {category.map(({ id, attributes }) => {
        return (
          <div className="container ">
            <NavLink to={`/category/${id}`} className="btn black-text">
              {attributes.name}
            </NavLink>
          </div>
        );
      })}
    </div>
  );
};
