import React from "react";
import { Link } from "react-router-dom";

function NavSideCategoryComponents({ categoryList }) {
  return categoryList.map((list, index) => {
    const { path, category } = list;
    return (
      <li key={index}>
        <Link to={`${path}`}>{category}</Link>
      </li>
    );
  });
}

export default NavSideCategoryComponents;
