/* eslint-disable no-console */

// import 'babel-polyfill';
import React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';

// Import components
import FontApp from './components/app';

import {loadFont} from './actions/fontActions';
require('style-loader!css-loader?-autoprefixer!postcss-loader!sass-loader!applicationStyles');

import {config} from './store/config.store';

const store = config(); //pass optional initialstate object here into config - like if it comes from a server or something
const font = {
  name: 'Miss Magnolia',
  size: '24',
  styles: ['regular'],
  liveText: 'Miss Magnolia by Every-Tuesday from the Learn Font Making Class'
};

//make call to populate redux with initial data
store.dispatch(loadFont(font));

render (
  <Provider store={store} >
    <FontApp />
  </Provider>,
  document.getElementById('app')
);