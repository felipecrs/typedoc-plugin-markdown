[typedoc-plugin-markdown](../README.md) › [interfaces](interfaces.md)

# Module: interfaces

## Index

### Classes

* [Clock](../classes/interfaces.clock.md)

### Interfaces

* [ClockInterface](../interfaces/interfaces.clockinterface.md)
* [LabeledValue](../interfaces/interfaces.labeledvalue.md)
* [SquareConfig](../interfaces/interfaces.squareconfig.md)

### Variables

* [mySquare](interfaces.md#const-mysquare)

### Functions

* [createSquare](interfaces.md#createsquare)
* [printLabel](interfaces.md#printlabel)

## Variables

### `Const` mySquare

• **mySquare**: *object* = createSquare({ color: 'black' })

*Defined in [interfaces/optional-properties.ts:17](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/cb4f845/examples/src/interfaces/optional-properties.ts#L17)*

#### Type declaration:

* **area**: *number*

* **color**: *string*

## Functions

###  createSquare

▸ **createSquare**(`config`: [SquareConfig](../interfaces/interfaces.squareconfig.md)): *object*

*Defined in [interfaces/optional-properties.ts:6](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/cb4f845/examples/src/interfaces/optional-properties.ts#L6)*

**Parameters:**

Name | Type |
------ | ------ |
`config` | [SquareConfig](../interfaces/interfaces.squareconfig.md) |

**Returns:** *object*

* **area**: *number*

* **color**: *string*

___

###  printLabel

▸ **printLabel**(`labeledObj`: [LabeledValue](../interfaces/interfaces.labeledvalue.md)): *void*

*Defined in [interfaces/simple.ts:5](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/cb4f845/examples/src/interfaces/simple.ts#L5)*

**Parameters:**

Name | Type |
------ | ------ |
`labeledObj` | [LabeledValue](../interfaces/interfaces.labeledvalue.md) |

**Returns:** *void*
