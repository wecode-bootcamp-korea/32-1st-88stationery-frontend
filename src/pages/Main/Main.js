import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { config } from "../../config";
import Carousel from "../../components/Carousel/Carousel";
import ItemsCarousel from "../../components/ItemsCarousel/ItemsCarousel";
import ItemContainer from "../../components/ItemContainer/ItemContainer";
import "./Main.scss";

const Main = () => {
  const [itemLists, setItemLists] = useState([]);
  const location = useLocation();

  useEffect(() => {
    fetch(`${config.main}/${location.search || "offset=0&limit=4"}`)
      .then(res => res.json())
      .then(data => {
        console.log(data);
      });
  }, []);

  return (
    <main className="Main">
      <Carousel />
      <div className="itemContainer">
        <img src="/images/main/mainBanner.png" alt="mainBanner" />
        <ItemsCarousel />
        <ItemContainer
          title="요즘 잘 나가요"
          itemLists={itemLists}
          setItemLists={setItemLists}
        />
      </div>
    </main>
  );
};

export default Main;
