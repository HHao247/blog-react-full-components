import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { actFetchAllSearchPostByCategoriesAsync } from "../store/categories/actions";
import IconLoading from "../components/shared/IconLoading";
import MainTitle from "../components/shared/MainTitle";
import ArticleItem from "../components/ArticleItem";
import Button from "../components/shared/Button";


function CategoryPage() {
  const data = useSelector((state) => state.CATEGORIES.searchCategories);

  const { list, totalPage, currentPage } = data;

  const params = useParams();

  const slug = params.slug;

  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);
  const [loadingMore, setLoadingMore] = useState(false);

  const hasMorePost = currentPage < totalPage;

  const handleLoadMore = () => {
    setLoadingMore(true);
    dispatch(
      actFetchAllSearchPostByCategoriesAsync({ page: currentPage + 1, slug })
    ).then(() => {
      setLoadingMore(false);
    });
  };

  useEffect(() => {
    setLoading(true);

    dispatch(actFetchAllSearchPostByCategoriesAsync({ slug })).then(() => {
      setLoading(false);
    });
  }, [slug]);

  if (loading === false) {
    return (
      <div className="icon_center">
        <IconLoading width={250} />
      </div>
    )
  }

  return (
    <div className="articles-list section">
      <div className="tcl-container">
        <MainTitle type="search">
          {data.totalPage} kết quả tìm kiếm với Category "
          <span className="search-highlight">{slug}</span>"
          {/* {totalPage} kết quả tìm kiếm với từ khóa "{queryStr}" */}
        </MainTitle>
        <div className="tcl-row tcl-jc-center">
          {list.map((listSearch) => {
            return (
              <div key={listSearch.id} className="tcl-col-12 tcl-col-md-8">
                <ArticleItem
                  isShowCategoies
                  isShowDesc
                  isShowAvatar
                  isStyleCard
                  data={listSearch}
                // queryStr = {queryStr}
                />
              </div>
            );
          })}
        </div>

        <div className="text-center">
          {/*  Tải thêm */}
          {hasMorePost && (
            <Button
              type="primary"
              size="large"
              loading={loadingMore}
              onClick={handleLoadMore}
            >
              Tải thêm
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}

export default CategoryPage;
