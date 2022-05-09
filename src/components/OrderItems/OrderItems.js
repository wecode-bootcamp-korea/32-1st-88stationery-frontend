import React from "react";
import { useNavigate } from "react-router-dom";
import "./OrderItems.scss";

const OrderItems = ({ orderLists }) => {
  const navigate = useNavigate();

  const goDetail = product_id => {
    navigate(`/goods/${product_id}`);
  };

  return (
    <ul className="OrderedItemUl">
      {orderLists.map(
        ({
          product_id,
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
              <div
                onClick={() => goDetail(product_id)}
                className="orderedProductBox"
              >
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
              <p className="orderedStatus">{status}</p>
            </li>
          );
        }
      )}
    </ul>
  );
};

export default OrderItems;
