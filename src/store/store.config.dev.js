import { createStore, compose, combineReducers, applyMiddleware } from 'redux';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk'; //Used for Async opperations
import { fontReducer } from '../reducers/fontReducer';


export const config = ( initialState = {} ) => {

  //mirror of state from original app
  const reducer = combineReducers({
    font: fontReducer
  });

  // return Createstore function here,
  // this will get fired as soon as config runs
  return createStore(
    reducer,
    initialState,
    compose(
      applyMiddleware(reduxImmutableStateInvariant(), thunk),
      window.devToolsExtension ? window.devToolsExtension() : f => f
    )
  );

};