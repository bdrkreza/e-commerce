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
  if (loading) {
    return <h3 className=" card-panel cyan-text">category are loading...</h3>;
  }
  if (error) {
    return <h3 className=" card-panel red-text">{error.message}</h3>;
  }
  return (
    <div className="container category_contain">
      {data?.categories.map((category) => {
        return (
         <>
            <div className=" abs">
            <NavLink
              to={`/category/${category._id}`}
            >
              <div class="card">
                <div class="card-image waves-effect waves-block waves-light">
                  <img class="activator" src={category.image} />
                </div>
                <div class="card-content">
                  <span class="card-title activator grey-text text-darken-4">
                  {category.category}<i class="material-icons right">more_vert</i>
                  </span>
                </div>
              </div>
            </NavLink>
          </div>
         </>
        );
      })}
      </div>

  );
};
