import React from "react";
import "./items.scss";

const Items = ({ itemList }) => {
  return (
    <div className="items">
      <div className="itemDetail">
        <figure className="thumbnail">
          <img src={itemList.thumnail_url_1} alt="itemimage" />
          <img src={itemList.thumnail_url_2} alt="itemimage" />
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
