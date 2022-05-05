import Items from "../Items/Items";
import { config } from "../../config";
import { useParams } from "react-router-dom";
import "./ItemContainer.scss";
import { useEffect, useState } from "react";

const ItemContainer = ({
  title,
  name,
  itemLists,
  setItemLists,
  updateOffset,
}) => {
  // const [page, setPage] = useState(1);
  // const navigate = useNavigate();
  // const location = useLocation();
  // const params = useParams();

  // useEffect(() => {
  //   fetch(
  //     `${config.category}/${params.id}${
  //       location.search || `?limit=${LIMIT}&offset=0`
  //     }`
  //   )
  //     .then(res => res.json())
  //     .then(res => {
  //       setItemLists(prev => prev.concat(res.products));
  //     });
  // }, [location.search]);

  // const updateOffset = e => {
  //   const offset = page * LIMIT;
  //   const queryString = `?limit=${LIMIT}&offset=${offset}`;
  //   setPage(page + 1);
  //   navigate(`${queryString}`);
  // };
  //10.58.1.230:8000/products/category/번호?sort_method=0
  const params = useParams();
  const [sortNumber, setSortNumber] = useState(0);

  useEffect(() => {
    fetch(`${config.category}/${params.id}?sort_method=${sortNumber}`)
      .then(res => res.json())
      .then(res => {
        setItemLists(res.products);
      });
  }, [sortNumber]);

  const sortCategoryHandler = e => {
    if (e.target.type === "sortByLowPrice") {
      setSortNumber(1);
    } else if (e.target.type === "sortByHighPrice") {
      setSortNumber(2);
    } else if (e.target.type === "sortByNewItems") {
      setSortNumber(3);
    }
  };
  return (
    <div className="itemContainer">
      <h3 className="mainTitle">{title}</h3>
      <div className="limitBox">
        {name === "itemsInCategory" ? (
          <div className="sortCategoriesList">
            <div className="sortCategory">
              <ul>
                <li type="sortByLowPrice" onClick={sortCategoryHandler}>
                  가격 낮은 순
                </li>
                <li type="sortByHighPrice" onClick={sortCategoryHandler}>
                  가격 높은 순
                </li>
                <li type="sortByNewItems" onClick={sortCategoryHandler}>
                  신상품
                </li>
              </ul>
            </div>
          </div>
        ) : null}
      </div>
      <div className="itemList">
        {itemLists.map((itemList, idx) => {
          return <Items key={idx} itemList={itemList} />;
        })}
      </div>
      <div className="nextItems">
        <button className="w-btn-neon2 " onClick={updateOffset}>
          더 보기
        </button>
      </div>
    </div>
  );
};

export default ItemContainer;
