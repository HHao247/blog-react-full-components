import commentService from "../../services/commentService";

export const ACT_FETCH_COMMENTS_PARENT = "ACT_FETCH_COMMENTS_PARENT";
export const ACT_FETCH_COMMENTS_CHILD = "ACT_FETCH_COMMENTS_CHILD";
export const ACT_POST_NEW_COMMENT = "ACT_POST_NEW_COMMENT";


export const ACT_POST_PARENT_COMMENT = "ACT_POST_PARENT_COMMENT";
export const ACT_POST_CHILD_COMMENT = "ACT_POST_CHILD_COMMENT";

export function actFetchCommentsParent({
  list,
  currentPage,
  totalPages,
  total,
}) {
  return {
    type: ACT_FETCH_COMMENTS_PARENT,
    payload: {
      list,
      currentPage,
      totalPages,
      total,
    },
  };
}

export function actFetchCommentsChild({
  list,
  currentPage,
  total,
  totalPages,
  parent,
}) {
  return {
    type: ACT_FETCH_COMMENTS_CHILD,
    payload: {
      list,
      currentPage,
      total,
      totalPages,
      parent,
    },
  };
}
// export function actPostNewComment({ comment }) {
//   return {
//     type: ACT_POST_NEW_COMMENT,
//     payload: comment,
//   };
// }

export function actFetchCommentAsync({
  postId = 12,
  currentPage = 1,
  parent = 0,
} = {}) {
  return async (dispatch) => {
    const response = await commentService.getAll({
      post: postId,
      parent,
      page: currentPage,
    });
    const total = Number(response.headers["x-wp-total"]);
    const totalPages = Number(response.headers["x-wp-totalpages"]);

    if (parent === 0) {
      dispatch(
        actFetchCommentsParent({
          list: response.data,
          currentPage,
          totalPages,
          total,
        })
      );
    } else {
      dispatch(
        actFetchCommentsChild({
          list: response.data,
          currentPage,
          totalPages,
          total,
          parent,
        })
      );
    }
  };
}

// export function actPostNewCommentAsync(data) {
//   return async (dispatch) => {
//     const response = await commentService.postNewComment(data);
//     dispatch(actPostNewComment({ comment: response.data }));
//   };
// }



export function actPostParentComment(data) {
  return {
    type: ACT_POST_PARENT_COMMENT,
    payload: data,
  };
}

export function actPostChildComment(data, firstTotal) {
  return {
    type: ACT_POST_CHILD_COMMENT,
    payload: {
      data,
      firstTotal
    }
  };
}

export function actPostNewCommentAsync(data, firstTotal) {
  return async (dispatch) => {
    const response = await commentService.postNewComment(data);
    if (response.data.parent === 0) {
      dispatch(actPostParentComment(response.data));
    } else {
      dispatch(actPostChildComment(response.data, firstTotal));
    }
    // dispatch(actPostNewComment({ comment: response.data }));
  };
}

