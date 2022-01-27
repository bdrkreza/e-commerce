import React from "react";

/**
 * @author
 * @function Pagination
 **/

export const Pagination = ({ pageCount, updatePage }) => {
  return (
    <div className="container">
      <div className="page center-align">
        {[...Array(pageCount).keys()].map((value) => {
          return (
            <button
              onClick={() => updatePage(value + 1)}
              key={value}
              className="btn chip"
            >
              {value + 1}
            </button>
          );
        })}
      </div>
    </div>
  );
};
