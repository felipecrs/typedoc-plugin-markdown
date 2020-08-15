import * as path from 'path';

import { Application, ProjectReflection } from 'typedoc';
import { ModuleKind, ScriptTarget } from 'typescript';

export interface TestSetup {
  app: Application;
  project: ProjectReflection;
}

export const setup = (): TestSetup => {
  const app = new Application();
  app.bootstrap({
    module: ModuleKind.CommonJS,
    target: ScriptTarget.ES5,
    readme: 'none',
    logger: 'none',
    disableOutputCheck: true,
    plugin: [path.join(__dirname, '../dist/index')],
  });
  const project = app.convert(app.expandInputFiles(['./test/stubs/']));
  app.generateDocs(project, path.join(__dirname, 'tmp'));
  return { app, project };
};

export const handlebarsHelpersOptionsStub = {
  fn: () => 'true',
  inverse: () => 'false',
  hash: {},
};
