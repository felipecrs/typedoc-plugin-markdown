export function buildName(firstName: string, lastName?: string) {
  if (lastName) {
    return firstName + ' ' + lastName;
  } else {
    return firstName;
  }
}

/**
 * This is an internal function.
 */
export function internalFunction(): void {}

/**
 * This is a simple exported function.
 */
export function exportedFunction(): void {}

/**
 * This is a function with multiple arguments and a return value.
 *
 * @param paramZ - This is a string parameter.
 * @param paramG - This is a parameter flagged with any.
 *     This sentence is placed in the next line.
 *
 * @param paramA
 *   This is a **parameter** pointing to an interface.
 *
 *   ~~~
 *   const value:BaseClass = new BaseClass('test');
 *   functionWithArguments('arg', 0, value);
 *   ~~~
 *
 * @returns This is the return value of the function.
 */
export function functionWithParameters(paramZ: string, paramG: any, paramA: any): number {
  return 0;
}

/**
 * This is a function that is assigned to a variable.
 *
 * @param someParam  This is some numeric parameter.
 * @return This is the return value of the function.
 */
export const variableFunction = (someParam: number) => {
  return 0;
};

/**
 * This is a function with a parameter that is optional.
 *
 * @param requiredParam  A normal parameter.
 * @param optionalParam  An optional parameter.
 */
export function functionWithOptionalValue(requiredParam: string, optionalParam?: string) {}

/**
 * This is a function with a parameter that has a default value.
 *
 * @param valueA  A parameter with a default string value.
 * @param valueB  A parameter with a default numeric value.
 * @param valueC  A parameter with a default NaN value.
 * @param valueD  A parameter with a default boolean value.
 * @param valueE  A parameter with a default null value.
 * @return This is the return value of the function.
 */
export function functionWithDefaults(
  valueA = 'defaultValue',
  valueB = 100,
  valueC: number = Number.NaN,
  valueD = true,
  valueE: boolean = null,
): string {
  return valueA;
}

/**
 * This is a function with rest parameter.
 *
 * @param rest  The rest parameter.
 * @return This is the return value of the function.
 */
export function functionWithRest(...rest: string[]): string {
  return rest.join(', ');
}
