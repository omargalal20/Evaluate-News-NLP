import 'babel-polyfill'

import { handleSubmit } from '../client/js/formHandler'

test('test submit process handling', () => {
  expect(handleSubmit).toBeDefined();
})