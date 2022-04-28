import React, { useState, useEffect } from "react";
import "./Carousel.scss";

const Carousel = () => {
  const [imageList, setImageList] = useState([]);
  const [curIndex, setCurIndex] = useState(1);
  const [action, setAction] = useState(1);
  const [isTransition, setIsTransition] = useState(false);

  useEffect(() => {
    setImageList(IMAGE);
    setImageList(prev => [IMAGE[IMAGE.length - 1], ...prev, IMAGE[0]]);
  }, []);

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
    const startIndex = 0;
    curIndex === startIndex &&
      setTimeout(() => {
        setAction(0);
        setCurIndex(3);
        setTimeout(() => {
          setAction(1);
        }, 20);
      }, 1000);
    curIndex === imageList.length - 1 &&
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

  return (
    <div className="bannerContainer">
      <div
        className="imageWrapper"
        style={{
          transform: `translateX(${curIndex * -100}vw)`,
          transition: `all ${action}s`,
        }}
      >
        {imageList.map(({ src }) => (
          <img src={src} alt="bannerImage" />
        ))}
      </div>
      <div className="indexButton" onClick={clickHandler}>
        {Array(IMAGE.length)
          .fill()
          .map((_, idx) => (
            <span className={curIndex === idx + 1 && "active"}>{idx + 1}</span>
          ))}
      </div>
      <div className="prevButton" onClick={swipeHandler} />
      <div className="nextButton" onClick={swipeHandler} />
    </div>
  );
};

export default Carousel;

const IMAGE = [
  { src: "/images/items/1.jpeg" },
  { src: "/images/items/2.jpeg" },
  { src: "/images/items/3.jpeg" },
];
