
import { ACT_FETCH_ARTICLES_GENERAL, ACT_FETCH_ARTICLES_LATEST, ACT_FETCH_ARTICLES_POPULAR, ACT_FETCH_DETAIL_PAGE } from './actions';


const initState = {
  postsLatest: [],
  postsPopular: [],
  postsGeneral: {
    list: [],
    currentPage: 1,
    totalPage: 0
  },
  postDetail:[],
};

function reducer(state = initState, action) {
  switch (action.type) {
    case ACT_FETCH_ARTICLES_LATEST:
      return {
        ...state,
        postsLatest: action.payload,
      };
    case ACT_FETCH_ARTICLES_POPULAR:
      return {
        ...state,
        postsPopular: action.payload,
      };
    case ACT_FETCH_ARTICLES_GENERAL:
      return {
        ...state,
        postsGeneral: {
          ...state.postsGeneral,
          currentPage: action.payload.currentPage,
          totalPage: action.payload.totalPage,
          list: action.payload.currentPage === 1 ? action.payload.posts : [...state.postsGeneral.list, ...action.payload.posts]
        },
      };
    case ACT_FETCH_DETAIL_PAGE:
      return {
        ...state,
        postDetail: action.payload,
      };
    default:
      return state;
  }
}
export default reducer;


