import React from 'react';
import { shallow } from 'enzyme';
import { CurrencyForm } from './CurrencyForm';

describe('Component CurrencyForm', () => {
  it('should render without crashing', () => {
    const component = shallow(<CurrencyForm />);
    expect(component).toBeTruthy();
  });
});
