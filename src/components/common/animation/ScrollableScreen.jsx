import React, { useState, useEffect } from 'react';
import './ScrollableScreen.css';
import { Link } from 'react-router-dom';

const ScrollableScreen = ({ items }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    const scrollLeft = () => {
        setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : items.length - 1));
    };

    const scrollRight = () => {
        setCurrentIndex((prevIndex) => (prevIndex < items.length - 1 ? prevIndex + 1 : 0));
    };

    useEffect(() => {
        if (!isHovered) {
            const interval = setInterval(() => {
                scrollRight();
            }, 2000); // Auto-scroll every 3 seconds

            return () => clearInterval(interval); // Clean up the interval on component unmount or hover
        }
    }, [isHovered]);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <div className="scrollable-screen" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <button className="scroll-button left" onClick={scrollLeft}>‹</button>
            <div className="scrollable-content" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                {items.map((val, index) => (
                    <div key={index} className="scroll-item">
                        <Link to={val.linkdin} target="_blank">
                            <div className='items shadow'>
                                <div className='box flex'>
                                    <div className='img'>
                                        <img src={val.cover} alt='' />
                                        <i className='fa fa-quote-left icon'></i>
                                    </div>
                                    <div className='name'>
                                        <h2>{val.name},   <span>{val.post}</span> </h2>
                                        <p>{val.desc}</p>
                                    </div>

                                </div>

                            </div>
                        </Link>
                    </div>
                ))}
            </div>
            <button className="scroll-button right" onClick={scrollRight}>›</button>
        </div>
    );
};

export default ScrollableScreen;
