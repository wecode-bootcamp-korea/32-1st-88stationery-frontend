import React, { useState, useEffect } from "react";
import CartList from "../../components/CartList/CartList";
import CartPaymentResult from "../../components/CartPaymentResult/CartPaymentResult";
import "./Cart.scss";

const Cart = () => {
  const [sumPrice, setSumPrice] = useState({ default: 0 });
  const [deliveryPrice, setDeliveryPrice] = useState(3000);
  const [isAllChecked, setIsAllChecked] = useState(true);
  const [cartLists, setCartLists] = useState([]);
  const [checkedList, setCheckedList] = useState([]);
  const [cartInfo, setCartInfo] = useState();

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
        setCheckedList(data.carts.map(cart => cart.product));
        setCartLists(data.carts);
        setCartInfo(
          data.carts.map(cart => ({
            cart_id: String(cart.cart_id),
            quantity: String(cart.quantity),
            price: String(Number(cart.price) * cart.quantity),
          }))
        );
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

  useEffect(() => {
    fetch("http://10.58.1.230:8000/orders/carts", {
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
      console.log(response);
      response.json();
    });
  }, [cartLists]);

  // const buyItems = e => {
  //   e.preventDefault();
  //   fetch("http://10.58.1.230:8000/orders", {
  //     method: "POST",
  //     headers: {
  //       Authorization:
  //         "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6N30.u8tQmYe21yFLPlb5ABDzRHAG7XGE2zugyDhD3IA5K1s",
  //     },
  //     body: JSON.stringify({
  //       carts_info: [cartInfo],
  //     }),
  //   }).then(response => response.json());
  // };

  console.log(cartLists);
  console.log(cartInfo);
  // console.log(cartInfo);

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
          {cartLists.map((cartList, index) => {
            return (
              <CartList
                cartLists={cartLists}
                setCartLists={setCartLists}
                setCheckedList={setCheckedList}
                checkedList={checkedList}
                isAllChecked={isAllChecked}
                key={index}
                productPrice={cartList.price}
                name={cartList.product}
                id={cartList.category_id}
                img={cartList.product_image_1}
                setSumPrice={setSumPrice}
                quantities={cartList.quantity}
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

const CARTLIST = [
  {
    category_id: 3,
    product: "그냥컵",
    product_image_1: "",
    product_image_2: "",
    quantity: 4,
    price: 1000,
  },
  {
    category_id: 4,
    product: "그냥빵",
    product_image_1: "",
    product_image_2: "",
    quantity: 1,
    price: 2000,
  },
];
