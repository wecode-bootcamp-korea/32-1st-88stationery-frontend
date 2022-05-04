import React, { useState } from "react";
import Items from "../Items/Items";
import "./ItemContainer.scss";

const ItemContainer = ({ title, name, itemLists }) => {
  const [limit, setLimit] = useState(8);
  const [page, setPage] = useState(1);

  const offset = (page - 1) * limit;
  const numPages = Math.ceil(itemLists.length / limit);

  const limitHandler = ({ target: { value } }) => {
    setLimit(Number(value));
  };

  return (
    <div className="itemContainer">
      <h3 className="mainTitle">{title}</h3>
      <div className="limitBox">
        {name === "itemsInCategory" ? (
          <div className="sortCategoriesList">
            <div className="sortCategory">
              <ul>
                <li type="sortByLowPrice">가격 낮은 순</li>
                <li type="sortByHighPrice">가격 높은 순</li>
                <li type="sortByNewItems">신상품</li>
              </ul>
            </div>
          </div>
        ) : (
          <select onChange={limitHandler}>
            <option value="8">8개씩 보기</option>
            <option value="12">12개씩 보기</option>
          </select>
        )}
      </div>
      <div className="itemList">
        {itemLists.slice(offset, offset + limit).map((itemLists, idx) => {
          return <Items key={idx} itemList={itemLists} />;
        })}
      </div>
      <div className="indexBtn">
        {Array(numPages)
          .fill()
          .map((_, i) => {
            return (
              <button
                className={page === i + 1 ? "active" : undefined}
                key={i + 1}
                onClick={() => setPage(i + 1)}
                aria-current={page === i + 1 ? "page" : undefined}
              >
                {i + 1}
              </button>
            );
          })}
      </div>
    </div>
  );
};

export default ItemContainer;
