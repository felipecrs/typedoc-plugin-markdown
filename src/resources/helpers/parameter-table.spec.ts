import * as Handlebars from 'handlebars';

import { setup } from '../../../test/utils';

describe(`[helpers] parameterTable`, () => {
  let project: any;

  beforeAll(() => {
    ({ project } = setup());
  });

  test(`should compile`, () => {
    const data = project.findReflectionByName('functionWithDefaults');
    const result = Handlebars.helpers.parameterTable.call(data.signatures[0].parameters);
    expect(result).toMatchSnapshot();
  });
});
