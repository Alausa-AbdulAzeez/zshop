import React, { useEffect, useState } from "react";
import "./popularProducts.scss";
import { popularProducts } from "../../data";
import Product from "../../Components/Product/Product";
import axios from "axios";

const PopularProducts = ({ cat, sort, filters }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          cat
            ? `http://localhost:5000/api/products?category=${cat}`
            : "http://localhost:5000/api/products"
        );
        setProducts(res.data);
      } catch (error) {}
    };
    getProducts();
  }, [cat]);

  useEffect(() => {
    cat &&
      setFilteredProducts(
        products.filter((item) =>
          Object.entries(filters).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
  }, [products, cat, filters]);

  useEffect(() => {
    if (sort === "newest") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      );
    } else if (sort === "asc") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.price - b.price)
      );
    } else {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => b.price - a.price)
      );
    }
  }, [sort]);
  console.log(products);
  return (
    <div className="popularProductsContainer">
      {cat
        ? filteredProducts.map((item) => {
            return <Product item={item} key={item._id} />;
          })
        : products.map((item) => {
            return <Product item={item} key={item._id} />;
          })}
    </div>
  );
};

export default PopularProducts;
