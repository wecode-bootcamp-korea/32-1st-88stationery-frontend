import React from "react";
import Items from "../Items/Items";
import "./itemList.scss";

function ItemList({ itemLists }) {
  return (
    <div className="itemList">
      <h3 className="mainTitle">요즘 잘 나가요</h3>
      <div className="limitBox">
        <select>
          <option>4</option>
          <option>8</option>
          <option>12</option>
        </select>
      </div>
      <div className="itemList">
        {itemLists.slice(0, 8).map(itemList => (
          <Items key={Date.now()} itemList={itemList} />
        ))}
      </div>
    </div>
  );
}

export default ItemList;
