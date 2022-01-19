import React, { useRef, useState } from "react";
import "./slider.scss";
import { ArrowRightOutlined, ArrowLeftOutlined } from "@material-ui/icons";
import { sliderItems } from "../../data";

const Slider = () => {
  const arrowRef = useRef();
  let [currentSlide, setCurrentSlide] = useState(0);
  const handleLeftClick = () => {
    if (currentSlide < 2) {
      currentSlide++;
      arrowRef.current.style.transform = `translateX(calc(${currentSlide} * -100vw))`;
      setCurrentSlide(currentSlide);
    }
  };
  const handleRightClick = () => {
    if (currentSlide > 0) {
      currentSlide--;
      arrowRef.current.style.transform = `translateX(calc(${currentSlide} * -100vw))`;
      // arrowRef.current.style.transform = `translateX(-200vw)`;
      setCurrentSlide(currentSlide);
    }
  };

  return (
    <div className="sliderContainer">
      <div className="arrowLeft">
        <span>
          <ArrowLeftOutlined onClick={handleLeftClick} />
        </span>
      </div>
      <div className="arrowRight">
        <span>
          <ArrowRightOutlined onClick={handleRightClick} />
        </span>
      </div>
      <div className="mainContent" ref={arrowRef}>
        {sliderItems.map((sliderItem) => {
          const { id, img, desc, title } = sliderItem;
          return (
            <div className="subContent" key={id}>
              <div className="imgContainer">
                <img src={img} alt="" className="sliderImg" />
              </div>
              <div className="descContainer">
                <h1 className="title">{title}</h1>
                <div className="titleDesc">{desc}</div>
                <div className="titleBtn">SHOP NOW</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Slider;
