
import ArticleItem from "../components/ArticleItem";
import MainTitle from "../components/shared/MainTitle";
import { getQueryStr } from "../helpers";
import { useDispatch, useSelector } from "react-redux";
import { actFetchArticlesPagingAsync } from "../store/post/actions";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { usePostPaging } from "../hooks/usePostPaging";


function SearchPage() {
  const location = useLocation();
  const dispatch = useDispatch()
  const keyword = getQueryStr('q', location.search);
  const inputParams = { search: keyword };
  const { posts, renderButtonLoadMore } = usePostPaging(inputParams);

  const totalPage = useSelector((state) => state.POST.postsPaging.totalPage);


  console.log(totalPage);


  useEffect(() => {
    dispatch(actFetchArticlesPagingAsync({ inputParams }))
  }, [keyword, dispatch])

  return (
    <div className="articles-list section">
      <div className="tcl-container">

        <MainTitle type="search">{totalPage} kết quả tìm kiếm với từ khóa "<span className="search-highlight">{keyword}</span>"</MainTitle>

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
                  queryStr={keyword}
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