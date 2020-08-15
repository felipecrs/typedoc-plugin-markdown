import * as Handlebars from 'handlebars';

import { setup } from '../../../test/utils';

describe(`[helpers] declarationTitle`, () => {
  let project: any;

  beforeAll(() => {
    ({ project } = setup());
  });

  test(`should compile`, () => {
    expect(Handlebars.helpers.declarationTitle.call(project.findReflectionByName('color'))).toMatchSnapshot();
  });
});
