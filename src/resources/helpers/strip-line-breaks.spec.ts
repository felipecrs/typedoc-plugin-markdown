import * as Handlebars from 'handlebars';

import { setup } from '../../../test/utils';

describe(`[helpers] stripLineBreaks`, () => {
  beforeAll(() => {
    setup();
  });

  test(`should compile`, () => {
    const result = Handlebars.helpers.stripLineBreaks.call('line 1\n line2\n');
    expect(result).toMatchSnapshot('line 1  line2');
  });
});
