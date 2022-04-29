import React from "react";
import "./items.scss";

const Items = ({ itemList, idx }) => {
  return (
    <div className="item">
      <div className="itemDetail">
        <figure className="thumbnail">
          <img src={itemList.src1} alt="itemimage" />
          <img src={itemList.src2} alt="itemimage" />
        </figure>
        <div className="itemInfo">
          <p className="itemName">{itemList.name}</p>
          <p className="itemPrice">{itemList.price}</p>
        </div>
      </div>
    </div>
  );
};

export default Items;
