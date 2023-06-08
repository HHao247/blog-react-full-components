import { useDispatch, useSelector } from 'react-redux';
import CommentAction from './CommentAction'
import CommentForm from './CommentForm'
import CommentItem from './CommentItem'
import './comments.css'
import { useEffect } from 'react';
import { actFetchCommentsAsync } from '../../store/comment/actions';


function PostDetailComments({ id: postId }) {

  const dispatch = useDispatch();
  const { list, currentPage, total } = useSelector((state) => state.COMMENT.dataParentComment);
  const restTotal = total - list.length;
  useEffect(() => {
    dispatch(actFetchCommentsAsync({ postId, parent: 0, currentPage: 1 }));
  }, [postId]);

  return (
    <div className="post-detail__comments">
      <CommentForm />
      <p>{restTotal} Comments</p>
      {list.length > 0 && (
        <ul>
          {list.map((item) => (
            <CommentItem key={item.id} data={item} />
          ))}
        </ul>
      )}
      {
        restTotal > 0 && <CommentAction currentPage={currentPage} restTotal={restTotal} parent={0} postId={postId} />
      }

    </div>
  )
}

export default PostDetailComments