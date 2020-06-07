import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducer';

const logAction = store => {
    return next => {
      return action => {
        const result = next(action);
        // console.log(
        //   `[caught in the middleware] - ${JSON.stringify(store.getState())}`
        // );
        return result;
      };
    };
  }
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  export const store = createStore(reducer, composeEnhancers(applyMiddleware(logAction,thunk)));