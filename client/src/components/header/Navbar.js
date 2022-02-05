import React, { useEffect, useState } from "react";
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
  const jwt = localStorage.getItem("token");
  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };


  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    window.onscroll = function() {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
  }, []);


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
      <nav className={scrolled ? "nav" : "active"}>
        <div className="nav-wrapper container" >
          <a href="#!" className="brand-logo">
            <i className="material-icons">cloud</i>Logo
          </a>

          <ul className="right hide-on-med-and-down">
            <li>
              <NavLink to="/" className="badge">
                <h5>home</h5>
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className="badge">
                <h5>about</h5>
              </NavLink>
            </li>
            <li>
              <li>
                <NavLink to="/cart" id="cart">
                  <i className="material-icons">add_shopping_cart</i>
                  <span class="badge #fce4ec pink lighten-5 black-text">
                    {items.length}
                  </span>
                </NavLink>
              </li>
            </li>

            {jwt ? (
              <>
                <li>
                  <NavLink
                    class="dropdown-trigger"
                    to="/profile"
                    data-target="dropdown1"
                  >
                    Profile
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/login">
                    <i className="material-icons" onClick={logout}>
                      logout
                    </i>
                  </NavLink>
                </li>
              </>
            ) : (
              <li>
             <li>
              <NavLink to="/login" className="badge">
                <h5>login</h5>
              </NavLink>
            </li>
              </li>
            )}
            <li>
              <a href="mobile.html">
                <i className="material-icons">more_vert</i>
              </a>
            </li>
            <li>
              <a href="sass.html">
                <i className="material-icons">search</i>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};
