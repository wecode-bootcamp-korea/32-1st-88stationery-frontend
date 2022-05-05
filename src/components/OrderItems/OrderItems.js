import React from "react";
import "./OrderItems.scss";

const OrderItems = ({ orderLists }) => {
  return (
    <ul className="OrderedItemUl">
      {orderLists.map(
        ({
          order_id,
          product_image_1,
          product_image_2,
          product,
          price,
          quantity,
          status,
        }) => {
          return (
            <li key={order_id} className="orderedListLi">
              <div className="orderedProductBox">
                <div className="orderImgBox">
                  <img
                    alt="productImage"
                    className="orderProductImg"
                    src={product_image_1}
                  />
                  <img
                    alt="productImage"
                    className="orderHoverImg"
                    src={product_image_2}
                  />
                </div>
                <p className="orderedListProductText">{product}</p>
              </div>
              <p className="orderedCount">{quantity} 개</p>
              <p className="orderedSumPrice">
                {(quantity * price).toLocaleString()}원
              </p>
              <div className="orderedStatus">{status}</div>
            </li>
          );
        }
      )}
    </ul>
  );
};

export default OrderItems;
