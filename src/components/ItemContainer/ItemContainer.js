import React, { useState } from "react";
import Items from "../Items/Items";
import "./ItemContainer.scss";

const ItemContainer = ({ title }) => {
  const [itemLists, setitemLists] = useState(PRODUCT);
  const [limit, setLimit] = useState(8);
  const [page, setPage] = useState(1);
  const offset = (page - 1) * limit;

  const limitHandler = ({ target: { value } }) => {
    setLimit(Number(value));
  };

  const numPages = Math.ceil(itemLists.length / limit);

  return (
    <div className="itemContainer">
      <h3 className="mainTitle">{title}</h3>
      <div className="limitBox">
        <select onChange={limitHandler}>
          <option value="8">8개씩 보기</option>
          <option value="12">12개씩 보기</option>
        </select>
      </div>
      <div className="itemList">
        {itemLists.slice(offset, offset + limit).map((itemList, idx) => (
          <Items key={idx} itemList={itemList} />
        ))}
      </div>
      <div className="indexBtn">
        {Array(numPages)
          .fill()
          .map((_, i) => (
            <button
              className={page === i + 1 && "active"}
              key={i + 1}
              onClick={() => setPage(i + 1)}
              aria-current={page === i + 1 ? "page" : null}
            >
              {i + 1}
            </button>
          ))}
      </div>
    </div>
  );
};

export default ItemContainer;

const PRODUCT = [
  {
    id: 1,
    name: "고양이",
    context: "...",
    price: 1000,
    src1: "/images/items/2.jpeg",
    src2: "/images/items/3.jpeg",
  },
  {
    id: 1,
    name: "고양이1",
    context: "...",
    price: 2000,
    src1: "/images/items/2.jpeg",
    src2: "/images/items/3.jpeg",
  },
  {
    id: 1,
    name: "고양이3",
    context: "...",
    price: 3000,
    src1: "/images/items/2.jpeg",
    src2: "/images/items/3.jpeg",
  },
  {
    id: 1,
    name: "고양이4",
    context: "...",
    price: 4000,
    src1: "/images/items/2.jpeg",
    src2: "/images/items/3.jpeg",
  },
  {
    id: 1,
    name: "고양이5",
    context: "...",
    price: 5000,
    src1: "/images/items/2.jpeg",
    src2: "/images/items/3.jpeg",
  },
  {
    id: 1,
    name: "고양이6",
    context: "...",
    price: 6000,
    src1: "/images/items/2.jpeg",
    src2: "/images/items/3.jpeg",
  },
  {
    id: 1,
    name: "고양이7",
    context: "...",
    price: 7000,
    src1: "/images/items/2.jpeg",
    src2: "/images/items/3.jpeg",
  },
  {
    id: 1,
    name: "고양이8",
    context: "...",
    price: 8000,
    src1: "/images/items/2.jpeg",
    src2: "/images/items/3.jpeg",
  },
  {
    id: 1,
    name: "고양이9",
    context: "...",
    price: 9000,
    src1: "/images/items/2.jpeg",
    src2: "/images/items/3.jpeg",
  },
  {
    id: 1,
    name: "고양이10",
    context: "...",
    price: 10000,
    src1: "/images/items/2.jpeg",
    src2: "/images/items/3.jpeg",
  },
  {
    id: 1,
    name: "고양이11",
    context: "...",
    price: 11000,
    src1: "/images/items/2.jpeg",
    src2: "/images/items/3.jpeg",
  },
  {
    id: 1,
    name: "고양이12",
    context: "...",
    price: 12000,
    src1: "/images/items/2.jpeg",
    src2: "/images/items/3.jpeg",
  },
  {
    id: 1,
    name: "고양이13",
    context: "...",
    price: 13000,
    src1: "/images/items/2.jpeg",
    src2: "/images/items/3.jpeg",
  },
];
