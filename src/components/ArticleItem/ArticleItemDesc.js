// import { formatString } from "../../helpers";
import './style.css'

export default function ArticleItemDesc({ excerpt, queryStr }) {

  if (!excerpt) return <></>

  const highlightSearch = (content) => {
    const regex = new RegExp(`(${queryStr})`, "gi");
    return content.replace(regex, `<mark>$1</mark>`)
  }
  return (
    <>
      {excerpt ? (
        <p className="article-item__desc" dangerouslySetInnerHTML={{ __html: highlightSearch(highlightSearch(excerpt)) }}></p>
      ) : (
        <p className="article-item__desc">
          Markdown is a lightweight markup language with plain-text-formatting
          syntax. Its design allows it to…
        </p>
      )}
    </>
  );
}