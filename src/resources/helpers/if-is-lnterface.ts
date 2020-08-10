import { ReflectionGroup } from 'typedoc/dist/lib/models';

export function ifIsInterface(this: ReflectionGroup, truthy: boolean, options: any) {
  const isInterface = this.title === 'Properties';
  if (isInterface && truthy) {
    return options.fn(this);
  }
  return !isInterface && !truthy ? options.fn(this) : options.inverse(this);
}
