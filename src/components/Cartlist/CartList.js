import { React, useState, useEffect } from "react";
import "./CartList.scss";

const CartList = ({
  productPrice,
  name,
  setSumPrice,
  setCheckedList,
  checkedList,
  isAllChecked,
}) => {
  const [quantity, setQuantity] = useState(1);
  const itemPrice = productPrice * quantity;
  const [isChecked, setIsChecked] = useState(checkedList.includes(name));
  useEffect(() => {
    setIsChecked(checkedList.includes(name));
  });
  useEffect(() => {
    isAllChecked === true &&
      !checkedList.includes(name) &&
      setCheckedList(prev => [...prev, name]);
  }, [isAllChecked]);

  useEffect(() => {
    isChecked
      ? setSumPrice(prev => ({ ...prev, [name]: itemPrice }))
      : setSumPrice(prev => ({ ...prev, [name]: 0 }));
  }, [itemPrice, isChecked]);

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

  const checkHandler = () => {
    checkedList.includes(name) === false
      ? setCheckedList(prev => [...prev, name])
      : setCheckedList(prev => prev.filter(item => item !== name));
  };

  return (
    <ul className="cartList">
      <li className="cartListLi">
        <div className="cartListCheckBox">
          <input
            type="checkbox"
            onChange={checkHandler}
            checked={checkedList.includes(name)}
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
