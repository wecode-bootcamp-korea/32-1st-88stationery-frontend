import { React, useState, useEffect, cloneElement } from "react";
import "./CartList.scss";

const CartList = ({
  productPrice,
  name,
  id,
  isChecked,
  setSumPrice,
  handleCheckBox,
}) => {
  const [quantity, setQuantity] = useState(1);
  const itemPrice = productPrice * quantity;

  useEffect(() => {
    setSumPrice(prev => ({ ...prev, [name]: itemPrice }));
  }, [itemPrice]);

  const increaseCount = () => {
    setQuantity(prev => Number(prev) + 1);
  };

  const decreaseCount = () => {
    if (quantity > 0) {
      setQuantity(prev => Number(prev) - 1);
    }
  };

  const onChangeHandler = e => {
    setQuantity(e.target.value);
  };

  const onKeyDown = e => {
    if (e.code.includes("Digit") || e.code.includes("Backspace")) {
      setQuantity(e.target.value);
    } else {
      e.preventDefault();
    }
  };
  return (
    <ul className="cartList">
      <li className="cartListLi">
        <div className="cartListCheckBox">
          <input
            type="checkbox"
            onChange={e => handleCheckBox(id, e.target.checked)}
            checked={isChecked}
          />
        </div>
        <div className="cartListProductBox">
          <a ahref="#">이미지</a>
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
              onKeyDown={onKeyDown}
            />
            <button type="button" onClick={increaseCount}>
              +
            </button>
          </div>
          <div className="cartListPrice">
            <p>{itemPrice.toLocaleString("ko-KR")}원</p>
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
