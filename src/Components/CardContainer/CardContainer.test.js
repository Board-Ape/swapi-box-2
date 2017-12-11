import React from 'react';
import ReactDOM from 'react-dom';
import { configure, shallow, mount } from 'enzyme';
import CardContainer from './CardContainer';
import Adapter from 'enzyme-adapter-react-15';

configure({ adapter: new Adapter() });

describe.skip('CardContainer test', () => {
  it('should render correctly', () => {
    const renderedCardContainer = shallow(<CardContainer />);

    expect(renderedCardContainer.find('.CardContainer').length).toEqual(1);
  });
});
