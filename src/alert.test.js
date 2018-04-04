import assert from 'assert';
import React from 'react';
import { shallow } from '../tests/helpers';
import { Alert, AlertType } from './alert.jsx';

describe('ButtonGroup', () => {
    it('large size', () => {
      const wrapper = shallow(React.createElement(Alert, {
          className: "foo",
          type: AlertType.Info,
        },
        React.createElement('span', null, 'bar')
      ));

      assert.ok(wrapper.contains(<span>bar</span>));
      assert.equal(wrapper.prop('className'), 'foo alert alert-info');
    });
});
