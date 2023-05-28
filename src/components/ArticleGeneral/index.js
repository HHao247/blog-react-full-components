import ArticleItem from "../ArticleItem";
import MainTitle from "../shared/MainTitle";
import { usePostPaging } from "../../hooks/usePostPaging";


function ArticleGeneral() {
  const { posts, renderButtonLoadMore } = usePostPaging()

  return (
    <div className="articles-list section">
      <div className="tcl-container">
        <MainTitle btnLabel="Xem them">Bai Viet Tong Hop</MainTitle>
        <div className="tcl-row">
          {posts.map((item) => (
            <div key={item.id} className="tcl-col-12 tcl-col-md-6">
              <ArticleItem isStyleCard isShowAvatar={false} data={item} />
            </div>
          ))}
        </div>
        <div className="text-center">
          {renderButtonLoadMore()}
        </div>
      </div>
    </div>
  )
}

export default ArticleGeneral