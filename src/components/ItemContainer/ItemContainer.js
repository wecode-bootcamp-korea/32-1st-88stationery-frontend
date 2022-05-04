import Items from "../Items/Items";
import "./ItemContainer.scss";

const LIMIT = 4;

const ItemContainer = ({ title, name, itemLists, updateOffset }) => {
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

  console.log(itemLists);

  return (
    <div className="itemContainer">
      <h3 className="mainTitle">{title}</h3>
      <div className="limitBox">
        {name === "itemsInCategory" ? (
          <div className="sortCategoriesList">
            <div className="sortCategory">
              <ul>
                <li type="sortByLowPrice">가격 낮은 순</li>
                <li type="sortByHighPrice">가격 높은 순</li>
                <li type="sortByNewItems">신상품</li>
              </ul>
            </div>
          </div>
        ) : null}
      </div>
      <div className="itemList">
        {itemLists.map((itemList, idx) => {
          return <Items key={idx} itemList={itemList} />;
        })}
        <button onClick={updateOffset}>더 보기</button>
      </div>
    </div>
  );
};

export default ItemContainer;
