[typedoc-plugin-markdown](../README.md) › ["interfaces"](../modules/_interfaces_.md) › [MixedProperties](_interfaces_.mixedproperties.md)

# Interface: MixedProperties

## Hierarchy

* **MixedProperties**

## Callable

▸ (`source`: string, `subString`: string): *boolean*

Defined in interfaces.ts:19

**Parameters:**

Name | Type |
------ | ------ |
`source` | string |
`subString` | string |

**Returns:** *boolean*

## Index

### Properties

* [color](_interfaces_.mixedproperties.md#optional-color)
* [control](_interfaces_.mixedproperties.md#control)
* [mixedObject](_interfaces_.mixedproperties.md#mixedobject)
* [nestedMixedObject](_interfaces_.mixedproperties.md#nestedmixedobject)
* [shape](_interfaces_.mixedproperties.md#shape)
* [width](_interfaces_.mixedproperties.md#width)
* [x](_interfaces_.mixedproperties.md#optional-readonly-x)
* [y](_interfaces_.mixedproperties.md#readonly-y)

### Methods

* [select](_interfaces_.mixedproperties.md#select)

## Properties

Property | Type | Description |
------ | ------ | ------ |
**`Optional`** `color` | string | Comment for color |
`control` | [Control](../classes/_interfaces_.control.md) | - |
`mixedObject` | { x: string; y: number } | - |
`nestedMixedObject` | { valueA: number[]; valueY: (z: string) => { a: string; b: string }; valueZ: string } | - |
`shape` | [Shape](_interfaces_.shape.md) | - |
`width` | number | - |
**`Optional`** **`Readonly`** `x` | string | - |
**`Readonly`** `y` | number | - |

## Methods

###  select

▸ **select**(): *void*

Defined in interfaces.ts:19

**Returns:** *void*
