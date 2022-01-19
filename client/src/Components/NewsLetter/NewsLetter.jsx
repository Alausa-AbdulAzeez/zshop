import React from "react";
import "./newsLetter.scss";
import { Send } from "@material-ui/icons";

const NewsLetter = () => {
  return (
    <div className="newsLetterContainer">
      <h1 className="newsLetterHeading">Newsletter</h1>
      <span className="newsLetterSubHeading">
        Get timely updates from your favorite products
      </span>
      <div className="newsLetterInput">
        <input type="email" placeholder="Email" className="emailInput" />
        <span className="inputIcon">
          <Send />
        </span>
      </div>
    </div>
  );
};

export default NewsLetter;
