import React from 'react';
import ReactDOM from 'react-dom';
import { configure, shallow, mount } from 'enzyme';
import CardContainer from './CardContainer';
import Adapter from 'enzyme-adapter-react-15';

configure({ adapter: new Adapter() });

const mockItems = [
  {name: 'Luke Skywalker',lineOne: 'Tatooine',lineTwo: 'Human',lineThree: '200,000',favorite: true,id: 1,cardType: 0},
  {name: 'Bespin',lineOne: 'gas giant',lineTwo: '6,000,000',lineThree: 'temperate',lineFour: 'Lobot',favorite: true,id: 102,cardType: 1},
  {name: 'Sand Crawler',lineOne: 'Digger Crawler',lineTwo: 'wheeled',lineThree: '30',favorite: false,id: 207,cardType: 2}
];

describe('CardContainer test', () => {
  it('should render correctly', () => {
    const renderedCardContainer = shallow(<CardContainer items={mockItems}/>);

    expect(renderedCardContainer.find('.card-container-component').length).toEqual(1);
  });

  it('should match the snapshot', () => {
    const renderedCardContainer = shallow(<CardContainer items={mockItems} />);

    expect(renderedCardContainer).toMatchSnapshot();
  });

  it('should render filtered display cards when active equals cardType', () => {
    const renderedCardContainer = shallow(<CardContainer active={0}
                                                         items={mockItems} />);

    expect(renderedCardContainer.find('Card').length).toEqual(1);
  });

  it('should render favorites regardless of cardType when active equals 3', () => {
    const renderedCardContainer = shallow(<CardContainer active={3}
                                                         items={mockItems} />);

    expect(renderedCardContainer.find('Card').length).toEqual(2);
  });
});
