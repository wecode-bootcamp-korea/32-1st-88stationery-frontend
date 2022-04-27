import React from "react";
import "./Cart.scss";

const Cart = () => {
  return (
    <div className="cartContainer">
      <h1 className="cartTitle">장바구니</h1>
      <div className="cartWrapper">
        <div className="cartContent">
          <div className="cartContentHeader">
            <div>
              <input type="checkbox" />
              <button>전체선택</button>
            </div>
            <div>
              <button>선택삭제</button>
            </div>
          </div>
          <ul className="cartList">
            <li className="cartListLi">
              <div className="cartListCheckBox">
                <input type="checkbox" />
              </div>
              <div className="cartListProductBox">
                <a href="#">이미지</a>
                <div className="cartListProductText">
                  <p>배달이친구들 팝업카드 2종</p>
                  <p>잘먹고 잘살자</p>
                </div>
              </div>
              <div className="cartListInfoBox">
                <div className="cartListQuantity">
                  <button>-</button>
                  <input type="number" />
                  <button>+</button>
                </div>
                <div className="cartListPrice">
                  <p>4000원</p>
                </div>
              </div>
              <div className="cartListDeleteBox">
                <button>❌</button>
              </div>
            </li>
          </ul>
        </div>
        <div className="cartPayment">
          <div className="paymentResult">
            <div className="productPrice">
              <span>총 상품금액</span>
              <span>0원</span>
            </div>
            <div className="deliveryPrice">
              <span>배송비</span>
              <span>+0원</span>
            </div>
            <div className="totalPrice">
              <span>결제예상금액</span>
              <span>0원</span>
            </div>
          </div>
          <div className="orderBtn">
            <button disabled>0원 주문하기</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
