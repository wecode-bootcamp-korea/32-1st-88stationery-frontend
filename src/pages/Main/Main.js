import React, { useState, useEffect } from "react";
import Carousel from "../../components/Carousel/Carousel";
import ItemsCarousel from "../../components/ItemsCarousel/ItemsCarousel";
import ItemContainer from "../../components/ItemContainer/ItemContainer";
import "./Main.scss";
import { useLocation } from "react-router-dom";
const Main = () => {
  const [productList, setProductList] = useState([]);
  const location = useLocation();

  useEffect(() => {
    fetch(
      `http://10.58.1.230:8000/main${location.search || "offset=0&limit=4"}`,
      {}
    )
      .then(res => res.json())
      .then(data => {
        setProductList(data.new_products);
      });
  }, []);

  return (
    <main className="Main">
      <Carousel />
      <div className="itemContainer">
        <img src="/images/main/mainBanner.png" alt="mainBanner" />
        <ItemsCarousel />
        <ItemContainer title="요즘 잘 나가요" itemLists={productList} />
      </div>
    </main>
  );
};

export default Main;
