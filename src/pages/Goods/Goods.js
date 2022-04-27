import React, { useState } from "react";
import "./Goods.scss";

const Goods = () => {
  const [quantity, setQuantity] = useState(1);

  const quantityHandler = ({ target }) => {
    target.className === "quantityUp"
      ? setQuantity(quantity + 1)
      : setQuantity(quantity - 1);
  };

  const changeNumber = ({ target }) => {
    setQuantity(Number(target.value));
  };

  const keyCode = e => {
    !(e.code.includes("Digit") || e.code === "Backspace") && e.preventDefault();
  };

  return (
    <main className="goodsContainer">
      <header className="goodsView">
        <div className="goodsInfo">
          <div className="goodsTitle">
            <h3 className="goodsName">을지로 목장갑</h3>
            <p className="goodsPrice">3,000원</p>
          </div>
          <figure className="goodsImage">
            <img src="/images/items/2.jpeg" alt="goodsImage" />
            <img src="/images/items/3.jpeg" alt="goodsImage" />
            <div className="swipePrev" />
            <div className="swipeNext" />
            <div className="indexButton">
              <span>0</span>
              <span>1</span>
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
                <button className="quantityDown" onClick={quantityHandler}>
                  -
                </button>
                <input
                  type="text"
                  value={quantity}
                  onChange={changeNumber}
                  onKeyDown={keyCode}
                  maxLength="4"
                ></input>
                <button className="quantityUp" onClick={quantityHandler}>
                  +
                </button>
              </div>
            </div>
            <div className="orderTotal">
              <p>총 금액</p>
              <p>
                {String(quantity * 3000).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                원
              </p>
            </div>
            <footer className="btnGroup">
              <button className="cartButton"></button>
              <button className="buyButton">바로 구매하기</button>
            </footer>
          </div>
        </div>
      </header>
    </main>
  );
};

export default Goods;
