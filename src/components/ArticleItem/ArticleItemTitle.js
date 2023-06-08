// import { Link } from 'react-router-dom';

import { Link } from "react-router-dom"

export default function ArticleItemTitle({ title, slug }) {
  if (!title) return <></>
  return (


    <h2 className="article-item__title">
      {/* <a href="/only-someone-who's-seen-the-mummy-will-pass-this/">Only Someone Who's Seen The Mummy Will
                  Pass This</a> */}
      <Link to={`/post/${slug}`} href={title}>{title}</Link>
    </h2>
  )
}