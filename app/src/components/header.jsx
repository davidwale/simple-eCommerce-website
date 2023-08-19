import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Header() {
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000
  };

  return (
    <div className="header-container">
      <div className="header-text">
        <p>SAVE UP TO 30% OFF MOBILE PHONES</p>
        <h1>Welcome to Our eCommerce Store</h1>
        <p>Find the best products here.</p>
        <button className='header-btn'>Shop Now</button>
      </div>
      <div className="header-slider">
        <Slider {...sliderSettings}>
          <div>
            <img className='header-img' src="./images/samsun.png" alt="Slider 1" />
          </div>
          <div>
            <img className='header-img' src="./images/iphonee.png" alt="Slider 2" />
          </div>
          <div>
            <img className='header-img' src="./images/watc.png" alt="Slider 3" />
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default Header;
