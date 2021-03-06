import * as assert from 'assert';
import * as React from 'react';
import { shallow } from './utils/helpers';
import { Alert, AlertType } from './alert';

jest.mock('classnames')

describe('Alert', () => {
    it('large size', () => {
        const wrapper = shallow(<Alert className="foo" type={AlertType.Info}><span>bar</span></Alert>);

        assert.ok(wrapper.contains(<span>bar</span>));
        assert.equal(wrapper.prop('className'), 'foo alert alert-info');
    });
});
