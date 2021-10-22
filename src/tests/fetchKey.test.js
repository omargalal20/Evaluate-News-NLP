import 'babel-polyfill'

import { formData } from '../client/js/fetchKey'

test('Test Data fetching method', () => {
  expect(formData).toBeDefined();
})