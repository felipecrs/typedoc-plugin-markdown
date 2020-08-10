[typedoc-plugin-markdown](../README.md) › ["classes"](../modules/_classes_.md) › [SubClassA](_classes_.subclassa.md)

# Class: SubClassA

This is a class that extends another class.

This class has no own constructor, so its constructor should be inherited
from BaseClass.

## Hierarchy

* [BaseClass](_classes_.baseclass.md)

  ↳ **SubClassA**

## Implements

* [INameInterface](../interfaces/_classes_.inameinterface.md)
* [IPrintNameInterface](../interfaces/_classes_.iprintnameinterface.md)

## Index

### Constructors

* [constructor](_classes_.subclassa.md#constructor)

### Properties

* [kind](_classes_.subclassa.md#protected-kind)
* [name](_classes_.subclassa.md#name)
* [instance](_classes_.subclassa.md#static-instance)
* [instances](_classes_.subclassa.md#static-instances)

### Accessors

* [nameProperty](_classes_.subclassa.md#nameproperty)
* [readOnlyNameProperty](_classes_.subclassa.md#readonlynameproperty)
* [writeOnlyNameProperty](_classes_.subclassa.md#writeonlynameproperty)

### Methods

* [abstractMethod](_classes_.subclassa.md#abstractmethod)
* [arrowFunction](_classes_.subclassa.md#arrowfunction)
* [getName](_classes_.subclassa.md#getname)
* [print](_classes_.subclassa.md#print)
* [printName](_classes_.subclassa.md#printname)
* [setName](_classes_.subclassa.md#setname)
* [caTest](_classes_.subclassa.md#static-catest)
* [getInstance](_classes_.subclassa.md#static-getinstance)
* [getName](_classes_.subclassa.md#static-getname)

## Constructors

###  constructor

\+ **new SubClassA**(`name`: string): *[SubClassA](_classes_.subclassa.md)*

*Inherited from [BaseClass](_classes_.baseclass.md).[constructor](_classes_.baseclass.md#constructor)*

*Defined in [classes.ts:69](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/cb4f845/test/stubs/src/classes.ts#L69)*

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |

**Returns:** *[SubClassA](_classes_.subclassa.md)*

\+ **new SubClassA**(`source`: [BaseClass](_classes_.baseclass.md)): *[SubClassA](_classes_.subclassa.md)*

*Inherited from [BaseClass](_classes_.baseclass.md).[constructor](_classes_.baseclass.md#constructor)*

*Defined in [classes.ts:71](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/cb4f845/test/stubs/src/classes.ts#L71)*

**Parameters:**

Name | Type |
------ | ------ |
`source` | [BaseClass](_classes_.baseclass.md) |

**Returns:** *[SubClassA](_classes_.subclassa.md)*

## Properties

Property | Type | Description |
------ | ------ | ------ |
**`Protected`** `kind` | number | This is a simple protected member. |
`name` | string | - |
**`Static`** `instance` | [BaseClass](_classes_.baseclass.md) | This is a static member. Static members should not be inherited.  |
**`Static`** `instances` | [BaseClass](_classes_.baseclass.md)[] | - |

## Accessors

###  nameProperty

• **get nameProperty**(): *string*

*Defined in [classes.ts:204](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/cb4f845/test/stubs/src/classes.ts#L204)*

Returns the name. See [BaseClass.name](_classes_.baseclass.md#name).

**Returns:** *string*

The return value.

• **set nameProperty**(`value`: string): *void*

*Defined in [classes.ts:214](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/cb4f845/test/stubs/src/classes.ts#L214)*

Sets the name. See [BaseClass.name](_classes_.baseclass.md#name).

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`value` | string | The new name. |

**Returns:** *void*

The return value.

___

###  readOnlyNameProperty

• **get readOnlyNameProperty**(): *string*

*Defined in [classes.ts:223](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/cb4f845/test/stubs/src/classes.ts#L223)*

Returns the name. See [BaseClass.name](_classes_.baseclass.md#name).

**Returns:** *string*

The return value.

___

###  writeOnlyNameProperty

• **set writeOnlyNameProperty**(`value`: string): *void*

*Defined in [classes.ts:233](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/cb4f845/test/stubs/src/classes.ts#L233)*

Sets the name. See [BaseClass.name](_classes_.baseclass.md#name).

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`value` | string | The new name. |

**Returns:** *void*

The return value.

## Methods

###  abstractMethod

▸ **abstractMethod**(): *void*

*Overrides [BaseClass](_classes_.baseclass.md).[abstractMethod](_classes_.baseclass.md#abstract-abstractmethod)*

*Defined in [classes.ts:237](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/cb4f845/test/stubs/src/classes.ts#L237)*

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

###  getName

▸ **getName**(): *string*

*Implementation of [IPrintNameInterface](../interfaces/_classes_.iprintnameinterface.md)*

*Inherited from [BaseClass](_classes_.baseclass.md).[getName](_classes_.baseclass.md#getname)*

*Defined in [classes.ts:95](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/cb4f845/test/stubs/src/classes.ts#L95)*

This is a simple member function.

It should be inherited by all subclasses. This class has a static
member with the same name, both should be documented.

**Returns:** *string*

Return the name.

___

###  print

▸ **print**(`value`: string): *void*

*Implementation of [IPrintNameInterface](../interfaces/_classes_.iprintnameinterface.md)*

*Defined in [classes.ts:190](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/cb4f845/test/stubs/src/classes.ts#L190)*

This is a simple interface function.

**Parameters:**

Name | Type |
------ | ------ |
`value` | string |

**Returns:** *void*

___

###  printName

▸ **printName**(): *void*

*Implementation of [IPrintNameInterface](../interfaces/_classes_.iprintnameinterface.md)*

*Defined in [classes.ts:195](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/cb4f845/test/stubs/src/classes.ts#L195)*

This is a interface function of IPrintNameInterface

**Returns:** *void*

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
