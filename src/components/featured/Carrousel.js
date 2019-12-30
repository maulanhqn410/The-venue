import React from 'react'
import Slider from "react-slick";
import slide_one from "../../resources/images/slide_one.jpg";
import slide_two from "../../resources/images/slide_two.jpg";
import slide_three from "../../resources/images/slide_three.jpg";

export default function Carrousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true
  };
  return (
    <div
        className="carrousel_wapper"
        style={{ height: `${window.innerHeight}px`, overflow: "hidden" }}
      >
        <Slider {...settings}>
          <div>
            <div className="carrousel_image" style={{backgroundImage:`url(${slide_one})`, height: `${window.innerHeight}px`}}></div>
          </div>
          <div>
            <div className="carrousel_image" style={{backgroundImage:`url(${slide_two})`, height: `${window.innerHeight}px`}}></div>
          </div>
          <div>
            <div className="carrousel_image" style={{backgroundImage:`url(${slide_three})`, height: `${window.innerHeight}px`}}></div>
          </div>
        </Slider>
      </div>
  )
}
