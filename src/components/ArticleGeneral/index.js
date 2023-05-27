import { useDispatch, useSelector } from "react-redux";
import ArticleItem from "../ArticleItem";
import Button from "../shared/Button";
import MainTitle from "../shared/MainTitle";
import { actFetchArticlesGeneralAsync } from "../../store/post/actions";
import { useState } from "react";


function ArticleGeneral() {
  const postsGeneral = useSelector((state) => state.POST.postsGeneral.list);
  const currentPage = useSelector((state) => state.POST.postsGeneral.currentPage);
  const totalPage = useSelector((state) => state.POST.postsGeneral.totalPage);
  const dispatch = useDispatch()
  const handleMore = () => {
    setLoading(true);
    dispatch(actFetchArticlesGeneralAsync(currentPage + 1)).then(() => {
      setLoading(false);
    });
  };
  const [loading, setLoading] = useState(false);


  return (
    <div className="articles-list section">
      <div className="tcl-container">
        {/* Main Title */}
        <MainTitle btnLabel="Xem them">Bai Viet Tong Hop</MainTitle>
        <div className="tcl-row">
          {postsGeneral.map((item) => (
            <div key={item.id} className="tcl-col-12 tcl-col-md-6">
              <ArticleItem isStyleCard isShowAvatar={false} data={item} />
            </div>
          ))}
        </div>
        <div className="text-center">
          {
            currentPage < totalPage && (
              <Button type="primary" size="large" loading={loading} onClick={handleMore}>Tải thêm</Button>
            )
          }
        </div>
      </div>
    </div>
  )
}

export default ArticleGeneral