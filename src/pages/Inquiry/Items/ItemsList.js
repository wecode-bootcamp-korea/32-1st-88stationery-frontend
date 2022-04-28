import React, { useState } from "react";
import ItemsComment from "./ItemsComment";

function ItemsList({ data: { id, title, user, date, text }, itemValue }) {
  const [btnValue, setBtnValue] = useState(false);

  function itemOnOff(id) {
    const selectItem = itemValue.find(item => item.id === id);
    if (selectItem.id === id) {
      setBtnValue(!btnValue);
    }
  }

  return (
    <div className="inquiryContent" key={id}>
      <div className="inquiryItem">
        <div className="itemTop">
          <h1>{title}</h1>
          <ul>
            <li>{user}</li>
            <li>{date}</li>
          </ul>
          <button className="itemOnOff" onClick={() => itemOnOff(id)}>
            ✅
          </button>
        </div>
        <ItemsComment
          key={id}
          text={text}
          itemOnOff={itemOnOff}
          btnValue={btnValue}
        />
      </div>
    </div>
  );
}

export default ItemsList;
