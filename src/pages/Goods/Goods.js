import React from "react";
import "./Goods.scss";

const Goods = () => {
  return (
    <main className="goodsContainer">
      <header className="goodsView">
        <div className="goodsInfo">
          <div className="goodsTitle">
            <h3 className="goodsName">을지로 목장갑</h3>
            <p className="goodsPrice">3,000원</p>
          </div>
          <figure className="goodsImage">
            <img src="/images/items/2.jpeg" />
          </figure>
          <div className="goodsOrder">
            <div className="shippingGuide"></div>
          </div>
        </div>
      </header>
    </main>
  );
};

export default Goods;
