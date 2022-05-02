import { React, useState, useEffect, cloneElement } from "react";
import "./CartList.scss";

const CartList = ({
  productPrice,
  name,
  id,
  setSumPrice,
  handleCheckBox,
  setIsCheckedAll,
  cartLists,
}) => {
  const [quantity, setQuantity] = useState(1);
  const itemPrice = productPrice * quantity;
  const [isCheckedEach, setIsCheckedEach] = useState(true);

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
  const onIsCheckedEach = (targetChecked, id) => {
    setIsCheckedEach(!isCheckedEach);
    if (targetChecked === false) {
      setIsCheckedAll(false);
    }
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
            // onChange={e => handleCheckBox(id, e.target.checked)}
            onChange={e => onIsCheckedEach(e.target.checked, id)}
            checked={isCheckedEach}
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
