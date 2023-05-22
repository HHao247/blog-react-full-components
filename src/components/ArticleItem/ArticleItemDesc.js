// import { formatString } from "../../helpers";
import './style.css'

export default function ArticleItemDesc({ excerpt }) {
  if (!excerpt) return <></>
  return (
    <p className="article-item__desc">{excerpt}</p>

  )
}