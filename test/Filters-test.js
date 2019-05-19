import React from 'react';
import { expect } from 'chai';
import Enzyme, { shallow } from 'enzyme';
import sinon from 'sinon';
import Adapter from 'enzyme-adapter-react-16';
import Filters from '../src/components/Filters';

Enzyme.configure({ adapter: new Adapter() });

const FILTERS_STATE = {
  type: 'all'
};

describe('<Filters />', () => {
  describe('Animal type', () => {
    it('should call the `onChangeType` prop callback when the animal type select changes', () => { return true });
  });

  describe('Finding pets', () => {
    it('should call the `onFindPetsClick` callback prop when the "Find pets" button is clicked', () => { return true });
  });
});
