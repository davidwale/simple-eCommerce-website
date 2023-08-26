import React, { useState, useEffect } from 'react';

function Header() {
    const images = [
        "./images/pods.jpg",
        "./images/bg2.jpg",
        "./images/bg3.jpg"
    ];

    const [currentImageIdx, setCurrentImageIdx] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImageIdx(prevIndex => (prevIndex + 1) % images.length);
        }, 5000); // change image every 3 seconds

        return () => clearInterval(timer); // clear the timer if the component unmounts
    }, [images.length]);

    return (
        <div className="header-container" style={{ backgroundImage: `url(${images[currentImageIdx]})` }}>
            <div className="header-text">
                <p>SAVE UP TO 30% OFF MOBILE PHONES</p>
                <h1>Where Dreams meet Devices:</h1>
                <p>Buy now and be ahead.</p>
                <button className='header-btn'>Buy Now</button>
            </div>
        </div>
    );
}

export default Header;
