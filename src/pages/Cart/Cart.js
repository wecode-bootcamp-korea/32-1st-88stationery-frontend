import React, { useState, useEffect } from "react";
import CartList from "../../components/CartList/CartList";
import CartPaymentResult from "../../components/CartPaymentResult/CartPaymentResult";
import { config } from "../../config";
import "./Cart.scss";

const Cart = () => {
  const [sumPrice, setSumPrice] = useState({ default: 0 });
  const [isAllChecked, setIsAllChecked] = useState(true);
  const [cartLists, setCartLists] = useState([]);
  const [checkedList, setCheckedList] = useState([]);

  const totalPrice = Object.values(sumPrice).reduce((acc, cur) => acc + cur);

  useEffect(() => {
    fetch(`${config.carts}`, {
      method: "GET",
      headers: {
        Authorization:
          "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6N30.u8tQmYe21yFLPlb5ABDzRHAG7XGE2zugyDhD3IA5K1s",
      },
    })
      .then(res => res.json())
      .then(data => {
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
    fetch(`${config.carts}`, {
      method: "PATCH",
      headers: {
        Authorization:
          "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6N30.u8tQmYe21yFLPlb5ABDzRHAG7XGE2zugyDhD3IA5K1s",
      },
      body: JSON.stringify({
        carts_info: cartLists.map(list => ({
          cart_id: list.cart_id,
          quantity: list.quantity,
          price: list.price,
        })),
      }),
    }).then(response => {
      response.json();
    });
  }, [cartLists]);

  const allCheckHandler = () => {
    setIsAllChecked(!isAllChecked);
    isAllChecked && setCheckedList([]);
  };

  const buyItems = e => {
    e.preventDefault();
    fetch(`${config.orders}`, {
      method: "POST",
      headers: {
        Authorization:
          "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6N30.u8tQmYe21yFLPlb5ABDzRHAG7XGE2zugyDhD3IA5K1s",
      },
      body: JSON.stringify({
        cart_id: cartLists
          .filter(list => checkedList.includes(list.product))
          .map(e => e.cart_id),
      }),
    }).then(response => response.json());
    window.location.reload();
  };

  console.log(cartLists);

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
              <p>전체선택</p>
            </div>
          </div>
          <ul className="cartList">
            {cartLists.map(
              (
                {
                  price,
                  product,
                  cart_id,
                  product_image_1,
                  quantity,
                  product_id,
                },
                index
              ) => {
                return (
                  <CartList
                    cartLists={cartLists}
                    setCartLists={setCartLists}
                    setCheckedList={setCheckedList}
                    checkedList={checkedList}
                    isAllChecked={isAllChecked}
                    key={index}
                    productPrice={price}
                    name={product}
                    id={cart_id}
                    img={product_image_1}
                    setSumPrice={setSumPrice}
                    quantity={quantity}
                    productId={product_id}
                  />
                );
              }
            )}
          </ul>
        </div>
        <div className="cartPayment">
          <CartPaymentResult totalPrice={totalPrice} />
          <div className="orderBtn">
            <button onClick={buyItems}>주문하기</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Cart;
