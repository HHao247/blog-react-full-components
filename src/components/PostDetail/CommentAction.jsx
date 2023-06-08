import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actFetchCommentsAsync } from '../../store/comment/actions';


function CommentAction(props) {
  const dispatch = useDispatch();

  const { currentPage, restTotal, parent, postId } = props

  function handleLoadMore(e) {
    e.preventDefault();
    dispatch(actFetchCommentsAsync({ post: postId, parent, currentPage: currentPage + 1 }).then(() => {
    }))
  }
  return <button onClick={handleLoadMore}>Xem thêm {restTotal} bình luận</button>;
}

export default CommentAction;
