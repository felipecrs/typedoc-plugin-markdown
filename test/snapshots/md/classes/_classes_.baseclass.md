[typedoc-plugin-markdown](../README.md) › ["classes"](../modules/_classes_.md) › [BaseClass](_classes_.baseclass.md)

# Class: BaseClass

This is a simple base class.

This is a simple example on how to use include.

![My image alt text](../media/logo.png)

![My not found image](media://VOID.png)

## Hierarchy

* **BaseClass**

  ↳ [SubClassA](_classes_.subclassa.md)

  ↳ [SubClassB](_classes_.subclassb.md)

## Implements

* [INameInterface](../interfaces/_classes_.inameinterface.md)

## Index

### Constructors

* [constructor](_classes_.baseclass.md#constructor)

### Properties

* [internalClass](_classes_.baseclass.md#private-internalclass)
* [kind](_classes_.baseclass.md#protected-kind)
* [name](_classes_.baseclass.md#name)
* [instance](_classes_.baseclass.md#static-instance)
* [instances](_classes_.baseclass.md#static-instances)

### Methods

* [abstractMethod](_classes_.baseclass.md#abstract-abstractmethod)
* [arrowFunction](_classes_.baseclass.md#arrowfunction)
* [checkName](_classes_.baseclass.md#private-checkname)
* [getName](_classes_.baseclass.md#getname)
* [setName](_classes_.baseclass.md#setname)
* [caTest](_classes_.baseclass.md#static-catest)
* [getInstance](_classes_.baseclass.md#static-getinstance)
* [getName](_classes_.baseclass.md#static-getname)

## Constructors

###  constructor

\+ **new BaseClass**(`name`: string): *[BaseClass](_classes_.baseclass.md)*

*Defined in [classes.ts:69](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/cb4f845/test/stubs/src/classes.ts#L69)*

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |

**Returns:** *[BaseClass](_classes_.baseclass.md)*

\+ **new BaseClass**(`source`: [BaseClass](_classes_.baseclass.md)): *[BaseClass](_classes_.baseclass.md)*

*Defined in [classes.ts:71](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/cb4f845/test/stubs/src/classes.ts#L71)*

**Parameters:**

Name | Type |
------ | ------ |
`source` | [BaseClass](_classes_.baseclass.md) |

**Returns:** *[BaseClass](_classes_.baseclass.md)*

## Properties

Property | Type | Description |
------ | ------ | ------ |
**`Private`** `internalClass` | [InternalClass](_classes_.internalclass.md)‹keyof BaseClass› | This is an instance member of an internal class. |
**`Protected`** `kind` | number | This is a simple protected member. |
`name` | string | This is a simple public member. |
**`Static`** `instance` | [BaseClass](_classes_.baseclass.md) | This is a static member. Static members should not be inherited.  |
**`Static`** `instances` | [BaseClass](_classes_.baseclass.md)[] | - |

## Methods

### `Abstract` abstractMethod

▸ **abstractMethod**(): *void*

*Defined in [classes.ts:85](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/cb4f845/test/stubs/src/classes.ts#L85)*

**Returns:** *void*

___

###  arrowFunction

▸ **arrowFunction**(`param2`: string, `param1`: number): *void*

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

### `Private` checkName

▸ **checkName**(): *boolean*

*Defined in [classes.ts:135](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/cb4f845/test/stubs/src/classes.ts#L135)*

This is a private function.

**Returns:** *boolean*

___

###  getName

▸ **getName**(): *string*

*Implementation of [INameInterface](../interfaces/_classes_.inameinterface.md)*

*Defined in [classes.ts:95](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/cb4f845/test/stubs/src/classes.ts#L95)*

This is a simple member function.

It should be inherited by all subclasses. This class has a static
member with the same name, both should be documented.

**Returns:** *string*

Return the name.

___

###  setName

▸ **setName**(`name`: string): *void*

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

*Defined in [classes.ts:146](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/cb4f845/test/stubs/src/classes.ts#L146)*

This is a static function.

Static functions should not be inherited.

**Returns:** *[BaseClass](_classes_.baseclass.md)*

An instance of BaseClass.

___

### `Static` getName

▸ **getName**(): *string*

*Defined in [classes.ts:107](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/cb4f845/test/stubs/src/classes.ts#L107)*

This is a simple static member function.

Static functions should not be inherited. This class has a
member with the same name, both should be documented.

**Returns:** *string*

Return the name.
