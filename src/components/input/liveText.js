import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class liveText extends React.Component {

  constructor( props, context ) {
    super(props, context);
  }

  render() {

    let {text, size} = this.props;
    let style = {
      fontSize: size + 'px'
    };

    return (
      <div className="fp-live-text" contentEditable="true" suppressContentEditableWarning="true">
        <span style={style}>{text}</span>
      </div>
    );
  }
}

liveText.propTypes = {
  text: PropTypes.string,
  size: PropTypes.string
};

// pass on which props we want on this component
// ownProps are props already on the component we want to use
const mapStateToProps = ( state, ownProps ) => {
  return {
    text: state.font.liveText,
    size: state.font.size
  };
};

export default connect(mapStateToProps)(liveText);