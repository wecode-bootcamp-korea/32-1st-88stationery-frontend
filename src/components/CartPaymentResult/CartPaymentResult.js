import React from "react";
import "./CartPaymentResult.scss";

const CartPaymentResult = ({ totalPrice, deliveryPrice }) => {
  return (
    <div className="paymentResult">
      <div className="productPrice">
        <span>총 상품금액</span>
        <span>{totalPrice.toLocaleString()}원</span>
      </div>
      <div className="deliveryPrice">
        <span>배송비</span>
        <span>+{totalPrice <= 30000 && 3000}원</span>
      </div>
      <div className="totalPrice">
        <span>결제예상금액</span>
        <span>
          {totalPrice >= 30000
            ? totalPrice.toLocaleString()
            : (totalPrice + 3000).toLocaleString()}
          원
        </span>
      </div>
      <div className="textBox">
        {30000 - totalPrice > 0
          ? `${(30000 - totalPrice).toLocaleString()}원 더 주문시 무료배송`
          : " "}
      </div>
    </div>
  );
};
export default CartPaymentResult;
