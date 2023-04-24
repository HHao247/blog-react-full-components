import { useDispatch } from "react-redux";
import ArticleGeneral from "../components/ArticleGeneral";
import ArticleLatest from "../components/ArticleLatest";
import ArticlePopular from "../components/ArticlePopular";
import { useEffect } from "react";
import { actFetchArticlesLatestAsync } from "../store/latestArticle/actions";
import { actFetchArticlesPopularAsync } from "../store/popularArticles/actions";
import { actFetchArticlesGeneralAsync } from "../store/generalArticles/actions";

function HomePage() {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actFetchArticlesLatestAsync());
    dispatch(actFetchArticlesPopularAsync());
    dispatch(actFetchArticlesGeneralAsync());
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