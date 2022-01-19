import {
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  Pinterest,
  Room,
  Twitter,
} from "@material-ui/icons";
import React from "react";
import "./footer.scss";

const Footer = () => {
  return (
    <div className="footerContainer">
      <div className="footerLeft">
        <div className="footerLeftHeader">LAMA.</div>
        <div className="footerLeftInfo">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt sit,
          animi unde in facilis illo, ducimus ut velit, odio neque repudiandae
          exercitationem quo! Eius quibusdam voluptas saepe molestiae mollitia
        </div>
        <div className="footerLeftSocials">
          <span className="fb">
            <Facebook />
          </span>
          <span className="ig">
            <Instagram />
          </span>
          <span className="tw">
            <Twitter />
          </span>
          <span className="pt">
            <Pinterest />
          </span>
        </div>
      </div>
      <div className="footerCenter">
        <div className="footerCenterHeading">Useful Links</div>
        <ul className="footerCenterLinks">
          <div className="leftLinks">
            <li>Home</li>
            <li>Men Fashion</li>
            <li>Order Tracking</li>
            <li>Wishlist</li>
            <li>Women Fashion</li>
          </div>
          <div className="rightLinks">
            <li>My Account</li>
            <li>Accessories</li>
            <li>Cart</li>
            <li>LogOut</li>
            <li>Terms</li>
          </div>
        </ul>
      </div>
      <div className="footerRight">
        <div className="footerRightHeadinfo">Contact</div>
        <div className="address">
          <span className="addressIcon">
            <Room />
          </span>
          <span className="addressText">123 Tanke Ilorin, Kwara State.</span>
        </div>
        <div className="contact">
          <span className="contactIcon">
            <Phone />
          </span>
          <span className="contactText">+1 234 567 89</span>
        </div>
        <div className="email">
          <span className="emailIcon">
            <MailOutline />
          </span>
          <span className="emailText">abcd@gmail.com</span>
        </div>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAmKkglzAHcbzAl-lqA_tf5EC_bIK5N47zQw&usqp=CAU"
          alt=""
          className="paymentOptionsImage"
        />
      </div>
    </div>
  );
};

export default Footer;
