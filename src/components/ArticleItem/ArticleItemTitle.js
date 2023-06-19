// import { Link } from 'react-router-dom';

import { Link } from "react-router-dom"

export default function ArticleItemTitle({ title, slug, queryStr }) {


  const highlightSearch = (title) => {
    const regex = new RegExp(`(${queryStr})`, "gi");
    return title.replace(regex, `<mark>$1</mark>`)
  }
  if (!title) return <></>
  // return (
  //   <h2 className="article-item__title">
  //     {/* <a href="/only-someone-who's-seen-the-mummy-will-pass-this/">Only Someone Who's Seen The Mummy Will
  //                 Pass This</a> */}
  //     <Link to={`/post/${slug}`} href={title}></Link>
  //   </h2>
  // )

  return (
    <h2 className="article-item__title">
      {title ? (
        <Link to={`/post/${slug}`} >
          <div dangerouslySetInnerHTML={{ __html: highlightSearch(title) }}></div>
        </Link>
      ) : (
        <a href="/only-someone-who's-seen-the-mummy-will-pass-this/">
          Only Someone Who's Seen The Mummy Will Pass This
        </a>
      )}
    </h2>
  );
}