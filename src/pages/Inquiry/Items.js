import React, { useState, useEffect } from "react";
import ItemsList from "./ItemsList";

function Items() {
  // state zone
  const [itemValue, setItemValue] = useState([]);

  // function zone
  useEffect(() => {
    fetch("/data/items.json")
      .then(res => res.json())
      .then(data => {
        setItemValue(data);
      });
  }, []);
  // variable zone

  return itemValue.map(data => <ItemsList data={data} itemValue={itemValue} />);
}

export default Items;
