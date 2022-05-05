import React from "react";
import ItemsList from "./ItemsList";

function Items({ list, deleteItem, comment, setComment, deleteHandler }) {
  return list.map(item => (
    <ItemsList
      key={item.id}
      item={item}
      itemValue={list}
      deleteItem={deleteItem}
      comment={comment}
      setComment={setComment}
      deleteHandler={deleteHandler}
    />
  ));
}

export default Items;
