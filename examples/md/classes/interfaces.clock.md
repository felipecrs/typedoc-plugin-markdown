[typedoc-plugin-markdown](../README.md) › [interfaces](../modules/interfaces.md) › [Clock](interfaces.clock.md)

# Class: Clock

## Hierarchy

* **Clock**

## Implements

* [ClockInterface](../interfaces/interfaces.clockinterface.md)

## Index

### Constructors

* [constructor](interfaces.clock.md#constructor)

### Properties

* [currentTime](interfaces.clock.md#currenttime)

### Methods

* [setTime](interfaces.clock.md#settime)

## Constructors

###  constructor

\+ **new Clock**(`h`: number, `m`: number): *[Clock](interfaces.clock.md)*

*Defined in [interfaces/class-types.ts:10](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/cb4f845/examples/src/interfaces/class-types.ts#L10)*

**Parameters:**

Name | Type |
------ | ------ |
`h` | number |
`m` | number |

**Returns:** *[Clock](interfaces.clock.md)*

## Properties

###  currentTime

• **currentTime**: *Date* = new Date()

*Implementation of [ClockInterface](../interfaces/interfaces.clockinterface.md).[currentTime](../interfaces/interfaces.clockinterface.md#currenttime)*

*Defined in [interfaces/class-types.ts:7](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/cb4f845/examples/src/interfaces/class-types.ts#L7)*

## Methods

###  setTime

▸ **setTime**(`d`: Date): *void*

*Implementation of [ClockInterface](../interfaces/interfaces.clockinterface.md)*

*Defined in [interfaces/class-types.ts:8](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/cb4f845/examples/src/interfaces/class-types.ts#L8)*

**Parameters:**

Name | Type |
------ | ------ |
`d` | Date |

**Returns:** *void*
