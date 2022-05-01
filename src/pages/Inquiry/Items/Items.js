import React from "react";
import ItemsList from "./ItemsList";

function Items({ list, deleteItem }) {
  return list.map(item => (
    <ItemsList
      key={item.id}
      item={item}
      itemValue={list}
      deleteItem={deleteItem}
    />
  ));
}

export default Items;
