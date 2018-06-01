import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import App from './App';

test('renders correctly', () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
});

test('renders p', () => {
    const app = shallow(<App />);
    expect(app.find('p')).toHaveLength(1);
});
