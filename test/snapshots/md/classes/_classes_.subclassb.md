[typedoc-plugin-markdown](../README.md) › ["classes"](../modules/_classes_.md) › [SubClassB](_classes_.subclassb.md)

# Class: SubClassB

This is a class that extends another class.

The constructor of the original class should be overwritten.

## Hierarchy

* [BaseClass](_classes_.baseclass.md)

  ↳ **SubClassB**

## Implements

* [INameInterface](../interfaces/_classes_.inameinterface.md)

## Index

### Constructors

* [constructor](_classes_.subclassb.md#constructor)

### Properties

* [kind](_classes_.subclassb.md#protected-kind)
* [name](_classes_.subclassb.md#name)
* [instance](_classes_.subclassb.md#static-instance)
* [instances](_classes_.subclassb.md#static-instances)

### Methods

* [abstractMethod](_classes_.subclassb.md#abstractmethod)
* [arrowFunction](_classes_.subclassb.md#arrowfunction)
* [doSomething](_classes_.subclassb.md#dosomething)
* [getName](_classes_.subclassb.md#getname)
* [setName](_classes_.subclassb.md#setname)
* [caTest](_classes_.subclassb.md#static-catest)
* [getInstance](_classes_.subclassb.md#static-getinstance)
* [getName](_classes_.subclassb.md#static-getname)

## Constructors

###  constructor

\+ **new SubClassB**(`name`: string): *[SubClassB](_classes_.subclassb.md)*

*Overrides [BaseClass](_classes_.baseclass.md).[constructor](_classes_.baseclass.md#constructor)*

*Defined in [classes.ts:246](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/cb4f845/test/stubs/src/classes.ts#L246)*

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |

**Returns:** *[SubClassB](_classes_.subclassb.md)*

## Properties

Property | Type | Description |
------ | ------ | ------ |
**`Protected`** `kind` | number | This is a simple protected member. |
`name` | string | - |
**`Static`** `instance` | [BaseClass](_classes_.baseclass.md) | This is a static member. Static members should not be inherited.  |
**`Static`** `instances` | [BaseClass](_classes_.baseclass.md)[] | - |

## Methods

###  abstractMethod

▸ **abstractMethod**(): *void*

*Overrides [BaseClass](_classes_.baseclass.md).[abstractMethod](_classes_.baseclass.md#abstract-abstractmethod)*

*Defined in [classes.ts:252](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/cb4f845/test/stubs/src/classes.ts#L252)*

**Returns:** *void*

___

###  arrowFunction

▸ **arrowFunction**(`param2`: string, `param1`: number): *void*

*Inherited from [BaseClass](_classes_.baseclass.md).[arrowFunction](_classes_.baseclass.md#arrowfunction)*

*Defined in [classes.ts:130](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/cb4f845/test/stubs/src/classes.ts#L130)*

This is a simple fat arrow function.

**`see`** https://github.com/sebastian-lenz/typedoc/issues/37

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`param2` | string | The second parameter needed by this function. |
`param1` | number | The first parameter needed by this function. |

**Returns:** *void*

___

###  doSomething

▸ **doSomething**(`value`: [string, [SubClassA](_classes_.subclassa.md), [SubClassB](_classes_.subclassb.md)]): *void*

*Defined in [classes.ts:254](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/cb4f845/test/stubs/src/classes.ts#L254)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | [string, [SubClassA](_classes_.subclassa.md), [SubClassB](_classes_.subclassb.md)] |

**Returns:** *void*

___

###  getName

▸ **getName**(): *string*

*Implementation of [INameInterface](../interfaces/_classes_.inameinterface.md)*

*Inherited from [BaseClass](_classes_.baseclass.md).[getName](_classes_.baseclass.md#getname)*

*Defined in [classes.ts:95](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/cb4f845/test/stubs/src/classes.ts#L95)*

This is a simple member function.

It should be inherited by all subclasses. This class has a static
member with the same name, both should be documented.

**Returns:** *string*

Return the name.

___

###  setName

▸ **setName**(`name`: string): *void*

*Inherited from [BaseClass](_classes_.baseclass.md).[setName](_classes_.baseclass.md#setname)*

*Defined in [classes.ts:118](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/cb4f845/test/stubs/src/classes.ts#L118)*

This is a simple member function.

It should be inherited by all subclasses.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`name` | string | The new name.  |

**Returns:** *void*

___

### `Static` caTest

▸ **caTest**(`originalValues`: [BaseClass](_classes_.baseclass.md), `newRecord`: any, `fieldNames`: string[], `mandatoryFields`: string[]): *string*

*Inherited from [BaseClass](_classes_.baseclass.md).[caTest](_classes_.baseclass.md#static-catest)*

*Defined in [classes.ts:153](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/cb4f845/test/stubs/src/classes.ts#L153)*

**`see`** https://github.com/sebastian-lenz/typedoc/issues/42

**Parameters:**

Name | Type |
------ | ------ |
`originalValues` | [BaseClass](_classes_.baseclass.md) |
`newRecord` | any |
`fieldNames` | string[] |
`mandatoryFields` | string[] |

**Returns:** *string*

___

### `Static` getInstance

▸ **getInstance**(): *[BaseClass](_classes_.baseclass.md)*

*Inherited from [BaseClass](_classes_.baseclass.md).[getInstance](_classes_.baseclass.md#static-getinstance)*

*Defined in [classes.ts:146](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/cb4f845/test/stubs/src/classes.ts#L146)*

This is a static function.

Static functions should not be inherited.

**Returns:** *[BaseClass](_classes_.baseclass.md)*

An instance of BaseClass.

___

### `Static` getName

▸ **getName**(): *string*

*Inherited from [BaseClass](_classes_.baseclass.md).[getName](_classes_.baseclass.md#getname)*

*Defined in [classes.ts:107](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/cb4f845/test/stubs/src/classes.ts#L107)*

This is a simple static member function.

Static functions should not be inherited. This class has a
member with the same name, both should be documented.

**Returns:** *string*

Return the name.
