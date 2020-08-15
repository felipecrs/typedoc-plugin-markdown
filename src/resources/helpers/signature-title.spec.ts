import * as Handlebars from 'handlebars';

import { setup } from '../../../test/utils';

describe(`[helpers] signatureTitle`, () => {
  let project: any;

  beforeAll(() => {
    ({ project } = setup());
  });

  test(`should compile`, () => {
    const data = project.findReflectionByName('functionWithParameters');
    const result = Handlebars.helpers.signatureTitle.call(data.signatures[0]);
    expect(result).toMatchSnapshot();
  });
});
