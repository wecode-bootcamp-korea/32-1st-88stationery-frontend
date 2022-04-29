import React from "react";
import "./CartPaymentResult.scss";

const CartPaymentResult = ({ price, deliveryPrice }) => {
  return (
    <div className="paymentResult">
      <div className="productPrice">
        <span>총 상품금액</span>
        <span>{price}원</span>
      </div>
      <div className="deliveryPrice">
        <span>배송비</span>
        <span>+{price <= 30000 && deliveryPrice}원</span>
      </div>
      <div className="totalPrice">
        <span>결제예상금액</span>
        <span>{price + deliveryPrice}원</span>
      </div>
      <div className="textBox">
        {30000 - price > 0 ? `${30000 - price}원 더 주문시 무료배송` : ""}
      </div>
    </div>
  );
};

export default CartPaymentResult;
