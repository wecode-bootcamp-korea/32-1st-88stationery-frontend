import React from "react";
import { useNavigate } from "react-router-dom";
import "./items.scss";
import { config } from "../../config";

const Items = ({ itemList }) => {
  const navigate = useNavigate();

  const goDetail = e => {
    navigate(`/goods/${itemList.product_id}`);
  };

  return (
    <div className="items" onClick={goDetail}>
      <div className="itemDetail">
        <figure className="thumbnail">
          <img src={itemList.thumnail_url_1} alt="itemimage" />
          <img src={itemList.thumnail_url_2} alt="itemimage" />
        </figure>
        <div className="itemInfo">
          <p className="itemName">{itemList.name}</p>
          <p className="itemPrice">
            {Number(itemList.price).toLocaleString()}원
          </p>
        </div>
      </div>
    </div>
  );
};

export default Items;
