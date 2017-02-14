import React from 'react';
import expect from 'expect';
import {mount, shallow} from 'enzyme';
import {FontControls} from '../components/controls/fontControls';

describe('Font Controls', () => {
  
  let spy = expect.createSpy();
  const props = {
    size: '24',
    actions: {
      setFontSize: spy
    }
  };

  const wrapper = mount(<FontControls {...props} />);

  const rangeInput = wrapper.find('input').first();
  let size = '30';

  it('Sets initial font size on load', () => {

    // check input type, length, and initial prop value to front end
    expect(rangeInput.prop('type')).toBe('range');
    expect(rangeInput.length).toBe(1);
    expect(rangeInput.props().value).toBe('24');

  });

  it('Calls fontAction: setFontSize() on change', () => {

    rangeInput.simulate('change', { target: { value: '30'} } );
    expect(spy).toHaveBeenCalledWith(
      size
    );

  });

  it('Expect Range value size to change with State', () => {
    wrapper.setProps({size: size});
    expect(rangeInput.props().value).toEqual('30');
  });

});