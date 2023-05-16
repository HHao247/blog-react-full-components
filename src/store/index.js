import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import postReducer from './post/reducer';
import menuReducer from './menu/reducer';
import categories from './categories/reducer';

const rootReducer = combineReducers({
  POST: postReducer,
  MENU: menuReducer,
  CATEGORIES: categories,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
