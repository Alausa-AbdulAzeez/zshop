import React from "react";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import { Badge } from "@material-ui/core";
import "./navbar.scss";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {
  const quantity = useSelector((state) => state.cart.quantity);
  return (
    <div className="navBarContainer">
      <div className="navBarWrapper">
        <div className="left">
          <span>EN</span>
          <div className="searchContainer">
            <span className="searchIcon"></span>
            <input className="searchInput" type="text" />
            <Search />
          </div>
        </div>
        <div className="center">
          <h1 className="logo">LAMA.</h1>
        </div>
        <div className="right">
          <span className="rightBtns">REGISTER</span>
          <span className="rightBtns signin">SIGN IN</span>
          <Link to={"/cart"} style={{ textDecoration: "inherit" }}>
            <span className="cartIcon">
              <Badge
                badgeContent={quantity}
                color="primary"
                className="rightBtns"
              >
                <ShoppingCartOutlined />
              </Badge>
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
