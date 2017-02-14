import expect from 'expect';
import { fontReducer } from '../reducers/fontReducer';
import * as actions from '../actions/fontActions';

describe( 'Font Reducer', () => {

  it('Should change text size when passed UPDATE_FONT_SIZE', () => {

    //initial state
    const initialState = {
        name:'Miss Magnolia',
        size:'24',
        styles:['regular'],
        liveText:'Miss Magnolia by Every-Tuesday from the Learn Font Making Class'
    };

    const newFontSize = '30';

    //Setup action that gets called
    const action = actions.setFontSize(newFontSize);

    //call reducer
    const newState = fontReducer(initialState, action);

    expect(action.type).toEqual('UPDATE_FONT_SIZE');

    expect(newState.size).toEqual('30');

  });

});