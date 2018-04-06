import React from 'react';
import { shallow } from './utils/helpers';
import { Alert, AlertType } from './alert.jsx';

describe('Alert', () => {
    it('large size', () => {
        const wrapper = shallow(<Alert className="foo" type={AlertType.Info}><span>bar</span></Alert>);

        expect(wrapper.contains(<span>bar</span>));
        expect(wrapper.prop('className')).toEqual('foo alert alert-info');
    });
});
