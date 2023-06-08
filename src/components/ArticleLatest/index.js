import './latest-news-list.css'
import ArticleItem from "../ArticleItem";
import MainTitle from '../shared/MainTitle'
import { useSelector } from 'react-redux';


function ArticleLatest(data) {

  const postsLatest = useSelector((state) => state.POST.postsLatest);
  if (!data) return <></>
  return (
    <div className="latest-news section">
      <div className="tcl-container">

        {/* <MainTitle /> */}
        <MainTitle >Articles Latest</MainTitle>
        <div className="latest-news__list spacing">
          {
            postsLatest.map((item) => (
              <div key={item.id} className="latest-news__card">
                <ArticleItem data={item} />
              </div>
            ))
          }
        </div>
      </div>
    </div>


  )
}

export default ArticleLatest