// import { Link } from 'react-router-dom';

import { useDispatch, useSelector } from "react-redux";
import { renderCategories } from "../../helpers";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

export default function ArticleItemCategories({ categoriesId }) {
  const categories = useSelector((state) => state.CATEGORIES.categories);

  console.log("h", categories);
  if (categories.length === 0) {
    return <></>
  }
  if (!categoriesId) {
    return <></>
  }
  return (
    <ul className="article-item__categories">
      {renderCategories(categories, categoriesId)}
    </ul>
  )

  // return categories.length === 0 ? (
  //   <></>
  // ) : (
  //   <ul className="article-item__categories">
  //     {/* <li><a href="/" className="btn btn-category">News</a></li>
  //     <li><a href="/" className="btn btn-category">News</a></li> */}
  //     {categoriesId.map((categoryIds) => {
  //       return (
  //         <li key={categoryIds}>
  //           <Link
  //             className="btn btn-category"
  //             to={`/category/${categoriesNews[categoryIds].slug}`}
  //           >
  //             {categoriesNews[categoryIds].name}
  //           </Link>
  //           {/* <a href="/" className="btn btn-category" onClick={handleSearchCategories((categoriesNews[categoryIds].name))}>
  //           </a> */}
  //         </li>
  //       );
  //     })}
  //   </ul>
  // );
}