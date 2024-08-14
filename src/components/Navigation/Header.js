import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import "./Header.css";
import { useSelector } from "react-redux";

const Header = () => {
  const cartProductsLength = useSelector((state) => state.cartProducts.length);
  return (
    <header className="header">
      <div>
        <NavLink to="/" className="navbar-brand">
          Pizza Hub
        </NavLink>
        <ul>
          <li>
            <NavLink
              className={({ isActive }) =>
                "nav-link" + (isActive ? " nav-link-active" : "")
              }
              to="/"
            >
              Menu
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                "nav-link" + (isActive ? " nav-link-active" : "")
              }
              to="/recipes"
            >
              Recipes
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                "nav-link" + (isActive ? " nav-link-active" : "")
              }
              to="/wishlist"
            >
              Wishlist
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                "nav-link" + (isActive ? " nav-link-active" : "")
              }
              to="/cart"
            >
              <div className="cart-link">
                <span>{cartProductsLength}</span>
                <FontAwesomeIcon icon={faCartShopping} />
              </div>
            </NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
