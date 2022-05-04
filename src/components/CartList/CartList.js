import { React, useState, useEffect } from "react";
import "./CartList.scss";
const CartList = ({
  productPrice,
  name,
  setSumPrice,
  setCheckedList,
  checkedList,
  isAllChecked,
  img,
  id,
  setCartLists,
  cartLists,
  quantities,
}) => {
  const [quantity, setQuantity] = useState(quantities);
  const [isChecked, setIsChecked] = useState(checkedList.includes(name));
  const itemPrice = productPrice * quantity;

  useEffect(() => {
    // 원본 배열은 건드리면 안되기 때문에 배열 복제
    // 수정하고자 하는 product가 어떤 건지 알아야 함 => id
    // 복제된 배열에서, 해당하는 product의 quantity를 바꿔줌 => findIndex
    // setState

    const copyArray = [...cartLists];
    const selectedIndex = copyArray.findIndex(e => e.category_id === id);
    copyArray[selectedIndex].quantity = quantity;
    setCartLists(copyArray);
  }, [quantity]);

  useEffect(() => {
    setIsChecked(checkedList.includes(name));
  }, []);

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
    <li className="cartListLi">
      <div className="cartListCheckBox">
        <input
          type="checkbox"
          onChange={checkHandler}
          checked={checkedList.includes(name)}
        />
      </div>
      <div className="cartListProductBox">
        <img alt="제품사진" src={img} />
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
        <button>:x:</button>
      </div>
    </li>
  );
};
export default CartList;
