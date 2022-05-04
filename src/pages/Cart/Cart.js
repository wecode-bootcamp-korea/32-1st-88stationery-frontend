import React, { useState, useEffect } from "react";
import CartList from "../../components/Cartlist/CartList";
import CartPaymentResult from "../../components/CartPaymentResult/CartPaymentResult";
import "./Cart.scss";

const Cart = () => {
  const [sumPrice, setSumPrice] = useState({ default: 0 });
  const [deliveryPrice, setDeliveryPrice] = useState(3000);
  const [isAllChecked, setIsAllChecked] = useState(true);
  const [cartLists, setCartLists] = useState([]);
  const [checkedList, setCheckedList] = useState([]);

  useEffect(() => {
    fetch("http://10.58.1.230:8000/orders/carts", {
      method: "GET",
      headers: {
        Authorization:
          "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6N30.u8tQmYe21yFLPlb5ABDzRHAG7XGE2zugyDhD3IA5K1s",
      },
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setCheckedList(data.carts.map(cart => cart.product));
        setCartLists(data.carts);
      });
  }, []);

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

  console.log(
    cartLists
      .filter(e => checkedList.includes(e.product))
      .map(list => list.cart_id)
  );
  console.log(checkedList);

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
                key={cartList.cart_id}
                productPrice={cartList.price}
                name={cartList.product}
                id={cartList.cart_id}
                img={cartList.product_image_1}
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

export default Cart;
