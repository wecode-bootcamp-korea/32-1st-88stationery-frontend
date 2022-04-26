import React, { useState, useEffect } from "react";
import "./Carousel.scss";

const Carousel = () => {
  const [curIndex, setCurIndex] = useState(1);
  const [action, setAction] = useState(0.5);

  useEffect(() => {
    const timer = setInterval(() => setCurIndex(curIndex + 1), 4000);
    return () => {
      clearInterval(timer);
    };
  });

  useEffect(() => {
    // setTimeout(() => {
    //   setAction(0);
    // }, 500);
    curIndex === 0 &&
      setTimeout(() => {
        setAction(0);
        setCurIndex(3);
        setTimeout(() => {
          setAction(0.5);
        }, 10);
      }, 500);
    curIndex === 4 &&
      setTimeout(() => {
        setAction(0);
        setCurIndex(1);
        setTimeout(() => {
          setAction(0.5);
        }, 10);
      }, 500);
    return () => {
      // setAction(0.5);
    };
  }, [curIndex]);

  const clickHandler = ({ target }) => {
    setCurIndex(Number(target.innerText));
  };

  const swipeHandler = ({ target }) => {
    setAction(0.5);
    target.className === "prevButton"
      ? setCurIndex(curIndex - 1)
      : setCurIndex(curIndex + 1);
  };

  return (
    <div className="bannerContainer">
      <div
        className="imageWrapper"
        style={{
          transform: `translateX(${curIndex * -100}vw)`,
          transition: `all ${action}s`,
        }}
      >
        <img src="/images/items/3.jpeg" alt="bannerImage" />
        <img src="/images/items/1.jpeg" alt="bannerImage" />
        <img src="/images/items/2.jpeg" alt="bannerImage" />
        <img src="/images/items/3.jpeg" alt="bannerImage" />
        <img src="/images/items/1.jpeg" alt="bannerImage" />
      </div>
      <div className="indexButton" onClick={clickHandler}>
        <span>0</span>
        <span>1</span>
        <span>2</span>
      </div>
      <div className="prevButton" onClick={swipeHandler}></div>
      <div className="nextButton" onClick={swipeHandler}></div>
    </div>
  );
};

export default Carousel;
