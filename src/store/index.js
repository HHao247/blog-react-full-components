import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import postReducer from './post/reducer';
import menuReducer from './menu/reducer';
import categories from './categories/reducer';
import reducerUser from './user/reducer';
import commentReducer from './comment/reducer';

const rootReducer = combineReducers({
  POST: postReducer,
  MENU: menuReducer,
  CATEGORIES: categories,
  USER: reducerUser,
  COMMENT: commentReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
