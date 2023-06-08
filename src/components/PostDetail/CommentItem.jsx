import React from 'react';
import { useSelector } from 'react-redux';
import { pubDate } from '../../helpers';
import CommentAction from './CommentAction';

function CommentItem(props) {
  const { data } = props;

  const dataChildComment = useSelector((state) => state.COMMENT.dataChildComment);
  const currentDataChildComment = dataChildComment[data.id];
  const { list, currentPage, total } = currentDataChildComment || {
    list: [], currentPage: 0, total: data.comment_reply_count,
  };
  const restTotal = total - list.length;
  return (
    <div className="item">
      <div className="comments__section">
        <div className="comments__section--avatar">
          <a href="/">
            <img src="/assets/images/avatar3.jpg" alt="" />
          </a>
        </div>
        <div className="comments__section--content">
          <a href="/" className="comments__section--user">
            {data.author_name}
          </a>
          <p className="comments__section--time">{pubDate(data.date)}</p>
          <div
            className="comments__section--text"
            dangerouslySetInnerHTML={{ __html: data.content.rendered }}
          ></div>
          {/* <i className="ion-reply comments__section--reply"></i> */}
        </div>
      </div>
      <ul className="comments">
        {list.map((item) => (
          <CommentItem key={item.id} data={item} />
        ))}
      </ul>

      {restTotal > 0 && (
        <CommentAction restTotal={restTotal} parent={data.id} currentPage={currentPage} />
      )}
    </div>
  );
}

export default CommentItem;