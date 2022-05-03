import React, { useState } from "react";
import ItemsComment from "./ItemsComment";

function ItemsList({ item, itemValue, deleteItem, deleteHandler }) {
  const [btnValue, setBtnValue] = useState(false);
  const { id, title, date, detail } = item;

  function itemOnOff(id) {
    const selectItem = itemValue.find(item => item.id === id);
    if (selectItem.id === id) {
      setBtnValue(!btnValue);
    }
  }

  return (
    <div className="inquiryContent" key={id}>
      <div className="inquiryItem">
        <div
          className={btnValue ? "itemTopSelect" : "itemTop"}
          onClick={() => itemOnOff(id)}
        >
          <ul>
            <li>{title}</li>
            <li>{date}</li>
          </ul>

          <button className="itemDelete" onClick={() => deleteItem(id)}>
            <i class="fa-solid fa-circle-xmark" />
          </button>
        </div>
        <ItemsComment
          id={id}
          text={detail}
          itemOnOff={itemOnOff}
          btnValue={btnValue}
          deleteHandler={deleteHandler}
          itemValue={itemValue}
        />
      </div>
    </div>
  );
}

export default ItemsList;
