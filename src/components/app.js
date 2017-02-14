// This component handles the APP template used on every page.
import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import FontControls from './controls/fontControls';
import LiveText from './input/liveText';

//These are prop types set on the item when you use it -> {course} destructure it automatically
const FontApp = () => {
  return (
    <div className="fp-shell">
      <FontControls />
      <LiveText />
    </div>
  );
};

FontApp.propTypes = {
  // name: PropTyp$es.string.isRequired
};

export default FontApp;
