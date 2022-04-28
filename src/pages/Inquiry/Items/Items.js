import React, { useState, useEffect } from "react";
import ItemsList from "./ItemsList";

function Items() {
  const [itemValue, setItemValue] = useState([]);

  useEffect(() => {
    fetch("/data/items.json")
      .then(res => res.json())
      .then(data => {
        setItemValue(data);
      });
  }, []);

  return itemValue.map(data => <ItemsList data={data} itemValue={itemValue} />);
}

export default Items;
