import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useCart } from "react-use-cart";
import "./Navbar.css";
/**
 * @author
 * @function Navbar
 **/

export const Navbar = (props) => {
  const { items } = useCart();
  const navigate = useNavigate();
  const jwt = localStorage.getItem("jwt");
  const logout = () => {
    localStorage.removeItem("jwt");
    navigate("/login");
  };
  return (
    <>
      <ul id="dropdown1" class="dropdown-content">
        <li>
          <a href="#!">one</a>
        </li>
        <li>
          <a href="#!">two</a>
        </li>
        <li class="divider"></li>
        <li>
          <a href="#!">three</a>
        </li>
      </ul>
      <nav>
        <div className="nav-wrapper container">
          <a href="#!" className="brand-logo">
            <i className="material-icons">cloud</i>Logo
          </a>

          <ul className="right hide-on-med-and-down">
            <li>
              <a href="sass.html">
                <i className="material-icons">search</i>
              </a>
            </li>
            <li>
              <a href="badges.html">
                <i className="material-icons">view_module</i>
              </a>
            </li>
            <li>
            <li>
              <NavLink to="/cart" id="cart">
                <i className="material-icons">add_shopping_cart</i>
                <span class="badge #fce4ec pink lighten-5 black-text">{items.length}</span>
              </NavLink>
            </li>
            </li>
            <li>
              <a href="collapsible.html">
                <i className="material-icons">refresh</i>
              </a>
            </li>
            {jwt ? (
              <li>
                <NavLink to="/login">
                  <i className="material-icons" onClick={logout}>
                    logout
                  </i>
                </NavLink>
              </li>
            ) : (
              <li>
                <NavLink to="/login">login</NavLink>
              </li>
            )}
            <li>
              <a href="mobile.html">
                <i className="material-icons">more_vert</i>
              </a>
            </li>
          </ul>
          <ul class="right hide-on-med-and-down">
            <li>
              <NavLink to="/">home</NavLink>
            </li>

            <li>
              <a class="dropdown-trigger" href="#!" data-target="dropdown1">
                Profile
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};
