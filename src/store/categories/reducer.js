import { ACT_GET_LIST_CATEGORIES } from "./actions";


const initState ={
  categories:[]
}
function reducer(state = initState, action) {
  switch (action.type) {
    case ACT_GET_LIST_CATEGORIES:
      return{
        ...state,
        categories : action.payload
      }
    default:
      return state;
  }
}
export default reducer