import { createStore, combineReducers } from 'redux';
import todos from '../reducers/test';

const store = createStore(
  combineReducers({ todos }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

store.dispatch({
  type: 'ADD_TODO',
  text: 'sdfsdfsdfsdfsdf',
});

export default store;
