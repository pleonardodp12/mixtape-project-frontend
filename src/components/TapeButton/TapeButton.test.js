import React from 'react';
import { shallow, mount } from 'enzyme';

import TapeButton from './TapeButton';

describe('Tape button', () => {
  it('must render a button', () => {
    const wrapper = shallow(<TapeButton type='play'/>);
    expect(wrapper.find('button')).toBeTruthy();
  });
  it('must render the FaPlay icon inside the button passing play as prop', () => {
    const wrapper = shallow(<TapeButton type='play' />);
    expect(wrapper.find('FaPlay')).toHaveLength(1);
  });
  it('must render the FaPause icon inside the button passing pause as prop', () => {
    const wrapper = shallow(<TapeButton type='pause' />);
    expect(wrapper.find('FaPause')).toHaveLength(1);
  });
  it('must render the FaStop icon inside the button passing pause as prop', () => {
    const wrapper = shallow(<TapeButton type='stop' />);
    expect(wrapper.find('FaStop')).toHaveLength(1);
  });
  it('must set a state to active when clicked', () => {
    const setActive = jest.fn();
    const wrapper = mount(<TapeButton onClick={setActive} />);
    const handleClick = jest.spyOn(React, 'useState');
    handleClick.mockImplementation((active) => [active, setActive]);

    wrapper.find('button').simulate('click');
    expect(setActive).toBeTruthy();
  });
  it('must render the correct icon given the right parameter', () => {
    const wrapper = mount(<TapeButton type='play' />);
    expect(wrapper.find('FaPlay')).toHaveLength(1);
  });
});
