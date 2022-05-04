import React from "react";
import { useNavigate } from "react-router-dom";

function NavSideCategory({ CATEGORY_LIST }) {
  const navigate = useNavigate();

  return CATEGORY_LIST.map((list, index) => {
    const { category } = list;

    const goToCategoryHandler = () => {
      navigate(`/category/${list.id}`);
      window.location.reload();
    };
    return (
      <li key={index} onClick={goToCategoryHandler}>
        {category}
      </li>
    );
  });
}

export default NavSideCategory;
