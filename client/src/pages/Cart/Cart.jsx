import React from "react";
import "./cart.scss";
import Navbar from "../../Components/Navbar/Navbar";
import Announcement from "../../Components/Annoucement/Announcement";
import Footer from "../../Components/Footer/Footer";
import { useSelector } from "react-redux";
import StripeCheckout from "react-stripe-checkout";
import { useState, useEffect } from "react";
import { userRequest } from "../../requestMethods";
import { useNavigate } from "react-router-dom";

const KEY = process.env.REACT_APP_STRIPE;

const Cart = () => {
  const [stripeToken, setStripeToken] = useState(null);
  const cart = useSelector((state) => state.cart);
  const history = useNavigate();

  const onToken = (token) => {
    setStripeToken(token);
  };

  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await userRequest.post("/checkout/payment", {
          tokenId: stripeToken.id,
          amount: cart.total * 100,
        });
        history.push("/success");
      } catch (error) {}
    };
    stripeToken && makeRequest();
  }, [stripeToken, cart.total]);

  console.log(cart.products);
  return (
    <div className="cart">
      <Navbar />
      <Announcement />
      <div className="cartContainer">
        <div className="cartTop">
          <button className="continueBtn">CONTINUE</button>
          <div className="middleLinks">YOUR BAG</div>

          <button className="checkoutBtn">CHECKOUT</button>
        </div>
        <div className="cartBottom">
          <div className="cartItems">
            {cart.products.map((product) => {
              return (
                <div className="cartItem" key={product._id}>
                  <div className="productImg">
                    <img src={product.img} alt="" className="cartImg" />
                  </div>
                  <div className="productDetailsContainer">
                    <div className="productDetails">
                      <div className="productName">
                        <strong>Product: </strong>
                        {product.title}
                      </div>
                      <p className="productId">
                        <strong>ID: </strong>
                        {product._id}
                      </p>
                      <div
                        className="productColor"
                        style={{ backgroundColor: `${product.color}` }}
                      ></div>
                      <p>
                        <strong>Size: </strong>
                        {product.size}
                      </p>
                    </div>
                    <div className="productAmount">
                      <div className="addProduct">
                        <div className="remove">-</div>
                        <div className="mid">{product.quantity}</div>
                        <div className="add">+</div>
                      </div>
                      <div className="productPrice">
                        $ {product.price * product.quantity}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="cartInfo">
            <h1 className="title">ORDER SUMMARY</h1>
            <div className="orderInfo">
              Subtotal
              <span className="cost">${cart.total}</span>
            </div>
            <div className="orderInfo">
              Shipping Fee
              <span className="cost">$7</span>
            </div>
            <div className="orderInfo">
              Shipping Discount
              <span className="cost">-$7</span>
            </div>
            <div className="orderInfo total">
              Total
              <span className="cost">${cart.total}</span>
            </div>
            <StripeCheckout
              name="LAMA SHOP"
              billingAddress
              shippingAddress
              description={`Your total is $${cart.total}`}
              amount={cart.total * 100}
              token={onToken}
              stripeKey={KEY}
            >
              <button className="cartInfoBtn">CHECKOUT</button>
            </StripeCheckout>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
