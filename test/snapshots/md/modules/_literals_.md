[typedoc-plugin-markdown](../README.md) › ["literals"](_literals_.md)

# Module: "literals"

## Index

### Variables

* [typeLiteral](_literals_.md#let-typeliteral)

### Object literals

* [objectLiteral](_literals_.md#const-objectliteral)

## Variables

### `Let` typeLiteral

• **typeLiteral**: *{ valueA: number; valueB: boolean; valueX: { valueA: number[]; valueY: (z: string) => { a: string; b: string }; valueZ: string }; valueY: () => string; valueZ: string }*

*Defined in [literals.ts:22](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/cb4f845/test/stubs/src/literals.ts#L22)*

#### Type declaration:

Property | Type | Description |
------ | ------ | ------ |
**`Optional`** `valueA` | number | - |
**`Optional`** `valueB` | boolean | - |
`valueX` | { valueA: number[]; valueY: (z: string) => { a: string; b: string }; valueZ: string } | - |
`valueY` | () => string | - |
`valueZ` | string | Comment for valueZ |

## Object literals

### `Const` objectLiteral

▪ **objectLiteral**: *object*

*Defined in [literals.ts:1](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/cb4f845/test/stubs/src/literals.ts#L1)*

Property | Type | Description |
------ | ------ | ------ |
`valueA` | number | - |
`valueB` | boolean | - |
`valueZ` | string | - |
`valueN` | (n: number) => number | Comment for valueN |
`valueY` | () => string | - |
`valueX` | { valueA: number[]; valueZ: string; valueY: (z: string) => { a: string; b: string } } | - |
