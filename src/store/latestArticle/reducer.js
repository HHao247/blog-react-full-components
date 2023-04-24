
import { ACT_FETCH_ARTICLES_LATEST } from './actions';

const initState = {
  postsLatest: [],
};

function reducer(state = initState, action) {
  switch (action.type) {
    case ACT_FETCH_ARTICLES_LATEST:
      return {
        ...state,
        postsLatest: action.payload,
      };
    default:
      return state;
  }
}
export default reducer;
