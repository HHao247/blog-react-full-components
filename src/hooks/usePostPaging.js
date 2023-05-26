import React, { useState } from 'react';
import Button from '../components/shared/Button';
import { useDispatch, useSelector } from 'react-redux';
import { actFetchArticlesPagingAsync } from '../store/post/actions';

export function usePostPaging() {
  const { list: posts, currentPage, totalPage } = useSelector((state) => state.POST.postPaging);

  const dispatch = useDispatch()
  const handleLoadMore = () => {
    setLoading(true);
    dispatch(actFetchArticlesPagingAsync({ page: currentPage + 1 })).then((res) => {
      setLoading(false);
    });
  };

  const hasMorePost = currentPage < totalPage
  const [loading, setLoading] = useState(false);

  function renderButtonLoadMore() {
    return (
      hasMorePost && (
        <Button type="primary" size="large" loading={loading} onClick={handleLoadMore}>Tải thêm</Button>
      )
    )
  }
  return {
    renderButtonLoadMore,
    hasMorePost,
    posts
  }
}

