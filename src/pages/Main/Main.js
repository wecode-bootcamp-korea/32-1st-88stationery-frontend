import React, { useState, useEffect } from "react";
import Items from "../../components/Items/Items";
import Carousel from "../../components/Carousel/Carousel";
import "./Main.scss";

const Main = () => {
  const [itemLists, setItemLists] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/data/itemList.json", {
      method: "GET",
    })
      .then(res => res.json())
      .then(data => {
        setItemLists(data);
      });
  }, []);

  return (
    <main className="mainContainer">
      <Carousel />
      <div className="itemContainer">
        <h3 className="mainTitle">요즘 잘 나가요</h3>
        <div className="itemList">
          {itemLists.map(itemList => (
            <Items key={Date.now()} itemList={itemList} />
          ))}
        </div>
        <h3 className="mainTitle">새로 나왔어요</h3>
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
        </div>
      </div>
    </main>
  );
};

export default Main;
