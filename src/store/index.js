import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import postReducer from './post/reducer';
import menuReducer from './menu/reducer';

const rootReducer = combineReducers({
  POST: postReducer,
  MENU: menuReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
