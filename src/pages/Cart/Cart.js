import React, { useState, useEffect } from "react";
import CartList from "../../components/Cartlist/CartList";
import CartPaymentResult from "../../components/CartPaymentResult/CartPaymentResult";
import "./Cart.scss";

const Cart = () => {
  const [sumPrice, setSumPrice] = useState({ default: 0 });
  const [deliveryPrice, setDeliveryPrice] = useState(3000);
  const [checkedList, setCheckedList] = useState(mockData.map(el => el.name));
  const [isAllChecked, setIsAllChecked] = useState(true);
  const cartLists = mockData;

  useEffect(() => {
    checkedList.length === cartLists.length
      ? setIsAllChecked(true)
      : setIsAllChecked(false);
  }, [checkedList]);

  useEffect(() => {
    sumPrice > 30000 ? setDeliveryPrice(0) : setDeliveryPrice(3000);
  }, [sumPrice]);

  const totalPrice = Object.values(sumPrice).reduce((acc, cur) => acc + cur);

  const allCheckHandler = () => {
    setIsAllChecked(!isAllChecked);
    isAllChecked === true && setCheckedList([]);
  };

  return (
    <div className="cartContainer">
      <h1 className="cartTitle">장바구니</h1>
      <div className="cartWrapper">
        <div className="cartContent">
          <div className="cartContentHeader">
            <div>
              <input
                type="checkbox"
                checked={isAllChecked}
                onChange={allCheckHandler}
              />
              <button>전체선택</button>
            </div>
            <div>
              <button>선택삭제</button>
            </div>
          </div>
          {cartLists.map(cartList => {
            return (
              <CartList
                setCheckedList={setCheckedList}
                checkedList={checkedList}
                isAllChecked={isAllChecked}
                key={cartList.id}
                productPrice={cartList.price}
                name={cartList.name}
                id={cartList.id}
                setSumPrice={setSumPrice}
              />
            );
          })}
        </div>
        <div className="cartPayment">
          <CartPaymentResult
            deliveryPrice={deliveryPrice}
            totalPrice={totalPrice}
          />
          <div className="orderBtn">
            <button>주문하기</button>
          </div>
        </div>
      </div>
    </div>
  );
};

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

export default Cart;
