import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';

configure({ adapter: new Adapter() });

describe('App test', () => {
  it.skip('should render correctly', () => {
    const renderedCard = shallow(<App />);

    expect(renderedCard.find('.app').length).toEqual(1);
  });


});
