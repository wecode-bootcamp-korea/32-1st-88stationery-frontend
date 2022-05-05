import { React, useState, useEffect } from "react";
import { config } from "../../config";
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
  quantity,
}) => {
  const [isChecked, setIsChecked] = useState(checkedList.includes(name));
  const itemPrice = Number(productPrice) * quantity;

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
    const copyArray = [...cartLists];
    const selectedIndex = copyArray.findIndex(e => e.cart_id === id);
    copyArray[selectedIndex].quantity++;
    setCartLists(copyArray);
  };

  const decreaseCount = () => {
    if (quantity > 0) {
      const copyArray = [...cartLists];
      const selectedIndex = copyArray.findIndex(e => e.cart_id === id);
      copyArray[selectedIndex].quantity--;
      setCartLists(copyArray);
    }
  };

  const onChangeHandler = e => {
    const copyArray = [...cartLists];
    const selectedIndex = copyArray.findIndex(e => e.cart_id === id);
    copyArray[selectedIndex].quantity = e.target.value;
    setCartLists(copyArray);
  };

  const onKeyDown = e => {
    if (e.code.includes("Digit") || e.code.includes("Backspace")) {
      const copyArray = [...cartLists];
      const selectedIndex = copyArray.findIndex(e => e.cart_id === id);
      copyArray[selectedIndex].quantity = e.target.value;
      setCartLists(copyArray);
    } else {
      e.preventDefault();
    }
  };

  const checkHandler = () => {
    checkedList.includes(name) === false
      ? setCheckedList(prev => [...prev, name])
      : setCheckedList(prev => prev.filter(item => item !== name));
  };

  const deleteItem = () => {
    fetch(`${config.carts}`, {
      method: "DELETE",
      headers: {
        Authorization:
          "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6N30.u8tQmYe21yFLPlb5ABDzRHAG7XGE2zugyDhD3IA5K1s",
      },
      body: JSON.stringify({
        cart_id: id,
      }),
    }).then(response => response.json());
    window.location.reload();
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
            maxLength={4}
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
        <button onClick={deleteItem}>:x:</button>
      </div>
    </li>
  );
};
export default CartList;
