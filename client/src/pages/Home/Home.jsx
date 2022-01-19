import React from "react";
import Announcement from "../../Components/Annoucement/Announcement";
import Navbar from "../../Components/Navbar/Navbar";
import Slider from "../../Components/Slider/Slider";
import Footer from "../../Components/Footer/Footer";
import NewsLetter from "../../Components/NewsLetter/NewsLetter";
import PopularProducts from "../PopularProducts/PopularProducts";
import Categories from "../Categories/Categories";
// import "./home.css";
const Home = () => {
  return (
    <>
      <Announcement />
      <Navbar />
      <Slider />
      <Categories />
      <NewsLetter />
      <Footer />
    </>
  );
};

export default Home;
