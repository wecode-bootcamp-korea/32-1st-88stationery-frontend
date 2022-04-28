import React, { useState, useEffect } from "react";
import Items from "../../components/Items/Items";
import Carousel from "../../components/Carousel/Carousel";
import "./Main.scss";
import ItemList from "../../components/ItemList/ItemList";

const Main = () => {
  const [itemLists, setItemLists] = useState(products);
  const [limit, setLimit] = useState(8);
  const [page, setPage] = useState(1);
  const offset = (page - 1) * limit;

  return (
    <main className="mainContainer">
      <Carousel />
      <div className="itemContainer">
        <ItemList itemLists={itemLists} />
        {/* <h3 className="mainTitle">새로 나왔어요</h3>
        <div className="itemList">
          {itemLists.map(itemList => (
            <Items key={Date.now()} itemList={itemList} />
          ))}
        </div>
        <h3 className="mainTitle">지금은 할인중</h3>
        <div className="itemList">
          {itemLists.map(itemList => (
            <Items key={Date.now()} itemList={itemList} />
          ))}
        </div> */}
      </div>
    </main>
  );
};

export default Main;

const products = [
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
