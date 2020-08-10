[typedoc-plugin-markdown](../README.md) › ["comments"](_comments_.md)

# Module: "comments"

## Index

### Variables

* [commentsWithFencedBlock](_comments_.md#const-commentswithfencedblock)
* [commentsWithIncludes](_comments_.md#const-commentswithincludes)
* [commentsWithSymbolLinks](_comments_.md#const-commentswithsymbollinks)
* [commentsWithTags](_comments_.md#const-commentswithtags)

### Functions

* [commentsInReturn](_comments_.md#commentsinreturn)
* [functionWithDocLink](_comments_.md#functionwithdoclink)

## Variables

### `Const` commentsWithFencedBlock

• **commentsWithFencedBlock**: *true* = true

*Defined in [comments.ts:42](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/cb4f845/test/stubs/src/comments.ts#L42)*

Some comments with fence blocks
```typescript
someFunction()
```
```js
anotherFunction()
```

___

### `Const` commentsWithIncludes

• **commentsWithIncludes**: *true* = true

*Defined in [comments.ts:20](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/cb4f845/test/stubs/src/comments.ts#L20)*

This is an example of include

This is a simple example on how to use include.

![My image alt text](../media/logo.png)

![My not found image](media://VOID.png)
 

This is an example of handlebars include

This is a simple example on a handlebars file.

___

### `Const` commentsWithSymbolLinks

• **commentsWithSymbolLinks**: *true* = true

*Defined in [comments.ts:9](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/cb4f845/test/stubs/src/comments.ts#L9)*

Additionally you can link to other classes, members or functions using double square brackets.

- Link to an external reflection: [BaseClass](../classes/_classes_.baseclass.md)
- Link to an internal reflection: [commentsInReturn](_comments_.md#commentsinreturn)
- Link to an undefined reflection: [[VOID]]

___

### `Const` commentsWithTags

• **commentsWithTags**: *true* = true

*Defined in [comments.ts:31](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/cb4f845/test/stubs/src/comments.ts#L31)*

**`name`** Tag description on same line

**`description`** 
Tag description on new line
- Tag description on another line

**`deprecated`** 
Another tag description

## Functions

###  commentsInReturn

▸ **commentsInReturn**(): *void*

*Defined in [comments.ts:48](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/cb4f845/test/stubs/src/comments.ts#L48)*

Comments with a return definition

**Returns:** *void*

Return comments

___

###  functionWithDocLink

▸ **functionWithDocLink**(): *void*

*Defined in [comments.ts:59](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/cb4f845/test/stubs/src/comments.ts#L59)*

See [`INameInterface`](../interfaces/_classes_.inameinterface.md) and [INameInterface's name property](../interfaces/_classes_.inameinterface.md#name).
Also, check out [Google](https://www.google.com) and
[GitHub](https://github.com).

Taken from http://usejsdoc.org/tags-inline-link.html.

**Returns:** *void*
