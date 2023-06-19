import { ACT_FETCH_ALL_SEARCH_POST_BY_CATEGORIES, ACT_GET_LIST_CATEGORIES } from "./actions";


const initState = {
  categories: [],
  searchCategories: {
    list: [],
    currentPage: 1,
    totalPage: 9,
  },
}
function reducer(state = initState, action) {
  switch (action.type) {
    case ACT_GET_LIST_CATEGORIES:
      return {
        ...state,
        categories: action.payload
      }
    default:
      return state;
    case ACT_FETCH_ALL_SEARCH_POST_BY_CATEGORIES:
      return {
        ...state,
        searchCategories: {
          ...state.searchCategories,
          list:
            action.payload.currentPage === 1
              ? [action.payload.posts]
              : [...state.searchCategories.list, action.payload.posts],
          currentPage: action.payload.currentPage,
          totalPage: action.payload.totalPage,
        },
      };
  }
}
export default reducer