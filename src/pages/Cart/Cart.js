import React from "react";
import "./Cart.scss";

const Cart = () => {
  return (
    <div className="cartContainer">
      <h1>장바구니</h1>
      <div className="cartWrapper">
        <div className="cartContent">
          <div>
            <input type="checkbox" />
            <button>전체선택</button>
          </div>
          <div>
            <button>선택삭제</button>
          </div>
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
          <div>
            <button>0원 주문하기</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
