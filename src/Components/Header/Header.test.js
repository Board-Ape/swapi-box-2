import React from 'react';
import { configure, shallow, mount } from 'enzyme';
import Header from './Header';
import Adapter from 'enzyme-adapter-react-15';

configure({ adapter: new Adapter() });

describe('Header test', () => {
  it('should render correctly', () => {
    const renderedHeader = shallow(<Header />);

    expect(renderedHeader.find('.header-component').length).toEqual(1);
  });

  it('should receive props', () => {
    const renderedHeader = mount(<Header numberOfFavorites={8} />);

    expect(renderedHeader.props().numberOfFavorites).toEqual(8);
  });

  it('should match the snapshot', () => {
    const renderedHeader = shallow(<Header numberOfFavorites={5} />);

    expect(renderedHeader).toMatchSnapshot();
  });
});
