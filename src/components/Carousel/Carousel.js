import React, { useState, useEffect } from "react";
import "./Carousel.scss";

const Carousel = () => {
  const [curIndex, setCurIndex] = useState(1);
  const [action, setAction] = useState(1);
  const [isTransition, setIsTransition] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => setCurIndex(curIndex + 1), 4000);
    return () => {
      clearInterval(timer);
    };
  });

  useEffect(() => {
    setTimeout(() => {
      setIsTransition(false);
    }, 1000);
    // setTimeout(() => {
    //   setAction(0);
    // }, 500);
    curIndex === 0 &&
      setTimeout(() => {
        setAction(0);
        setCurIndex(3);
        setTimeout(() => {
          setAction(1);
        }, 20);
      }, 1000);
    curIndex === 4 &&
      setTimeout(() => {
        setAction(0);
        setCurIndex(1);
        setTimeout(() => {
          setAction(1);
        }, 20);
      }, 1000);
    return () => {
      // setAction(0.5);
    };
  }, [curIndex]);

  const clickHandler = ({ target }) => {
    setCurIndex(Number(target.innerText));
  };

  const swipeHandler = ({ target }) => {
    if (isTransition) return;
    setAction(1);
    target.className === "prevButton"
      ? setCurIndex(curIndex => {
          setIsTransition(true);
          return curIndex - 1;
        })
      : setCurIndex(curIndex => {
          setIsTransition(true);
          return curIndex + 1;
        });
  };

  console.log(isTransition);
  console.log(curIndex);

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
      <div className="prevButton" onClick={swipeHandler} />
      <div className="nextButton" onClick={swipeHandler} />
    </div>
  );
};

export default Carousel;
