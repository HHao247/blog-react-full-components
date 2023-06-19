import React from "react";
import { useDispatch } from "react-redux";
import { actFetchCommentAsync } from "../../store/comment/actions";

function CommentAction({ restTotal, parent, currentPage, postId }) {
  const dispatch = useDispatch();
  console.log("hao id", postId);
  const handleLoadMore = (e) => {
    e.preventDefault();
    dispatch(
      actFetchCommentAsync({ postId, currentPage: currentPage + 1, parent })
    );
  };



  if (parent === 0) {
    return (
      <div >
        <a href="/" onClick={handleLoadMore}>
          <i className="fas fa-share fa-flip-vertical" /> Xem thêm {restTotal} câu trả lời
        </a>
      </div>
    );
  } else {
    return (
      <div className="comments__hidden">
        <a href="/" onClick={handleLoadMore}>
          <i className="fas fa-share fa-flip-vertical"></i> Xem thêm {restTotal} câu trả lời
        </a>
      </div>
    );
  }

}

export default CommentAction;
