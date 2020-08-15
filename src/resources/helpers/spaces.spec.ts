import * as Handlebars from 'handlebars';

import { setup } from '../../../test/utils';

describe(`[helpers] spaces`, () => {
  beforeAll(() => {
    setup();
  });

  test(`should compile spaces helper`, () => {
    const result = Handlebars.helpers.spaces.call(this, 3);
    expect(result).toEqual('!spaces   ');
  });
});
