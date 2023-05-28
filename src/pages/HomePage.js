import { useDispatch } from "react-redux";
import ArticleGeneral from "../components/ArticleGeneral";
import ArticleLatest from "../components/ArticleLatest";
import ArticlePopular from "../components/ArticlePopular";
import { useEffect } from "react";
import { actFetchArticlesLatestAsync, actFetchArticlesPagingAsync, actFetchArticlesPopularAsync } from "../store/post/actions";
function HomePage() {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actFetchArticlesLatestAsync());
    dispatch(actFetchArticlesPopularAsync());
    dispatch(actFetchArticlesPagingAsync());
  }, [dispatch]);
  return (
    <>
      <ArticleLatest />
      <ArticlePopular />
      <ArticleGeneral />
    </>
  )
}

export default HomePage