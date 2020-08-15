import * as Handlebars from 'handlebars';

import { setup } from '../../../test/utils';

describe(`[helpers] type`, () => {
  let project: any;

  beforeAll(() => {
    ({ project } = setup());
  });

  test(`should compile intrinsic type`, () => {
    const data = project.findReflectionByName('color');
    const result = Handlebars.helpers.type.call(data.type);
    expect(result).toMatchSnapshot();
  });
});
