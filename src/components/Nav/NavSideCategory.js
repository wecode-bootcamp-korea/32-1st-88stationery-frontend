import React from "react";
import { Link } from "react-router-dom";

function NavSideCategory({ CATEGORY_LIST }) {
  return CATEGORY_LIST.map((list, index) => {
    const { path, category } = list;
    return (
      <li key={index}>
        <Link to={`${path}`}>{category}</Link>
      </li>
    );
  });
}

export default NavSideCategory;
