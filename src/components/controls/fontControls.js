import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as fontActions from '../../actions/fontActions';


export class FontControls extends React.Component {

  constructor( props, context ) {
    super(props, context);
    this.handleRangeSlider = this.handleRangeSlider.bind(this);
  }

  handleRangeSlider(event){
    this.props.actions.setFontSize(event.target.value);
  }

  render() {
    let {size} = this.props;

    return (
      <div className="fp-controls">
        <div className="fp-input">
          <input ref="range" className="fp-input__range" type="range" value={size} min="10" max="50" step="1" onChange={this.handleRangeSlider} />
        </div>
        <div className="fp-textSize">
          {size} px
        </div>
      </div>
    );
  }
}

FontControls.propTypes = {
  actions: PropTypes.object.isRequired,
  size: PropTypes.string
};

const mapStateToProps = ( state, ownProps ) => {
  return {
    size: state.font.size
  };
};

const mapDispatchToProps = ( dispatch ) => {
  return {
    actions: bindActionCreators(fontActions, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FontControls);