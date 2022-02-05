import React from "react";
import { NavLink } from "react-router-dom";
import "./404.css";
/**
 * @author
 * @function NotFound
 **/

export const NotFound = (props) => {
  return (
    <div className="body notFoundPage">
      <div class="bubble"></div>
      <div class="bubble"></div>
      <div class="bubble"></div>
      <div class="bubble"></div>
      <div class="bubble"></div>
      <div class="main">
        <div>
          <h1>404</h1>
          <p>
            It looks like you're lost...
            <br />
            That's a trouble?
          </p>
          <NavLink to="/" className="btn button large">Go back</NavLink>
        </div>
      </div>
    </div>
  );
};
