import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';

configure({ adapter: new Adapter() })

jest.mock('../helper/mock-apiCalls.js')

describe('App test', () => {
  it('should render correctly', () => {
    const renderedApp = shallow(<App />, {disableLifecycleMethods: true});
    expect(renderedApp.find('.app-component').length).toEqual(1);
  })

  it('should set active type correctly when handleUpdateState is called', () => {
  	const renderedApp = shallow(<App />, {disableLifecycleMethods: true});
  	renderedApp.instance().handleUpdateState(0)

  	expect(renderedApp.state('active')).toEqual(0)
  })

  it('should not change active state if incorrect value is passed into handleUpdateState', () => {
  	const renderedApp = shallow(<App />, {disableLifecycleMethods: true});
  	const defaultState = {...renderedApp.state()};

  	renderedApp.instance().handleUpdateState(5)
  	expect(renderedApp.state()).toEqual(defaultState)
  })

  it.skip('should toggle favorite in card when favoriteCard is called', () => {
  	const renderedApp = shallow(<App />, {disableLifecycleMethods: true});
  	const mockCard = {name: 'luke skywalker',
  										id: 1,
  										favorite: false};
  	renderedApp.setState({ items: mockCard })
  	renderedApp.instance().favoriteCard(1);
  })
})
