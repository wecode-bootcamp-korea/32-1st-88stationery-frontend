import React, { useState } from "react";
import CartList from "../../components/Cartlist/CartList";
import "./Cart.scss";

const Cart = () => {
  const mockData = [
    {
      id: 1,
      name: "공책",
      price: 4000,
    },
    {
      id: 2,
      name: "지우개",
      price: 5000,
    },
    {
      id: 3,
      name: "연필",
      price: 2000,
    },
    {
      id: 4,
      name: "볼펜",
      price: 1000,
    },
  ];

  const [cartLists, setCartLists] = useState(mockData);

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
          {cartLists.map(cartList => {
            return (
              <CartList
                key={cartList.id}
                // quantity={quantity}
                // setQuantity={setQuantity}
                productPrice={cartList.price}
                // setPrice={setPrice}
                // deliveryPrice={deliveryPrice}
                // setDeliveryPrice={setDeliveryPrice}
                name={cartList.name}
                id={cartList.id}
              />
            );
          })}
        </div>
        <div className="cartPayment">
          {/* <div className="paymentResult">
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
          </div> */}
          <div className="orderBtn">
            <button disabled>0원 주문하기</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
