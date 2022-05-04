import React, { useState, useEffect } from "react";
import "./Goods.scss";

const Goods = () => {
  const [quantity, setQuantity] = useState(1);
  const [isActive, setisActive] = useState(true);
  const [imageList, setImageList] = useState([]);

  useEffect(() => {
    setImageList(IMAGE);
  }, []);

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    quantity > 0 && setQuantity(quantity - 1);
  };

  const changeNumber = ({ target }) => {
    setQuantity(Number(target.value));
  };

  const keyCode = e => {
    !(e.code.includes("Digit") || e.code === "Backspace") && e.preventDefault();
  };

  const swipeHandler = () => {
    setisActive(!isActive);
  };

  return (
    <main className="goods">
      <header className="goodsView">
        <div className="goodsInfo">
          <div className="goodsTitle">
            <h3 className="goodsName">을지로 목장갑</h3>
            <p className="goodsPrice">3,000원</p>
          </div>
          <figure className="goodsImage">
            {imageList.map(({ src }, idx) => (
              <img
                key={idx}
                src={src}
                alt="goodsImage"
                style={{
                  opacity: idx === 0 ? (isActive ? 1 : 0) : isActive ? 0 : 1,
                }}
              />
            ))}
            <div onClick={swipeHandler} className="swipePrev" />
            <div onClick={swipeHandler} className="swipeNext" />
            <div className="indexButton">
              {Array(imageList.length)
                .fill()
                .map((_, idx) => (
                  <span
                    key={idx}
                    className={
                      (idx === 0 ? isActive : !isActive) ? "active" : undefined
                    }
                    onClick={swipeHandler}
                  >
                    {idx}
                  </span>
                ))}
            </div>
          </figure>
          <div className="goodsOrder">
            <div className="shippingGuide">
              <p>배송정보</p>
              <p>3,000원 (30,000원 이상 구매 시 무료)</p>
              <p>오후 1시 당일배송 마감</p>
            </div>
            <div className="orderOption">
              <p>개수</p>
              <div className="orderQuantity">
                <button className="quantityDown" onClick={decreaseQuantity}>
                  -
                </button>
                <input
                  type="text"
                  value={quantity}
                  onChange={changeNumber}
                  onKeyDown={keyCode}
                  maxLength="4"
                />
                <button className="quantityUp" onClick={increaseQuantity}>
                  +
                </button>
              </div>
            </div>
            <div className="orderTotal">
              <p>총 금액</p>
              <p>{(quantity * 3000).toLocaleString("ko-KR")}원</p>
            </div>
            <footer className="btnGroup">
              <button className="cartButton">
                <i className="fa-solid fa-cart-shopping" />
              </button>
              <button className="buyButton">바로 구매하기</button>
            </footer>
          </div>
        </div>
      </header>
      <div className="goodsTab">
        <ul>
          <li>상품정보</li>
          <li>기본정보</li>
          <li>상품후기</li>
        </ul>
      </div>
    </main>
  );
};

export default Goods;

const IMAGE = [
  { id: 1, src: "/images/items/2.jpeg" },
  { id: 2, src: "/images/items/3.jpeg" },
];
