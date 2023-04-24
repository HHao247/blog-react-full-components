import { ACT_FETCH_DETAIL_PAGE } from './actions';


const initState = {
  postDetail: [],
};

function reducer(state = initState, action) {
  switch (action.type) {
    case ACT_FETCH_DETAIL_PAGE:
      return {
        ...state,
        postDetail: action.payload.posts,
      };
    default:
      return state;
  }
}
export default reducer;
