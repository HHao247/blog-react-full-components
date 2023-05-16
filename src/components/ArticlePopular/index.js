import { useSelector } from 'react-redux'
import ArticleItem from '../ArticleItem'
import MainTitle from '../shared/MainTitle'
import './popular-news-list.css'

function ArticlePopular() {

  const postsPopular = useSelector((state)=>state.POST.postsPopular);
  return (
    <div className="popular-news section bg-white-blue">
      <div className="tcl-container">
        {/* Main Title */}
        {/* <div className="main-title spacing d-flex tcl-jc-between tcl-ais-center">
          <h2>Popular Articles</h2> 
          <a href="/" className="btn btn-default">View More</a>
        </div> */}
          <MainTitle btnLabel="Xem Thêm">Popular Articles</MainTitle>
        {/* End Main Title */}
        <div className="popular-news__list spacing">
          <div className="popular-news__list--left">
            <div className="popular-news__list--row">
              {/* Popular news card */}
              <div className="popular-news__list--card">
                <ArticleItem isShowAvatar isStyleCard isShowDesc  data={postsPopular[0]} isShowCategoies/>
              </div>
              {/* End Popular news card */}
              {/* Popular news card */}
              <div className="popular-news__list--card">
                <ArticleItem isShowAvatar isStyleCard isShowDesc data={postsPopular[1]} isShowCategoies/>
              </div>
              {/* End Popular news card */}
            </div>
          </div>
          <div className="popular-news__list--right">
            <div className="popular-news__list--row">
              {/* Popular news card */}
              <div className="popular-news__list--card">
                <ArticleItem isShowAvatar isStyleCard isShowDesc isStyleRow data={postsPopular[2]} isShowCategoies/>
              </div>
              {/* End Popular news card */}
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default ArticlePopular