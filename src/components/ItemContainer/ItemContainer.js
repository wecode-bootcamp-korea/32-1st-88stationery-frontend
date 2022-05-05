import Items from "../Items/Items";
import "./ItemContainer.scss";

const ItemContainer = ({
  title,
  name,
  itemLists,
  updateOffset,
  sortCategoryHandler,
}) => {
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
