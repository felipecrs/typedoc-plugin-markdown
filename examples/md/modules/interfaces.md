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

Defined in interfaces/optional-properties.ts:17

#### Type declaration:

* **area**: *number*

* **color**: *string*

## Functions

###  createSquare

▸ **createSquare**(`config`: [SquareConfig](../interfaces/interfaces.squareconfig.md)): *object*

Defined in interfaces/optional-properties.ts:6

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

Defined in interfaces/simple.ts:5

**Parameters:**

Name | Type |
------ | ------ |
`labeledObj` | [LabeledValue](../interfaces/interfaces.labeledvalue.md) |

**Returns:** *void*
