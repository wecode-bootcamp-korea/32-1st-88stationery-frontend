import React, { useEffect, useState } from "react";
import "./OrderItems.scss";

const Productlist = ({ orderedItems }) => {
  return (
    <ul className="OrderedItemUl">
      {orderedItems.map(e => {
        return (
          <li key={e.id} className="orderedListLi">
            <span className="orderedListOrder">{e.id}</span>
            <div className="orderedProductBox">
              <a href="#">이미지</a>
              <div className="orderedListProductText">
                <p>{e.name}</p>
              </div>
            </div>
            <div className="orderedListInfoBox">
              <div className="orderedCount">{e.count}개</div>
            </div>
            <div className="orderedSumPrice">
              {(e.count * e.price).toLocaleString("ko-KR")}원
            </div>
            <div className="orderedStatus">{e.status}</div>
          </li>
        );
      })}
    </ul>
  );
};

export default Productlist;

// 배송준비 배송중 배송완료
