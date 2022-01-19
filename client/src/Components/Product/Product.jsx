import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@material-ui/icons";
import React from "react";
import { Link } from "react-router-dom";
import "./product.scss";

const Product = ({ item }) => {
  return (
    <div className="productContainer">
      <div className="veil"></div>
      <img src={item.img} alt="" className="productImg" />
      <div className="productIcons">
        <span className="icon">
          <ShoppingCartOutlined />
        </span>
        <Link to={`/product/${item._id}`}>
          <span className="icon">
            <SearchOutlined />
          </span>
        </Link>
        <span className="icon">
          <FavoriteBorderOutlined />
        </span>
      </div>
    </div>
  );
};

export default Product;
