import React from 'react';
import { shallow, render, mount } from 'enzyme';
import AddButton from './AddButton';

describe('AddButton', () => {
  let props;
  let shallowAddButton;
  let renderedAddButton;
  let mountedAddButton;

  const shallowTestComponent = () => {
    if (!shallowAddButton) {
      shallowAddButton = shallow(<AddButton {...props} />);
    }
    return shallowAddButton;
  };

  const renderTestComponent = () => {
    if (!renderedAddButton) {
      renderedAddButton = render(<AddButton {...props} />);
    }
    return renderedAddButton;
  };

  const mountTestComponent = () => {
    if (!mountedAddButton) {
      mountedAddButton = mount(<AddButton {...props} />);
    }
    return mountedAddButton;
  };  

  beforeEach(() => {
    props = {};
    shallowAddButton = undefined;
    renderedAddButton = undefined;
    mountedAddButton = undefined;
  });

  // Shallow / unit tests begin here
 
  // Render / mount / integration tests begin here
  
});
