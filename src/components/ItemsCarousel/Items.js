import React from "react";

const Items = ({ itemList }) => {
  const { name, price, src1, src2 } = itemList;
  return (
    <div className="item">
      <div className="itemDetail">
        <figure className="thumbnail">
          <img src={src1} alt="itemimage" />
          <img src={src2} alt="itemimage" />
        </figure>
        <div className="itemInfo">
          <p className="itemName">{name}</p>
          <p className="itemPrice">{price}</p>
        </div>
      </div>
    </div>
  );
};
export default Items;
