
import ArticleItem from "../components/ArticleItem";
import MainTitle from "../components/shared/MainTitle";
import { getQueryStr } from "../helpers";
import { useDispatch } from "react-redux";
import { actFetchArticlesPagingAsync } from "../store/post/actions";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { usePostPaging } from "../hooks/usePostPaging";


function SearchPage() {
  const location = useLocation();
  const dispatch = useDispatch()
  const keyword = getQueryStr('q', location);
  const inputParams = { search: keyword };
  const { posts, renderButtonLoadMore } = usePostPaging(inputParams);

  useEffect(() => {
    dispatch(actFetchArticlesPagingAsync({ inputParams }))
  }, [keyword, dispatch])


  return (
    <div className="articles-list section">
      <div className="tcl-container">

        <MainTitle type="search">10 kết quả tìm kiếm với từ khóa "{keyword}"</MainTitle>

        <div className="tcl-row tcl-jc-center">
          {posts.map((item) => {
            return (
              <div className="tcl-col-12 tcl-col-md-8" key={item.id}>
                <ArticleItem
                  isShowCategoies
                  isShowDesc
                  isShowAvatar
                  isStyleCard
                  data={item}
                />
              </div>
            );
          })}
        </div>

        <div className="text-center">

          {renderButtonLoadMore()}

        </div>
      </div>
    </div>

  )
}

export default SearchPage