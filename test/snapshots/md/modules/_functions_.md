[typedoc-plugin-markdown](../README.md) › ["functions"](_functions_.md)

# Module: "functions"

## Index

### Functions

* [buildName](_functions_.md#buildname)
* [exportedFunction](_functions_.md#exportedfunction)
* [functionWithDefaults](_functions_.md#functionwithdefaults)
* [functionWithOptionalValue](_functions_.md#functionwithoptionalvalue)
* [functionWithParameters](_functions_.md#functionwithparameters)
* [functionWithRest](_functions_.md#functionwithrest)
* [internalFunction](_functions_.md#internalfunction)
* [variableFunction](_functions_.md#const-variablefunction)

## Functions

###  buildName

▸ **buildName**(`firstName`: string, `lastName?`: string): *string*

*Defined in [functions.ts:1](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/cb4f845/test/stubs/src/functions.ts#L1)*

**Parameters:**

Name | Type |
------ | ------ |
`firstName` | string |
`lastName?` | string |

**Returns:** *string*

___

###  exportedFunction

▸ **exportedFunction**(): *void*

*Defined in [functions.ts:17](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/cb4f845/test/stubs/src/functions.ts#L17)*

This is a simple exported function.

**Returns:** *void*

___

###  functionWithDefaults

▸ **functionWithDefaults**(`valueA`: string, `valueB`: number, `valueC`: number, `valueD`: boolean, `valueE`: boolean): *string*

*Defined in [functions.ts:68](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/cb4f845/test/stubs/src/functions.ts#L68)*

This is a function with a parameter that has a default value.

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`valueA` | string | "defaultValue" | A parameter with a default string value. |
`valueB` | number | 100 | A parameter with a default numeric value. |
`valueC` | number | Number.NaN | A parameter with a default NaN value. |
`valueD` | boolean | true | A parameter with a default boolean value. |
`valueE` | boolean | null | A parameter with a default null value. |

**Returns:** *string*

This is the return value of the function.

___

###  functionWithOptionalValue

▸ **functionWithOptionalValue**(`requiredParam`: string, `optionalParam?`: string): *void*

*Defined in [functions.ts:56](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/cb4f845/test/stubs/src/functions.ts#L56)*

This is a function with a parameter that is optional.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`requiredParam` | string | A normal parameter. |
`optionalParam?` | string | An optional parameter.  |

**Returns:** *void*

___

###  functionWithParameters

▸ **functionWithParameters**(`paramZ`: string, `paramG`: any, `paramA`: any): *number*

*Defined in [functions.ts:36](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/cb4f845/test/stubs/src/functions.ts#L36)*

This is a function with multiple arguments and a return value.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`paramZ` | string | This is a string parameter. |
`paramG` | any | This is a parameter flagged with any.     This sentence is placed in the next line.  |
`paramA` | any |    This is a **parameter** pointing to an interface.    ~~~   const value:BaseClass = new BaseClass('test');   functionWithArguments('arg', 0, value);   ~~~  |

**Returns:** *number*

This is the return value of the function.

___

###  functionWithRest

▸ **functionWithRest**(...`rest`: string[]): *string*

*Defined in [functions.ts:84](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/cb4f845/test/stubs/src/functions.ts#L84)*

This is a function with rest parameter.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`...rest` | string[] | The rest parameter. |

**Returns:** *string*

This is the return value of the function.

___

###  internalFunction

▸ **internalFunction**(): *void*

*Defined in [functions.ts:12](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/cb4f845/test/stubs/src/functions.ts#L12)*

This is an internal function.

**Returns:** *void*

___

### `Const` variableFunction

▸ **variableFunction**(`someParam`: number): *number*

*Defined in [functions.ts:46](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/cb4f845/test/stubs/src/functions.ts#L46)*

This is a function that is assigned to a variable.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`someParam` | number | This is some numeric parameter. |

**Returns:** *number*

This is the return value of the function.
