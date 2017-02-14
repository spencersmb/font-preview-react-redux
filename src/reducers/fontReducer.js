import * as types from '../actions/actionTypes';
import initialState from './initialState';

export const fontReducer = ( state = initialState.font, action ) => {

  switch(action.type){

    // Load in the Font Object
    case types.LOAD_FONT_SUCCESS:
      return action.font;

    case types.UPDATE_FONT_SIZE:

      //return the font object and update size only..
      return {
        ...state,
        size: action.size
      };

    default:
      return state;
    
  }
  
};