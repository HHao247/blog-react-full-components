import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { actFetchCommentAsync } from "../../store/comment/actions";

function CommentAction({ restTotal, parent, currentPage, postId }) {
  const dispatch = useDispatch();

  const { id } = useSelector((state) => state.POST.postDetail);

  const dataParentComment = useSelector((state) => (state.COMMENT.dataParentComment));

  const handleLoadMore = (e) => {
    e.preventDefault();
    dispatch(
      actFetchCommentAsync({ postId: id, currentPage: currentPage + 1, parent, exclude: (dataParentComment.exclude).join(',') })
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
