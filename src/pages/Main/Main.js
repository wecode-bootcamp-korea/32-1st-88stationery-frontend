import React, { useState, useEffect } from "react";
import { config } from "../../config";
import Carousel from "../../components/Carousel/Carousel";
import ItemsCarousel from "../../components/ItemsCarousel/ItemsCarousel";
import ItemContainer from "../../components/ItemContainer/ItemContainer";
import "./Main.scss";

const Main = () => {
  const [itemLists, setItemLists] = useState([]);
  const [bestItems, setBestItems] = useState([]);

  useEffect(() => {
    fetch(`${config.main}`)
      .then(res => res.json())
      .then(data => {
        setItemLists(data.new_products);
        setBestItems(data.best_products);
      });
  }, []);

  return (
    <main className="Main">
      <Carousel />
      <div className="itemContainer">
        <img src="/images/main/mainBanner.png" alt="mainBanner" />
        <ItemsCarousel bestItems={bestItems} />
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
