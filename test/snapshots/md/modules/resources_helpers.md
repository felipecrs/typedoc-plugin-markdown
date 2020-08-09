[typedoc-plugin-markdown](../README.md) › [resources/helpers](resources_helpers.md)

# Module: resources/helpers

## Index

### Functions

* [breadcrumbs](resources_helpers.md#breadcrumbs)
* [comment](resources_helpers.md#comment)
* [declarationTitle](resources_helpers.md#declarationtitle)
* [getArrayType](resources_helpers.md#getarraytype)
* [getIntersectionType](resources_helpers.md#getintersectiontype)
* [getIntrinsicType](resources_helpers.md#getintrinsictype)
* [getReferenceType](resources_helpers.md#getreferencetype)
* [getStringLiteralType](resources_helpers.md#getstringliteraltype)
* [getTupleType](resources_helpers.md#gettupletype)
* [getUnionType](resources_helpers.md#getuniontype)
* [heading](resources_helpers.md#heading)
* [hierachyLevel](resources_helpers.md#hierachylevel)
* [ifBreadcrumbs](resources_helpers.md#ifbreadcrumbs)
* [ifHasTypeDeclarations](resources_helpers.md#ifhastypedeclarations)
* [ifIndexes](resources_helpers.md#ifindexes)
* [ifIsLiteralType](resources_helpers.md#ifisliteraltype)
* [ifNamedAnchors](resources_helpers.md#ifnamedanchors)
* [ifParentIsObjectLiteral](resources_helpers.md#ifparentisobjectliteral)
* [ifSources](resources_helpers.md#ifsources)
* [literal](resources_helpers.md#literal)
* [memberSymbol](resources_helpers.md#membersymbol)
* [memberTitle](resources_helpers.md#membertitle)
* [newline](resources_helpers.md#newline)
* [objectProperty](resources_helpers.md#objectproperty)
* [parameterNameAndType](resources_helpers.md#parameternameandtype)
* [parameterTable](resources_helpers.md#parametertable)
* [reflectionTitle](resources_helpers.md#reflectiontitle)
* [relativeURL](resources_helpers.md#relativeurl)
* [signatureTitle](resources_helpers.md#signaturetitle)
* [spaces](resources_helpers.md#spaces)
* [stripLineBreaks](resources_helpers.md#striplinebreaks)
* [type](resources_helpers.md#type)
* [typeAndParent](resources_helpers.md#typeandparent)

## Functions

###  breadcrumbs

▸ **breadcrumbs**(`this`: PageEvent): *any*

*Defined in [src/resources/helpers/breadcrumbs.ts:5](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/6e2e388/src/resources/helpers/breadcrumbs.ts#L5)*

**Parameters:**

Name | Type |
------ | ------ |
`this` | PageEvent |

**Returns:** *any*

___

###  comment

▸ **comment**(`this`: string): *any*

*Defined in [src/resources/helpers/comment.ts:3](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/6e2e388/src/resources/helpers/comment.ts#L3)*

**Parameters:**

Name | Type |
------ | ------ |
`this` | string |

**Returns:** *any*

___

###  declarationTitle

▸ **declarationTitle**(`this`: DeclarationReflection, `showSymbol`: boolean): *string*

*Defined in [src/resources/helpers/declaration-title.ts:6](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/6e2e388/src/resources/helpers/declaration-title.ts#L6)*

**Parameters:**

Name | Type |
------ | ------ |
`this` | DeclarationReflection |
`showSymbol` | boolean |

**Returns:** *string*

___

###  getArrayType

▸ **getArrayType**(`model`: ArrayType): *string*

*Defined in [src/resources/helpers/type.ts:72](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/6e2e388/src/resources/helpers/type.ts#L72)*

**Parameters:**

Name | Type |
------ | ------ |
`model` | ArrayType |

**Returns:** *string*

___

###  getIntersectionType

▸ **getIntersectionType**(`model`: IntersectionType): *string*

*Defined in [src/resources/helpers/type.ts:81](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/6e2e388/src/resources/helpers/type.ts#L81)*

**Parameters:**

Name | Type |
------ | ------ |
`model` | IntersectionType |

**Returns:** *string*

___

###  getIntrinsicType

▸ **getIntrinsicType**(`model`: IntrinsicType): *string*

*Defined in [src/resources/helpers/type.ts:89](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/6e2e388/src/resources/helpers/type.ts#L89)*

**Parameters:**

Name | Type |
------ | ------ |
`model` | IntrinsicType |

**Returns:** *string*

___

###  getReferenceType

▸ **getReferenceType**(`model`: ReferenceType): *string*

*Defined in [src/resources/helpers/type.ts:61](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/6e2e388/src/resources/helpers/type.ts#L61)*

**Parameters:**

Name | Type |
------ | ------ |
`model` | ReferenceType |

**Returns:** *string*

___

###  getStringLiteralType

▸ **getStringLiteralType**(`model`: StringLiteralType): *string*

*Defined in [src/resources/helpers/type.ts:93](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/6e2e388/src/resources/helpers/type.ts#L93)*

**Parameters:**

Name | Type |
------ | ------ |
`model` | StringLiteralType |

**Returns:** *string*

___

###  getTupleType

▸ **getTupleType**(`model`: TupleType): *string*

*Defined in [src/resources/helpers/type.ts:85](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/6e2e388/src/resources/helpers/type.ts#L85)*

**Parameters:**

Name | Type |
------ | ------ |
`model` | TupleType |

**Returns:** *string*

___

###  getUnionType

▸ **getUnionType**(`model`: UnionType): *string*

*Defined in [src/resources/helpers/type.ts:77](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/6e2e388/src/resources/helpers/type.ts#L77)*

**Parameters:**

Name | Type |
------ | ------ |
`model` | UnionType |

**Returns:** *string*

___

###  heading

▸ **heading**(`level`: number): *string*

*Defined in [src/resources/helpers/heading.ts:1](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/6e2e388/src/resources/helpers/heading.ts#L1)*

**Parameters:**

Name | Type |
------ | ------ |
`level` | number |

**Returns:** *string*

___

###  hierachyLevel

▸ **hierachyLevel**(`this`: ReferenceType): *string*

*Defined in [src/resources/helpers/hierarchy-level.ts:5](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/6e2e388/src/resources/helpers/hierarchy-level.ts#L5)*

**Parameters:**

Name | Type |
------ | ------ |
`this` | ReferenceType |

**Returns:** *string*

___

###  ifBreadcrumbs

▸ **ifBreadcrumbs**(`this`: PageEvent, `options`: any): *any*

*Defined in [src/resources/helpers/if-breadcrumbs.ts:5](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/6e2e388/src/resources/helpers/if-breadcrumbs.ts#L5)*

**Parameters:**

Name | Type |
------ | ------ |
`this` | PageEvent |
`options` | any |

**Returns:** *any*

___

###  ifHasTypeDeclarations

▸ **ifHasTypeDeclarations**(`this`: SignatureReflection, `truthy`: boolean, `options`: any): *any*

*Defined in [src/resources/helpers/if-has-type-declarations.ts:3](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/6e2e388/src/resources/helpers/if-has-type-declarations.ts#L3)*

**Parameters:**

Name | Type |
------ | ------ |
`this` | SignatureReflection |
`truthy` | boolean |
`options` | any |

**Returns:** *any*

___

###  ifIndexes

▸ **ifIndexes**(`options`: any): *any*

*Defined in [src/resources/helpers/if-indexes.ts:3](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/6e2e388/src/resources/helpers/if-indexes.ts#L3)*

**Parameters:**

Name | Type |
------ | ------ |
`options` | any |

**Returns:** *any*

___

###  ifIsLiteralType

▸ **ifIsLiteralType**(`this`: DeclarationReflection, `truthy`: boolean, `options`: any): *any*

*Defined in [src/resources/helpers/if-is-literal-type.ts:3](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/6e2e388/src/resources/helpers/if-is-literal-type.ts#L3)*

**Parameters:**

Name | Type |
------ | ------ |
`this` | DeclarationReflection |
`truthy` | boolean |
`options` | any |

**Returns:** *any*

___

###  ifNamedAnchors

▸ **ifNamedAnchors**(`options`: any): *any*

*Defined in [src/resources/helpers/if-named-anchors.ts:3](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/6e2e388/src/resources/helpers/if-named-anchors.ts#L3)*

**Parameters:**

Name | Type |
------ | ------ |
`options` | any |

**Returns:** *any*

___

###  ifParentIsObjectLiteral

▸ **ifParentIsObjectLiteral**(`this`: DeclarationReflection, `truthy`: boolean, `options`: any): *any*

*Defined in [src/resources/helpers/if-parent-is-object-literal.ts:3](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/6e2e388/src/resources/helpers/if-parent-is-object-literal.ts#L3)*

**Parameters:**

Name | Type |
------ | ------ |
`this` | DeclarationReflection |
`truthy` | boolean |
`options` | any |

**Returns:** *any*

___

###  ifSources

▸ **ifSources**(`options`: any): *any*

*Defined in [src/resources/helpers/if-sources.ts:3](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/6e2e388/src/resources/helpers/if-sources.ts#L3)*

**Parameters:**

Name | Type |
------ | ------ |
`options` | any |

**Returns:** *any*

___

###  literal

▸ **literal**(`this`: DeclarationReflection): *string*

*Defined in [src/resources/helpers/literal.ts:7](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/6e2e388/src/resources/helpers/literal.ts#L7)*

**Parameters:**

Name | Type |
------ | ------ |
`this` | DeclarationReflection |

**Returns:** *string*

___

###  memberSymbol

▸ **memberSymbol**(`this`: DeclarationReflection): *"\+" | "▸" | "Ƭ" | "▪" | "•"*

*Defined in [src/resources/helpers/member-symbol.ts:3](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/6e2e388/src/resources/helpers/member-symbol.ts#L3)*

**Parameters:**

Name | Type |
------ | ------ |
`this` | DeclarationReflection |

**Returns:** *"\+" | "▸" | "Ƭ" | "▪" | "•"*

___

###  memberTitle

▸ **memberTitle**(`this`: DeclarationReflection): *string*

*Defined in [src/resources/helpers/member-title.ts:3](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/6e2e388/src/resources/helpers/member-title.ts#L3)*

**Parameters:**

Name | Type |
------ | ------ |
`this` | DeclarationReflection |

**Returns:** *string*

___

###  newline

▸ **newline**(): *string*

*Defined in [src/resources/helpers/new-line.ts:1](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/6e2e388/src/resources/helpers/new-line.ts#L1)*

**Returns:** *string*

___

###  objectProperty

▸ **objectProperty**(`md`: any[], `spaceLength`: number, `property`: DeclarationReflection): *void*

*Defined in [src/resources/helpers/literal.ts:18](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/6e2e388/src/resources/helpers/literal.ts#L18)*

**Parameters:**

Name | Type |
------ | ------ |
`md` | any[] |
`spaceLength` | number |
`property` | DeclarationReflection |

**Returns:** *void*

___

###  parameterNameAndType

▸ **parameterNameAndType**(`this`: ParameterReflection, `displaySymbol`: boolean): *string*

*Defined in [src/resources/helpers/parameter-name-and-type.ts:4](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/6e2e388/src/resources/helpers/parameter-name-and-type.ts#L4)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`this` | ParameterReflection | - |
`displaySymbol` | boolean | true |

**Returns:** *string*

___

###  parameterTable

▸ **parameterTable**(`this`: ParameterReflection[]): *string*

*Defined in [src/resources/helpers/parameter-table.ts:7](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/6e2e388/src/resources/helpers/parameter-table.ts#L7)*

**Parameters:**

Name | Type |
------ | ------ |
`this` | ParameterReflection[] |

**Returns:** *string*

___

###  reflectionTitle

▸ **reflectionTitle**(`this`: PageEvent): *string*

*Defined in [src/resources/helpers/reflection-title.ts:3](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/6e2e388/src/resources/helpers/reflection-title.ts#L3)*

**Parameters:**

Name | Type |
------ | ------ |
`this` | PageEvent |

**Returns:** *string*

___

###  relativeURL

▸ **relativeURL**(`url`: string): *any*

*Defined in [src/resources/helpers/relative-url.ts:3](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/6e2e388/src/resources/helpers/relative-url.ts#L3)*

**Parameters:**

Name | Type |
------ | ------ |
`url` | string |

**Returns:** *any*

___

###  signatureTitle

▸ **signatureTitle**(`this`: SignatureReflection, `showSymbol`: boolean): *string*

*Defined in [src/resources/helpers/signature-title.ts:6](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/6e2e388/src/resources/helpers/signature-title.ts#L6)*

**Parameters:**

Name | Type |
------ | ------ |
`this` | SignatureReflection |
`showSymbol` | boolean |

**Returns:** *string*

___

###  spaces

▸ **spaces**(`length`: number): *string*

*Defined in [src/resources/helpers/spaces.ts:1](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/6e2e388/src/resources/helpers/spaces.ts#L1)*

**Parameters:**

Name | Type |
------ | ------ |
`length` | number |

**Returns:** *string*

___

###  stripLineBreaks

▸ **stripLineBreaks**(`this`: string): *string*

*Defined in [src/resources/helpers/strip-line-breaks.ts:1](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/6e2e388/src/resources/helpers/strip-line-breaks.ts#L1)*

**Parameters:**

Name | Type |
------ | ------ |
`this` | string |

**Returns:** *string*

___

###  type

▸ **type**(`this`: ArrayType | IntersectionType | IntrinsicType | ReferenceType | StringLiteralType | TupleType | UnionType | TypeOperatorType): *string | TypeOperatorType‹› | IntersectionType‹› & ReflectionType‹›*

*Defined in [src/resources/helpers/type.ts:15](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/6e2e388/src/resources/helpers/type.ts#L15)*

**Parameters:**

Name | Type |
------ | ------ |
`this` | ArrayType &#124; IntersectionType &#124; IntrinsicType &#124; ReferenceType &#124; StringLiteralType &#124; TupleType &#124; UnionType &#124; TypeOperatorType |

**Returns:** *string | TypeOperatorType‹› | IntersectionType‹› & ReflectionType‹›*

___

###  typeAndParent

▸ **typeAndParent**(`this`: ArrayType | ReferenceType): *string*

*Defined in [src/resources/helpers/type-and-parent.ts:6](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/6e2e388/src/resources/helpers/type-and-parent.ts#L6)*

**Parameters:**

Name | Type |
------ | ------ |
`this` | ArrayType &#124; ReferenceType |

**Returns:** *string*
