import { useDispatch, useSelector } from "react-redux";
import ArticleItem from "../ArticleItem";
import Button from "../shared/Button";
import MainTitle from "../shared/MainTitle";
import { actFetchArticlesGeneralAsync } from "../../store/generalArticles/actions";


function ArticleGeneral() {
  const postsGeneral = useSelector((state) => state.GENERAL.postsGeneral.list);
  const currentPage = useSelector((state) => state.GENERAL.postsGeneral.currentPage);
  const totalPage = useSelector((state) => state.GENERAL.postsGeneral.totalPage);
  const dispatch = useDispatch()
  const handleMore = () => {
    dispatch(actFetchArticlesGeneralAsync(currentPage + 1));
  };


  return (
    <div className="articles-list section">
      <div className="tcl-container">
        {/* Main Title */}
        <MainTitle btnLabel="Xem them">Bai Viet Tong Hop</MainTitle>
        {/* End Main Title */}
        {/* End Row News List */}
        <div className="tcl-row">
          {/* <div className="tcl-col-12 tcl-col-md-6">
            <ArticleItem isStyleCard isShowAvatar={false} />
          </div>
          <div className="tcl-col-12 tcl-col-md-6">
            <ArticleItem isStyleCard isShowAvatar={false} />
          </div>
          <div className="tcl-col-12 tcl-col-md-6">
            <ArticleItem isStyleCard isShowAvatar={false} />
          </div>
          <div className="tcl-col-12 tcl-col-md-6">
            <ArticleItem isStyleCard isShowAvatar={false} />
          </div> */}
          {postsGeneral.map((item) => (
            <div key={item.id} className="tcl-col-12 tcl-col-md-6">
              <ArticleItem isStyleCard isShowAvatar={false} data={item} />
            </div>
          ))}
        </div>
        {/* End Row News List */}
        <div className="text-center">
          {
            currentPage < totalPage && (
              <Button type="primary" size="large" loading={true} onClick={handleMore}>Tải thêm</Button>
            )
          }
        </div>
      </div>
    </div>
  )
}

export default ArticleGeneral