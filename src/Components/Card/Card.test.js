import React from 'react';
import ReactDOM from 'react-dom';
import { configure, shallow, mount } from 'enzyme';
import Card from './Card';
import Adapter from 'enzyme-adapter-react-15';

configure({ adapter: new Adapter() });

describe('Card test', () => {
  it('should render correctly', () => {
    const renderedCard = shallow(<Card />);

    expect(renderedCard.find('.card-component').length).toEqual(1);
  });
});
