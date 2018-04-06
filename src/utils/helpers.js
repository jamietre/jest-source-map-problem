import Enzyme, { mount, shallow as _shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });


function shallow(...args) {
  throw new Error('error in shallow');
  return _shallow(...args);
}

export { Enzyme, mount, shallow };

/**
 *
 * Some comments to take up space
 *
 * So when the error manifests
 *
 * It shows some lines
 *
 * From the original code
 *
 * Since the generated code is longer
 *
 * Than the source
 */
