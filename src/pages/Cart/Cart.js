import React, { useState } from "react";
import CartList from "../../components/Cartlist/CartList";
import "./Cart.scss";

const Cart = () => {
  const [quantity, setQuantity] = useState(1);
  const [price, setPrice] = useState(4000);
  const [deliveryPrice, setDeliveryPrice] = useState(3000);

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
          <CartList
            quantity={quantity}
            setQuantity={setQuantity}
            price={price}
            setPrice={setPrice}
            deliveryPrice={deliveryPrice}
            setDeliveryPrice={setDeliveryPrice}
          />
        </div>
        <div className="cartPayment">
          <div className="paymentResult">
            <div className="productPrice">
              <span>총 상품금액</span>
              <span>{price}원</span>
            </div>
            <div className="deliveryPrice">
              <span>배송비</span>
              <span>+{deliveryPrice}원</span>
            </div>
            <div className="totalPrice">
              <span>결제예상금액</span>
              <span>{price + deliveryPrice}원</span>
            </div>
            <div className="textBox">{30000 - price}</div>
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
