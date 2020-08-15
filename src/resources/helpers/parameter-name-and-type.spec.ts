import * as Handlebars from 'handlebars';

import { setup } from '../../../test/utils';

describe(`[helpers] parameterNameAndType`, () => {
  let project: any;

  beforeAll(() => {
    ({ project } = setup());
  });

  test(`sould compile`, () => {
    const data = project.findReflectionByName('objectLiteral');
    const result = Handlebars.helpers.parameterNameAndType.call(data);
    expect(result).toMatchSnapshot();
  });
});
