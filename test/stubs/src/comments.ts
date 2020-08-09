/**
 * Additionally you can link to other classes, members or functions using double square brackets.
 *
 * - Link to an external reflection: [[BaseClass]]
 * - Link to an internal reflection: [[commentsInReturn]]
 * - Link to an undefined reflection: [[VOID]]
 */

export const commentsWithSymbolLinks = true;

/**
 * This is an example of include
 *
 * [[include:class-example.md]] [[include:VOID]]
 *
 * This is an example of handlebars include
 *
 * [[include:class-example.hbs]]
 */
export const commentsWithIncludes = true;

/**
 * @name Tag description on same line
 * @description
 * Tag description on new line
 * - Tag description on another line
 *
 * @deprecated
 * Another tag description
 */
export const commentsWithTags = true;

/**
 * Some comments with fence blocks
 * ```typescript
 * someFunction()
 * ```
 * ```js
 * anotherFunction()
 * ```
 */
export const commentsWithFencedBlock = true;

/**
 * Comments with a return definition
 * @returns Return comments
 */
export function commentsInReturn() {
  return;
}

/**
 * See {@linkcode INameInterface} and [INameInterface's name property]{@link INameInterface.name}.
 * Also, check out {@link https://www.google.com|Google} and
 * {@link https://github.com GitHub}.
 *
 * Taken from http://usejsdoc.org/tags-inline-link.html.
 */
export function functionWithDocLink() {
  return;
}
