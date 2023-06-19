import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./comments.css";
import CommentForm from "./CommentForm";
import CommentItem from "./CommentItem";
import CommentAction from "./CommentAction";
import { actFetchCommentAsync } from "../../store/comment/actions";


function PostDetailComments({ id: postId, author }) {
  const dispatch = useDispatch();
  const { list, currentPage, total } = useSelector((state) => state.COMMENT.dataParentComment);

  const restTotal = total - list.length;


  useEffect(() => {
    dispatch(actFetchCommentAsync({ postId, parent: 0, currentPage: 1 }));
  }, [postId]);
  return (
    <div className="post-detail__comments">
      <CommentForm postId={postId} author={author} />
      <p>{restTotal} Comments</p>
      {list.length > 0 && (
        <ul className="comments">
          {list.map((item) => {
            return <CommentItem key={item.id} data={item} />;
          })}
          {restTotal > 0 && (
            <CommentAction restTotal={restTotal} parent={0} currentPage={currentPage} postId={postId}
            />
          )}
        </ul>
      )}
    </div>
  )
}



export default PostDetailComments