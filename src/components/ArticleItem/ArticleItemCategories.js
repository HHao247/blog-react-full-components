// import { Link } from 'react-router-dom';

import { useSelector } from "react-redux";
import { renderCategories } from "../../helpers";

export default function ArticleItemCategories({categoriesId}) {
  const categories = useSelector((state) => state.CATEGORIES.categories);
  // console.log(categories);
  if (categories.length === 0 ) {
    return <></>
  }
  if (!categoriesId) {
    return <></>
  }
  return (
    <ul className="article-item__categories">
      {/* <li><a href="/" className="btn btn-category">News</a></li>
      <li><a href="/" className="btn btn-category">News</a></li> */}
      {renderCategories(categories, categoriesId)}
    </ul>
  )
}