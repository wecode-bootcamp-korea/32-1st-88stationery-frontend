import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { config } from "../../config";
import "./Goods.scss";

const Goods = () => {
  const [quantity, setQuantity] = useState(1);
  const [isActive, setisActive] = useState(true);
  const [goodsInfo, setGoodsInfo] = useState([]);
  const params = useParams();

  useEffect(() => {
    fetch(`${config.goods}/${params.id}`)
      .then(res => res.json())
      .then(res => setGoodsInfo(res.product[0]));
  }, [params]);

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

  const goCart = e => {
    e.preventDefault();
    fetch(`${config.carts}`, {
      method: "POST",
      headers: {
        Authorization: `eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6N30.u8tQmYe21yFLPlb5ABDzRHAG7XGE2zugyDhD3IA5K1s`,
      },
      body: JSON.stringify({
        product_id: String(goodsInfo.product_id),
        price: String(quantity * goodsInfo.price),
        quantity: String(quantity),
      }),
    })
      .then(response => response.json())
      .then(result =>
        result.message === "cart created"
          ? alert("장바구니에 새로운 상품이 추가되었습니다")
          : result.message === "cart updated"
          ? alert("장바구니에 상품이 추가되었습니다")
          : null
      );
  };

  const buyItems = e => {
    e.preventDefault();
    fetch("http://10.58.1.230:8000/orders", {
      method: "POST",
      headers: {
        Authorization:
          "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6N30.u8tQmYe21yFLPlb5ABDzRHAG7XGE2zugyDhD3IA5K1s",
      },
      body: JSON.stringify({
        product_id: goodsInfo.product_id,
        quantity: quantity,
      }),
    }).then(response => response.json());
    window.location.reload();
  };

  return (
    <main className="goods">
      <header className="goodsView">
        <div className="goodsInfo">
          <div className="goodsTitle">
            <h3 className="goodsName">{goodsInfo.name}</h3>
            <p className="goodsPrice">{Number(goodsInfo.price)} 원</p>
          </div>
          <figure className="goodsImage">
            <img
              className={isActive ? "active" : ""}
              src={goodsInfo.thumnail_url_1}
              alt="goodsImage"
            />
            <img
              className={!isActive ? "active" : ""}
              src={goodsInfo.thumnail_url_2}
              alt="goodsImage"
            />

            <i
              className="fa-solid fa-arrow-left-long fa-2x"
              onClick={swipeHandler}
            />
            <i
              className="fa-solid fa-arrow-right-long fa-2x"
              onClick={swipeHandler}
            />

            <div className="indexButton">
              {Array(2)
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
              <p>{(quantity * goodsInfo.price).toLocaleString("ko-KR")}원</p>
            </div>
            <footer className="btnGroup">
              <button onClick={goCart} className="cartButton">
                <i className="fa-solid fa-cart-shopping" />
              </button>
              <button onClick={buyItems} className="buyButton">
                바로 구매하기
              </button>
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
