import React from 'react';
import '../brand.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { FiClock } from 'react-icons/fi';

function Brand() {
  const brands = [
    "./images/google.png",
    "./images/JBL-Logo.png",
    "./images/hewlett-packard-logo-black-and-white.png",
    "./images/samsung-black-and-white-logo.png",
    "./images/Apple-Logo-black.png",
    "./images/tecno_logo_white_bw.png",  
];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    // ... other settings you'd like
  };

  return (
    <div className='brand'>
      {/* Top Section */}
      <div className="top-section">
        <div className="item">
        <p>
        <FiClock className='icon' /> <br />
          Fast and prompt delivery</p>
        </div>
        <div className="item">
        <p>
        <FiClock className='icon' /> <br />
          Fast and prompt delivery</p>

        </div>
        <div className="item">
        <p>
        <FiClock className='icon' /> <br />
          Fast and prompt delivery</p>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bottom-section">
        <Slider {...settings}>
          {brands.map((brand, index) => (
            <div key={index}>
              <img src={brand} alt={`brand-${index}`} className="brand-image" />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Brand;
