import * as Handlebars from 'handlebars';

import { setup } from '../../../test/utils';

describe(`[helpers] heading`, () => {
  beforeAll(() => {
    setup();
  });

  test(`should compile headings helper`, () => {
    expect(Handlebars.helpers.heading.call(this, 2)).toEqual('##');
  });
});
