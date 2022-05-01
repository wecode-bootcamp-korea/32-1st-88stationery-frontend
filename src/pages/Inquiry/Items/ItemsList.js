import React, { useState } from "react";
import ItemsComment from "./ItemsComment";

function ItemsList({ item, itemValue, deleteItem }) {
  const [btnValue, setBtnValue] = useState(false);
  const { id, title, user, date, detail } = item;

  function itemOnOff(id) {
    const selectItem = itemValue.find(item => item.id === id);
    if (selectItem.id === id) {
      setBtnValue(!btnValue);
    }
  }
  return (
    <div className="inquiryContent" key={id}>
      <div className="inquiryItem">
        <div className={btnValue ? "itemTopSelect" : "itemTop"}>
          <h1>{title}</h1>
          <ul>
            <li>{user}</li>
            <li>{date}</li>
          </ul>
          <button className="itemOnOff" onClick={() => itemOnOff(id)}>
            🔽
          </button>
          <button className="itemDelete" onClick={() => deleteItem(id)}>
            ❎
          </button>
        </div>
        <ItemsComment
          id={id}
          text={detail}
          itemOnOff={itemOnOff}
          btnValue={btnValue}
        />
      </div>
    </div>
  );
}

export default ItemsList;
