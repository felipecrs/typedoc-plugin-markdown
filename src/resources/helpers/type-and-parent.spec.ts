import * as Handlebars from 'handlebars';

import { setup } from '../../../test/utils';

describe(`[helpers] typeAndParent`, () => {
  let project: any;

  beforeAll(() => {
    ({ project } = setup());
  });

  test(`should compile`, () => {
    const data = project.findReflectionByName('BaseClass');
    const result = Handlebars.helpers.typeAndParent.call(data.children[3].implementationOf);
    expect(result).toMatchSnapshot();
  });
});
