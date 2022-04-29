import { React, useState, useEffect } from "react";
import "./CartList.scss";

const CartList = ({ productPrice, name, id }) => {
  const [quantity, setQuantity] = useState(1);
  const [itemPrice, setItemPrice] = useState(productPrice);
  const [deliveryPrice, setDeliveryPrice] = useState(3000);

  useEffect(() => {
    if (itemPrice > 30000) {
      setDeliveryPrice(0);
    } else {
      setDeliveryPrice(3000);
    }
  });

  const increaseCount = () => {
    setQuantity(prev => prev + 1);
    setItemPrice(productPrice * (quantity + 1));
  };

  const decreaseCount = () => {
    if (quantity > 0) {
      setQuantity(prev => prev - 1);
      setItemPrice(productPrice * (quantity - 1));
    }
  };

  const onChangeHandler = e => {
    setQuantity(e.target.value);
  };

  const onKeyUp = e => {
    if (isNaN(Number(e.target.value))) {
      return;
    } else {
      setQuantity(Number(e.target.value));
      setItemPrice(productPrice * quantity);
    }
  };

  return (
    <ul className="cartList">
      <li className="cartListLi">
        <div className="cartListCheckBox">
          <input type="checkbox" />
        </div>
        <div className="cartListProductBox">
          <a href="#">이미지</a>
          <div className="cartListProductText">
            <p>{name}</p>
          </div>
        </div>
        <div className="cartListInfoBox">
          <div className="cartListQuantity">
            <button type="button" onClick={decreaseCount}>
              -
            </button>
            <input
              type="text"
              value={quantity}
              onChange={onChangeHandler}
              onKeyUp={onKeyUp}
            />
            <button type="button" onClick={increaseCount}>
              +
            </button>
          </div>
          <div className="cartListPrice">
            <p>{productPrice}원</p>
          </div>
        </div>
        <div className="cartListDeleteBox">
          <button>❌</button>
        </div>
      </li>
    </ul>
  );
};

export default CartList;
