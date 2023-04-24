import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import postReducer from './latestArticle/reducer';
import popularReducer from './popularArticles/reducer'
import generalReducer from './generalArticles/reducer'
import postDetailReducer from './postDetailArticles/reducer'


const rootReducer = combineReducers({
  POST: postReducer,
  POPULAR: popularReducer,
  GENERAL: generalReducer,
  DETAIL: postDetailReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
