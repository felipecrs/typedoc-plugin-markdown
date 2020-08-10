[typedoc-plugin-markdown](../README.md) › ["classes"](../modules/_classes_.md) › [NonGenericClass](_classes_.nongenericclass.md)

# Class: NonGenericClass

This a non generic class derived from a [generic class](_classes_.genericclass.md).

## Hierarchy

* [GenericClass](_classes_.genericclass.md)‹[SubClassB](_classes_.subclassb.md)›

  ↳ **NonGenericClass**

## Index

### Constructors

* [constructor](_classes_.nongenericclass.md#constructor)

### Properties

* [p2](_classes_.nongenericclass.md#protected-p2)
* [p3](_classes_.nongenericclass.md#p3)
* [p5](_classes_.nongenericclass.md#readonly-p5)
* [value](_classes_.nongenericclass.md#value)

### Methods

* [getValue](_classes_.nongenericclass.md#getvalue)
* [setValue](_classes_.nongenericclass.md#setvalue)

## Constructors

###  constructor

\+ **new NonGenericClass**(`p1`: any, `p2`: [SubClassB](_classes_.subclassb.md), `p3`: number, `p4`: number, `p5`: string): *[NonGenericClass](_classes_.nongenericclass.md)*

*Inherited from [GenericClass](_classes_.genericclass.md).[constructor](_classes_.genericclass.md#constructor)*

*Defined in [classes.ts:263](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/cb4f845/test/stubs/src/classes.ts#L263)*

Constructor short text.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`p1` | any | Constructor param |
`p2` | [SubClassB](_classes_.subclassb.md) | Private string property |
`p3` | number | Public number property |
`p4` | number | Public implicit any property |
`p5` | string | Readonly property  |

**Returns:** *[NonGenericClass](_classes_.nongenericclass.md)*

## Properties

Property | Type | Description |
------ | ------ | ------ |
**`Protected`** `p2` | [SubClassB](_classes_.subclassb.md) | Private string property |
`p3` | number | Public number property |
**`Readonly`** `p5` | string | Readonly property  |
`value` | [SubClassB](_classes_.subclassb.md) | - |

## Methods

###  getValue

▸ **getValue**(): *[SubClassB](_classes_.subclassb.md)*

*Inherited from [GenericClass](_classes_.genericclass.md).[getValue](_classes_.genericclass.md#getvalue)*

*Defined in [classes.ts:283](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/cb4f845/test/stubs/src/classes.ts#L283)*

**Returns:** *[SubClassB](_classes_.subclassb.md)*

___

###  setValue

▸ **setValue**(`value`: [SubClassB](_classes_.subclassb.md)): *void*

*Inherited from [GenericClass](_classes_.genericclass.md).[setValue](_classes_.genericclass.md#setvalue)*

*Defined in [classes.ts:279](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/cb4f845/test/stubs/src/classes.ts#L279)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`value` | [SubClassB](_classes_.subclassb.md) | [getValue](_classes_.nongenericclass.md#getvalue) is the counterpart.  |

**Returns:** *void*
