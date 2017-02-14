import * as type from './actionTypes';

export const setFontSize = (size) => {

  return {
    type: type.UPDATE_FONT_SIZE,
    size
  };

};

export const loadFont = (font) => {

  return {
    type: type.LOAD_FONT_SUCCESS,
    font
  };

};