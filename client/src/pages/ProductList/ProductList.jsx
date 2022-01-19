import React, { useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Announcement from "../../Components/Annoucement/Announcement";
import PopularProducts from "../../pages/PopularProducts/PopularProducts";
import "./productList.scss";
import { useLocation } from "react-router-dom";

const ProductList = () => {
  const location = useLocation();
  const cat = location.pathname.split("/")[2];

  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState("newest");
  const handleFilters = (e) => {
    e.preventDefault();
    const value = e.target.value;
    setFilters({
      ...filters,
      [e.target.name]: value,
    });
  };

  console.log(filters);

  return (
    <div className="productListContainer">
      <Navbar />
      <Announcement />
      <div className="filterContainer">
        <span className="productType">{cat}</span>
        <div className="fiterType">
          <div className="filterProducts">
            <p>Filter Products:</p>
            <select
              name="color"
              className="colorSelect"
              onChange={handleFilters}
            >
              <option disabled>Colour</option>
              <option>Red</option>
              <option>Blue</option>
              <option>Yellow</option>
              <option>Silver</option>
            </select>
            <select name="size" className="sizeSelect" onChange={handleFilters}>
              <option disabled>Size</option>
              <option>S</option>
              <option>XS</option>
              <option>M</option>
              <option>L</option>
              <option>XL</option>
            </select>
          </div>
          <div className="sortProducts">
            <p>Sort Products:</p>
            <select name="" id="" onChange={(e) => setSort(e.target.value)}>
              <option value="newest">Newest</option>
              <option value="asc">Price(asc)</option>
              <option value="des">Price(des)</option>
            </select>
          </div>
        </div>
      </div>
      <PopularProducts cat={cat} sort={sort} filters={filters} />
    </div>
  );
};

export default ProductList;
