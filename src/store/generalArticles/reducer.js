import { ACT_FETCH_ARTICLES_GENERAL } from "./actions";


const initState = {
  postsGeneral: {
    list: [],
    currentPage: 1,
    totalPage: 0
  },
};

function reducer(state = initState, action) {
  switch (action.type) {
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
    default:
      return state;
  }
}

export default reducer;