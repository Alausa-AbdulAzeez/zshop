import React from "react";
import { Link } from "react-router-dom";
import { categories } from "../../data";
import "./categories.scss";

const Categories = () => {
  return (
    <div className="categoriesContainer">
      {categories.map((category) => {
        const { id, img, title, cat } = category;
        return (
          <div className="category" key={id}>
            <Link to={`/products/${cat}`}>
              <img src={img} alt="" className="categoryImg" />
              <div className="categoryDescPos">
                <span className="categoryTitle">{title}</span>
                <button className="categoryBtn">SHOP NOW</button>
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Categories;
