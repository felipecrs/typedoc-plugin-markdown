[typedoc-plugin-markdown](../README.md) › ["classes"](../modules/_classes_.md) › [GenericClass](_classes_.genericclass.md)

# Class: GenericClass ‹**T**›

This is a generic class.

## Type parameters

▪ **T**: *[BaseClass](_classes_.baseclass.md)*

This a type parameter.

## Hierarchy

* **GenericClass**

  ↳ [NonGenericClass](_classes_.nongenericclass.md)

## Index

### Constructors

* [constructor](_classes_.genericclass.md#constructor)

### Properties

* [p2](_classes_.genericclass.md#protected-p2)
* [p3](_classes_.genericclass.md#p3)
* [p4](_classes_.genericclass.md#private-p4)
* [p5](_classes_.genericclass.md#readonly-p5)
* [value](_classes_.genericclass.md#value)

### Methods

* [getValue](_classes_.genericclass.md#getvalue)
* [setValue](_classes_.genericclass.md#setvalue)

## Constructors

###  constructor

\+ **new GenericClass**(`p1`: any, `p2`: T, `p3`: number, `p4`: number, `p5`: string): *[GenericClass](_classes_.genericclass.md)*

*Defined in [classes.ts:263](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/cb4f845/test/stubs/src/classes.ts#L263)*

Constructor short text.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`p1` | any | Constructor param |
`p2` | T | Private string property |
`p3` | number | Public number property |
`p4` | number | Public implicit any property |
`p5` | string | Readonly property  |

**Returns:** *[GenericClass](_classes_.genericclass.md)*

## Properties

Property | Type | Description |
------ | ------ | ------ |
**`Protected`** `p2` | T | Private string property |
`p3` | number | Public number property |
**`Private`** `p4` | number | Public implicit any property |
**`Readonly`** `p5` | string | Readonly property  |
`value` | T | - |

## Methods

###  getValue

▸ **getValue**(): *T*

*Defined in [classes.ts:283](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/cb4f845/test/stubs/src/classes.ts#L283)*

**Returns:** *T*

___

###  setValue

▸ **setValue**(`value`: T): *void*

*Defined in [classes.ts:279](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/cb4f845/test/stubs/src/classes.ts#L279)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`value` | T | [getValue](_classes_.genericclass.md#getvalue) is the counterpart.  |

**Returns:** *void*
