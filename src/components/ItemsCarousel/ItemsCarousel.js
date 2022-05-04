import { useState } from "react";
import Items from "./Items";
import "./ItemsCarousel.scss";

const ItemsCarousel = ({ bestItems }) => {
  const [slideIndex, setSlideIndex] = useState(0);

  const moveCarouselHandler = event => {
    const { className } = event.target;
    const isPrev = className.includes("prev");
    const isNext = className.includes("next");

    if (isPrev) {
      setSlideIndex(curr => --curr);
    }
    if (isNext) {
      setSlideIndex(curr => ++curr);
    }
  };

  const firstSlide =
    slideIndex === 0
      ? {
          style: { transform: "translateX(-80px)" },
        }
      : null;
  const lastSlide =
    slideIndex === 1
      ? {
          style: { transform: "translateX(80px)" },
        }
      : null;
  console.log(bestItems[0]);
  return (
    <div className="ItemsCarousel">
      <button
        className="navigation prev"
        onClick={moveCarouselHandler}
        style={firstSlide && firstSlide.style}
        disabled={firstSlide}
      >
        <i className="fa fa-solid fa-circle-left fa-2x prev" />
      </button>
      <div
        className="carouselWrapper"
        style={{ transform: `translateX(${slideIndex * -1020}px)` }}
      >
        {bestItems.map(bestItem => (
          <Items key={bestItem.product_id} bestItems={bestItem} />
        ))}
      </div>
      <button
        className="navigation next"
        onClick={moveCarouselHandler}
        style={lastSlide && lastSlide.style}
        disabled={lastSlide}
      >
        <i className="fa fa-solid fa-circle-right fa-2x next" />
      </button>

      <div className="pagination">
        <div
          className="current"
          style={{
            width: `calc(100% / ${bestItems.length - 4})`,
            transform: `translateX(calc(100% * ${slideIndex}))`,
          }}
        />
      </div>
    </div>
  );
};

export default ItemsCarousel;
