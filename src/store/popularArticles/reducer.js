import { ACT_FETCH_ARTICLES_POPULAR } from "./actions";

const initState = {
  postsPopular: [],
};
function reducer(state = initState, action) {
  switch (action.type) {
    case ACT_FETCH_ARTICLES_POPULAR:
      return {
        ...state,
        postsPopular: action.payload,
      };

    default:
      return state;
  }
}
export default reducer;
