import { createStore } from 'redux';
import CartReducer from './CartReducer';

// Create a Redux store with Redux DevTools Extension
const store = createStore(
 CartReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
