import React from "react";
import "./items.scss";

const Items = ({ itemList }) => {
  console.log(itemList.name);
  return (
    <div className="item">
      <a>
        <figure className="thumbnail">
          <img src={itemList.src1} />
          <img src={itemList.src2} />
        </figure>
        <div className="itemInfo">
          <p className="itemName">{itemList.name}</p>
          <p className="itemPrice">{itemList.price}</p>
        </div>
      </a>
    </div>
  );
};

export default Items;
