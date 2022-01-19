import React, { useEffect, useState } from "react";
import Announcement from "../../Components/Annoucement/Announcement";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import NewsLetter from "../../Components/NewsLetter/NewsLetter";
import "./singleProduct.scss";
import { publicRequest } from "../../requestMethods";
import { useLocation } from "react-router-dom";
import { addProduct } from "../../redux/cartRedux";
import { useDispatch } from "react-redux";

const SingleProduct = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await publicRequest.get(`/products/find/${id}`);
        setProduct(res.data);
      } catch (error) {}
    };
    getProduct();
  }, [id]);

  const handleAmount = (type) => {
    if (type === "add") {
      setQuantity(quantity + 1);
    }
    if (type === "remove") {
      quantity > 1 && setQuantity(quantity - 1);
    }
  };

  const handleClick = () => {
    dispatch(addProduct({ ...product, color, size, quantity }));
  };

  return (
    <>
      {product && (
        <div>
          <Navbar />
          <Announcement />
          <div className="singleProductContainer">
            <div className="productImgWrapper">
              <img
                // src="https://i.ibb.co/S6qMxwr/jean.jpg"
                src={product.img}
                alt=""
                className="productImg"
              />
            </div>
            <div className="productInfo">
              <div className="productDetails">
                <h1>{product.title}</h1>
                <p>{product.desc}</p>
                <span>$ {product.price}</span>
              </div>
              <div className="productSpecs">
                <div className="color">
                  <p>Color</p>
                  {product.color?.map((c) => (
                    <div
                      style={{ backgroundColor: c }}
                      key={c}
                      onClick={() => setColor(c)}
                    ></div>
                  ))}
                </div>
                <div className="size">
                  <p>Size</p>
                  <select>
                    {product.size?.map((s) => (
                      <option key={s} onChange={(e) => setSize(e.target.value)}>
                        {s}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="productAmount">
                <div className="addProduct">
                  <div
                    className="remove"
                    onClick={() => handleAmount("remove")}
                  >
                    -
                  </div>
                  <div className="mid">{quantity}</div>
                  <div className="add" onClick={() => handleAmount("add")}>
                    +
                  </div>
                </div>
                <button className="cartBtn" onClick={handleClick}>
                  ADD TO CART
                </button>
              </div>
            </div>
          </div>
          <NewsLetter />
          <Footer />
        </div>
      )}
    </>
  );
};

export default SingleProduct;
