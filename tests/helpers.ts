import Enzyme, { mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15.4';
Enzyme.configure({ adapter: new Adapter() });

export { Enzyme, mount, shallow };
