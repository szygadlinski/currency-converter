import React from 'react';
import { shallow } from 'enzyme';
import { CurrencyFormComponent } from './CurrencyForm';

describe('Component CurrencyForm', () => {
  it('should render without crashing', () => {
    const component = shallow(<CurrencyFormComponent />);
    expect(component).toBeTruthy();
  });
});
