import expect from 'expect';
import {createStore, compose, combineReducers} from 'redux';

import intialState from '../reducers/initialState';
import { fontReducer } from '../reducers/fontReducer';
import * as fontActions from '../actions/fontActions';

describe('Store', () => {

  //mirror of state from original app
  const reducer = combineReducers({
    font: fontReducer
  });

  const store = createStore(reducer, intialState);

  it('Should handle loading new font', () => {

    const newFont = {
      name: 'Miss Magnolia',
      size: '24',
      styles: ['regular'],
      liveText: 'Miss Magnolia by Every-Tuesday from the Learn Font Making Class'
    };

    // Create action
    // Could create multiple dispatches to test multiple items
    const action = fontActions.loadFont(newFont);
    store.dispatch(action);

    //assert
    const actualState = store.getState().font; //get the first course as our testable example since we only added one above

    //expect
    // const expected = newFont;

    expect(actualState).toEqual(newFont);
  });

});