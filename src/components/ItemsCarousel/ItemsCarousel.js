import { useState } from "react";
import Items from "./Items";
import "./ItemsCarousel.scss";

const ItemsCarousel = () => {
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
        {dataList.map(items => (
          <Items key={items.id} itemList={items} />
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
            width: `calc(100% / ${dataList.length - 4})`,
            transform: `translateX(calc(100% * ${slideIndex}))`,
          }}
        />
      </div>
    </div>
  );
};

const dataList = [
  {
    id: 0,
    name: "요거트",
    price: 4000,
    src1: "https://images.unsplash.com/photo-1643114917776-78071774f6b8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    src2: "https://cdn.pixabay.com/photo/2022/04/15/11/23/dog-7134183_1280.jpg",
  },
  {
    id: 1,
    name: "빵",
    price: 4000,
    src1: "https://images.unsplash.com/photo-1643114917776-78071774f6b8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    src2: "https://cdn.pixabay.com/photo/2022/04/15/11/23/dog-7134183_1280.jpg",
  },
  {
    id: 2,
    name: "샐러드",
    price: 4000,
    src1: "https://images.unsplash.com/photo-1643114917776-78071774f6b8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    src2: "https://cdn.pixabay.com/photo/2022/04/15/11/23/dog-7134183_1280.jpg",
  },
  {
    id: 3,
    name: "과일",
    price: 4000,
    src1: "https://images.unsplash.com/photo-1643114917776-78071774f6b8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    src2: "https://cdn.pixabay.com/photo/2022/04/15/11/23/dog-7134183_1280.jpg",
  },
  {
    id: 4,
    name: "케이크",
    price: 4000,
    src1: "https://images.unsplash.com/photo-1643114917776-78071774f6b8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    src2: "https://cdn.pixabay.com/photo/2022/04/15/11/23/dog-7134183_1280.jpg",
  },
  {
    id: 5,
    name: "케이크",
    price: 4000,
    src1: "https://images.unsplash.com/photo-1643114917776-78071774f6b8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    src2: "https://cdn.pixabay.com/photo/2022/04/15/11/23/dog-7134183_1280.jpg",
  },
];

export default ItemsCarousel;
