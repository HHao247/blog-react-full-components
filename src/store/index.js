import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import postReducer from './post/reducer';
import menuReducer from './menu/reducer';
import categories from './categories/reducer';
import reducerUser from './user/reducer';

const rootReducer = combineReducers({
  POST: postReducer,
  MENU: menuReducer,
  CATEGORIES: categories,
  USER: reducerUser
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
