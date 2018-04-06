import React from 'react';
import { shallow } from './utils/helpers';
import { Alert, AlertType } from './alert.jsx';


describe('Alert', () => {
  it('works', () => {
      const wrapper = shallow(React.createElement(Alert, {
          className: "foo",
          type: AlertType.Info,
        },
        React.createElement('span', null, 'bar')
      ));

      expect(wrapper.contains(
        React.createElement('span', null, 'bar')
      )).toBeTruthy();
      expect(wrapper.prop('className')).toEqual('foo alert alert-info');
    });
});
