import React from "react";

const Items = ({ bestItems }) => {
  const { name, price, thumnail_url_1, thumnail_url_2 } = bestItems;

  return (
    <div className="item">
      <div className="itemDetail">
        <figure className="thumbnail">
          <img src={thumnail_url_1} alt="itemimage" />
          <img src={thumnail_url_2} alt="itemimage" />
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
