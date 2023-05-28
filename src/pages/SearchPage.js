import Button from "../components/shared/Button";
import ArticleItem from "../components/ArticleItem";
import MainTitle from "../components/shared/MainTitle";
import { getQueryStr } from "../helpers";
import { useDispatch, useSelector } from "react-redux";
import { actFetchSearchAsync } from "../store/post/actions";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";


function SearchPage() {
  const location = useLocation();
  const dispatch = useDispatch()
  const queryStr = getQueryStr('q', location.search)
  console.log("queryStr", queryStr);
  useEffect(() => {
    dispatch(actFetchSearchAsync(queryStr))
  }, [queryStr])
  const postSearch = useSelector((state) => state.POST.postSearch);


  return (
    <div className="articles-list section">
      <div className="tcl-container">

        <MainTitle type="search">10 kết quả tìm kiếm với từ khóa "{queryStr}"</MainTitle>

        <div className="tcl-row tcl-jc-center">
          {/* <div className="tcl-col-12 tcl-col-md-8">
            <ArticleItem 
              isStyleCard 
              isShowCategoies 
              isShowAvatar={false} 
              isShowDesc={false} 
            />
          </div>
          <div className="tcl-col-12 tcl-col-md-8">
            <ArticleItem 
              isStyleCard 
              isShowCategoies 
              isShowAvatar={false} 
              isShowDesc={false} 
            />
          </div> */}
          {/* <div className="tcl-col-12 tcl-col-md-8">
            <ArticleItem
              isStyleCard
              isShowCategoies
              isShowAvatar={false}
              isShowDesc={false}
            />
          </div> */}
          {postSearch.map((item) => {
            return (
              <div className="tcl-col-12 tcl-col-md-8">
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
          <Button type="primary" size="large">Tải thêm</Button>

        </div>
      </div>
    </div>

  )
}

export default SearchPage