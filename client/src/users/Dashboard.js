import { useQuery } from "@apollo/client";
import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { GET_USER } from "../gqlOperation/Query";
import "./dashboard.css";

/**
 * @author
 * @function Dashboard
 **/

export const Dashboard = (props) => {
  const { loading, error, data } = useQuery(GET_USER);
  console.log(data);

  let activeStyle = {
    color: "red",
  };

  let activeClassName = "cyan";
  return (
    <div class="row">
      <div class="col s3">
        <div class="card sidebar" id="slide-out">
          {data?.getUser.image ? (
            <img src={data?.getUser.image} alt="John" />
          ) : (
            <img src="http://placehold.it/300x176/303F9F" alt="" />
          )}
          <h1>{data?.getUser.username}</h1>
          <div>
            <ul>
              <li>
                <NavLink
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                  to="account"
                >
                  profile
                </NavLink>
              </li>
            </ul>
            <ul class="hide-on-med-and-down">
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? activeClassName : undefined
                  }
                  to="order"
                >
                  Order
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? activeClassName : undefined
                  }
                  to="payment"
                >
                  payment
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? activeClassName : undefined
                  }
                  to="wishlist"
                >
                  wishlist
                </NavLink>
              </li>
            </ul>
          </div>
          <p>
            <button>Contact</button>
          </p>
        </div>
      </div>
      <div class="col s9">
        <Outlet />
      </div>
    </div>
  );
};
