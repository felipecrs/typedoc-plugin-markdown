[typedoc-plugin-markdown](../README.md) › [components](../modules/components.md) › [ContextAwareHelpersComponent](components.contextawarehelperscomponent.md)

# Class: ContextAwareHelpersComponent

This component is essentially a combination of TypeDoc's 'MarkedPlugin' and 'MarkedLinksPlugin'.
The options are unchanged , but strips out all of the html configs.

## Hierarchy

* ContextAwareRendererComponent

  ↳ **ContextAwareHelpersComponent**

## Implements

* ComponentHost

## Index

### Constructors

* [constructor](components.contextawarehelperscomponent.md#constructor)

### Properties

* [brackets](components.contextawarehelperscomponent.md#private-brackets)
* [componentName](components.contextawarehelperscomponent.md#componentname)
* [includePattern](components.contextawarehelperscomponent.md#private-includepattern)
* [includes](components.contextawarehelperscomponent.md#private-optional-includes)
* [inlineTag](components.contextawarehelperscomponent.md#private-inlinetag)
* [listInvalidSymbolLinks](components.contextawarehelperscomponent.md#private-listinvalidsymbollinks)
* [mediaDirectory](components.contextawarehelperscomponent.md#private-optional-mediadirectory)
* [mediaPattern](components.contextawarehelperscomponent.md#private-mediapattern)
* [project](components.contextawarehelperscomponent.md#protected-optional-project)
* [publicPath](components.contextawarehelperscomponent.md#private-publicpath)
* [reflection](components.contextawarehelperscomponent.md#protected-optional-reflection)
* [urlPrefix](components.contextawarehelperscomponent.md#protected-urlprefix)
* [warnings](components.contextawarehelperscomponent.md#private-warnings)

### Accessors

* [application](components.contextawarehelperscomponent.md#application)
* [owner](components.contextawarehelperscomponent.md#owner)

### Methods

* [breadcrumb](components.contextawarehelperscomponent.md#breadcrumb)
* [bubble](components.contextawarehelperscomponent.md#protected-bubble)
* [buildLink](components.contextawarehelperscomponent.md#private-buildlink)
* [getOptionDeclarations](components.contextawarehelperscomponent.md#getoptiondeclarations)
* [getRelativeUrl](components.contextawarehelperscomponent.md#getrelativeurl)
* [initialize](components.contextawarehelperscomponent.md#initialize)
* [listenTo](components.contextawarehelperscomponent.md#listento)
* [listenToOnce](components.contextawarehelperscomponent.md#listentoonce)
* [off](components.contextawarehelperscomponent.md#off)
* [on](components.contextawarehelperscomponent.md#on)
* [onBeginPage](components.contextawarehelperscomponent.md#protected-onbeginpage)
* [onBeginRenderer](components.contextawarehelperscomponent.md#protected-onbeginrenderer)
* [onEndRenderer](components.contextawarehelperscomponent.md#onendrenderer)
* [once](components.contextawarehelperscomponent.md#once)
* [parseComments](components.contextawarehelperscomponent.md#parsecomments)
* [replaceBrackets](components.contextawarehelperscomponent.md#private-replacebrackets)
* [replaceInlineTags](components.contextawarehelperscomponent.md#private-replaceinlinetags)
* [stopListening](components.contextawarehelperscomponent.md#stoplistening)
* [trigger](components.contextawarehelperscomponent.md#trigger)

## Constructors

###  constructor

\+ **new ContextAwareHelpersComponent**(`owner`: Renderer | typeof DUMMY_APPLICATION_OWNER): *[ContextAwareHelpersComponent](components.contextawarehelperscomponent.md)*

*Inherited from [MarkdownPlugin](reflection-1330.reflection-1.markdownplugin.md).[constructor](reflection-1330.reflection-1.markdownplugin.md#constructor)*

Defined in node_modules/typedoc/dist/lib/utils/component.d.ts:29

**Parameters:**

Name | Type |
------ | ------ |
`owner` | Renderer &#124; typeof DUMMY_APPLICATION_OWNER |

**Returns:** *[ContextAwareHelpersComponent](components.contextawarehelperscomponent.md)*

## Properties

### `Private` brackets

• **brackets**: *RegExp‹›* = /\[\[([^\]]+)\]\]/g

*Defined in [src/components/helpers.component.ts:42](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/6e2e388/src/components/helpers.component.ts#L42)*

Regular expression for detecting bracket links.

___

###  componentName

• **componentName**: *string*

*Inherited from [MarkdownPlugin](reflection-1330.reflection-1.markdownplugin.md).[componentName](reflection-1330.reflection-1.markdownplugin.md#componentname)*

Defined in node_modules/typedoc/dist/lib/utils/component.d.ts:28

___

### `Private` includePattern

• **includePattern**: *RegExp‹›* = /\[\[include:([^\]]+?)\]\]/g

*Defined in [src/components/helpers.component.ts:32](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/6e2e388/src/components/helpers.component.ts#L32)*

The pattern used to find references in markdown.

___

### `Private` `Optional` includes

• **includes**? : *string*

*Defined in [src/components/helpers.component.ts:22](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/6e2e388/src/components/helpers.component.ts#L22)*

The path referenced files are located in.

___

### `Private` inlineTag

• **inlineTag**: *RegExp‹›* = /(?:\[(.+?)\])?\{@(link|linkcode|linkplain)\s+((?:.|\n)+?)\}/gi

*Defined in [src/components/helpers.component.ts:47](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/6e2e388/src/components/helpers.component.ts#L47)*

Regular expression for detecting inline tags like [...](../modules/reflection-1330.reflection-1.md).

___

### `Private` listInvalidSymbolLinks

• **listInvalidSymbolLinks**: *boolean*

*Defined in [src/components/helpers.component.ts:49](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/6e2e388/src/components/helpers.component.ts#L49)*

___

### `Private` `Optional` mediaDirectory

• **mediaDirectory**? : *string*

*Defined in [src/components/helpers.component.ts:27](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/6e2e388/src/components/helpers.component.ts#L27)*

Path to the output media directory.

___

### `Private` mediaPattern

• **mediaPattern**: *RegExp‹›* = /media:\/\/([^ "\)\]\}]+)/g

*Defined in [src/components/helpers.component.ts:37](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/6e2e388/src/components/helpers.component.ts#L37)*

The pattern used to find media links.

___

### `Protected` `Optional` project

• **project**? : *ProjectReflection*

*Inherited from [ContextAwareHelpersComponent](components.contextawarehelperscomponent.md).[project](components.contextawarehelperscomponent.md#protected-optional-project)*

Defined in node_modules/typedoc/dist/lib/output/components.d.ts:9

___

### `Private` publicPath

• **publicPath**: *string*

*Defined in [src/components/helpers.component.ts:53](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/6e2e388/src/components/helpers.component.ts#L53)*

___

### `Protected` `Optional` reflection

• **reflection**? : *DeclarationReflection*

*Inherited from [ContextAwareHelpersComponent](components.contextawarehelperscomponent.md).[reflection](components.contextawarehelperscomponent.md#protected-optional-reflection)*

Defined in node_modules/typedoc/dist/lib/output/components.d.ts:10

___

### `Protected` urlPrefix

• **urlPrefix**: *RegExp*

*Inherited from [ContextAwareHelpersComponent](components.contextawarehelperscomponent.md).[urlPrefix](components.contextawarehelperscomponent.md#protected-urlprefix)*

Defined in node_modules/typedoc/dist/lib/output/components.d.ts:12

___

### `Private` warnings

• **warnings**: *string[]* = []

*Defined in [src/components/helpers.component.ts:51](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/6e2e388/src/components/helpers.component.ts#L51)*

## Accessors

###  application

• **get application**(): *Application*

*Inherited from [MarkdownPlugin](reflection-1330.reflection-1.markdownplugin.md).[application](reflection-1330.reflection-1.markdownplugin.md#application)*

Defined in node_modules/typedoc/dist/lib/utils/component.d.ts:34

**Returns:** *Application*

___

###  owner

• **get owner**(): *Renderer*

*Inherited from [MarkdownPlugin](reflection-1330.reflection-1.markdownplugin.md).[owner](reflection-1330.reflection-1.markdownplugin.md#owner)*

Defined in node_modules/typedoc/dist/lib/utils/component.d.ts:35

**Returns:** *Renderer*

## Methods

###  breadcrumb

▸ **breadcrumb**(`model`: Reflection, `project`: ProjectReflection, `md`: string[]): *string*

*Defined in [src/components/helpers.component.ts:88](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/6e2e388/src/components/helpers.component.ts#L88)*

**Parameters:**

Name | Type |
------ | ------ |
`model` | Reflection |
`project` | ProjectReflection |
`md` | string[] |

**Returns:** *string*

___

### `Protected` bubble

▸ **bubble**(`name`: Event | EventMap | string, ...`args`: any[]): *this*

*Inherited from [MarkdownPlugin](reflection-1330.reflection-1.markdownplugin.md).[bubble](reflection-1330.reflection-1.markdownplugin.md#protected-bubble)*

Defined in node_modules/typedoc/dist/lib/utils/component.d.ts:32

**Parameters:**

Name | Type |
------ | ------ |
`name` | Event &#124; EventMap &#124; string |
`...args` | any[] |

**Returns:** *this*

___

### `Private` buildLink

▸ **buildLink**(`original`: string, `target`: string, `caption`: string, `monospace?`: boolean): *string*

*Defined in [src/components/helpers.component.ts:192](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/6e2e388/src/components/helpers.component.ts#L192)*

Format a link with the given text and target.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`original` | string | The original link string, will be returned if the target cannot be resolved.. |
`target` | string | The link target. |
`caption` | string | The caption of the link. |
`monospace?` | boolean | Whether to use monospace formatting or not. |

**Returns:** *string*

A html link tag.

___

###  getOptionDeclarations

▸ **getOptionDeclarations**(): *DeclarationOption[]*

*Inherited from [MarkdownPlugin](reflection-1330.reflection-1.markdownplugin.md).[getOptionDeclarations](reflection-1330.reflection-1.markdownplugin.md#getoptiondeclarations)*

Defined in node_modules/typedoc/dist/lib/utils/component.d.ts:33

**Returns:** *DeclarationOption[]*

___

###  getRelativeUrl

▸ **getRelativeUrl**(`absolute`: string): *string*

*Inherited from [ContextAwareHelpersComponent](components.contextawarehelperscomponent.md).[getRelativeUrl](components.contextawarehelperscomponent.md#getrelativeurl)*

Defined in node_modules/typedoc/dist/lib/output/components.d.ts:14

**Parameters:**

Name | Type |
------ | ------ |
`absolute` | string |

**Returns:** *string*

___

###  initialize

▸ **initialize**(): *void*

*Overrides void*

*Defined in [src/components/helpers.component.ts:55](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/6e2e388/src/components/helpers.component.ts#L55)*

**Returns:** *void*

___

###  listenTo

▸ **listenTo**(`obj`: EventDispatcher, `name`: EventMap | string, `callback?`: EventCallback, `priority?`: number): *this*

*Inherited from [MarkdownPlugin](reflection-1330.reflection-1.markdownplugin.md).[listenTo](reflection-1330.reflection-1.markdownplugin.md#listento)*

Defined in node_modules/typedoc/dist/lib/utils/events.d.ts:33

**Parameters:**

Name | Type |
------ | ------ |
`obj` | EventDispatcher |
`name` | EventMap &#124; string |
`callback?` | EventCallback |
`priority?` | number |

**Returns:** *this*

___

###  listenToOnce

▸ **listenToOnce**(`obj`: EventDispatcher, `eventMap`: EventMap): *any*

*Inherited from [MarkdownPlugin](reflection-1330.reflection-1.markdownplugin.md).[listenToOnce](reflection-1330.reflection-1.markdownplugin.md#listentoonce)*

Defined in node_modules/typedoc/dist/lib/utils/events.d.ts:34

**Parameters:**

Name | Type |
------ | ------ |
`obj` | EventDispatcher |
`eventMap` | EventMap |

**Returns:** *any*

▸ **listenToOnce**(`obj`: EventDispatcher, `name`: string, `callback`: EventCallback, `priority?`: number): *any*

*Inherited from [MarkdownPlugin](reflection-1330.reflection-1.markdownplugin.md).[listenToOnce](reflection-1330.reflection-1.markdownplugin.md#listentoonce)*

Defined in node_modules/typedoc/dist/lib/utils/events.d.ts:35

**Parameters:**

Name | Type |
------ | ------ |
`obj` | EventDispatcher |
`name` | string |
`callback` | EventCallback |
`priority?` | number |

**Returns:** *any*

___

###  off

▸ **off**(): *any*

*Inherited from [MarkdownPlugin](reflection-1330.reflection-1.markdownplugin.md).[off](reflection-1330.reflection-1.markdownplugin.md#off)*

Defined in node_modules/typedoc/dist/lib/utils/events.d.ts:30

**Returns:** *any*

▸ **off**(`eventMap`: EventMap | undefined, `context?`: any): *any*

*Inherited from [MarkdownPlugin](reflection-1330.reflection-1.markdownplugin.md).[off](reflection-1330.reflection-1.markdownplugin.md#off)*

Defined in node_modules/typedoc/dist/lib/utils/events.d.ts:31

**Parameters:**

Name | Type |
------ | ------ |
`eventMap` | EventMap &#124; undefined |
`context?` | any |

**Returns:** *any*

▸ **off**(`name`: string | undefined, `callback?`: EventCallback, `context?`: any): *any*

*Inherited from [MarkdownPlugin](reflection-1330.reflection-1.markdownplugin.md).[off](reflection-1330.reflection-1.markdownplugin.md#off)*

Defined in node_modules/typedoc/dist/lib/utils/events.d.ts:32

**Parameters:**

Name | Type |
------ | ------ |
`name` | string &#124; undefined |
`callback?` | EventCallback |
`context?` | any |

**Returns:** *any*

___

###  on

▸ **on**(`eventMap`: EventMap, `context?`: any): *any*

*Inherited from [MarkdownPlugin](reflection-1330.reflection-1.markdownplugin.md).[on](reflection-1330.reflection-1.markdownplugin.md#on)*

Defined in node_modules/typedoc/dist/lib/utils/events.d.ts:24

**Parameters:**

Name | Type |
------ | ------ |
`eventMap` | EventMap |
`context?` | any |

**Returns:** *any*

▸ **on**(`eventMap`: EventMap, `callback?`: EventCallback, `context?`: any, `priority?`: number): *any*

*Inherited from [MarkdownPlugin](reflection-1330.reflection-1.markdownplugin.md).[on](reflection-1330.reflection-1.markdownplugin.md#on)*

Defined in node_modules/typedoc/dist/lib/utils/events.d.ts:25

**Parameters:**

Name | Type |
------ | ------ |
`eventMap` | EventMap |
`callback?` | EventCallback |
`context?` | any |
`priority?` | number |

**Returns:** *any*

▸ **on**(`name`: string, `callback`: EventCallback, `context?`: any, `priority?`: number): *any*

*Inherited from [MarkdownPlugin](reflection-1330.reflection-1.markdownplugin.md).[on](reflection-1330.reflection-1.markdownplugin.md#on)*

Defined in node_modules/typedoc/dist/lib/utils/events.d.ts:26

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |
`callback` | EventCallback |
`context?` | any |
`priority?` | number |

**Returns:** *any*

___

### `Protected` onBeginPage

▸ **onBeginPage**(`page`: PageEvent): *void*

*Inherited from [ContextAwareHelpersComponent](components.contextawarehelperscomponent.md).[onBeginPage](components.contextawarehelperscomponent.md#protected-onbeginpage)*

Defined in node_modules/typedoc/dist/lib/output/components.d.ts:16

**Parameters:**

Name | Type |
------ | ------ |
`page` | PageEvent |

**Returns:** *void*

___

### `Protected` onBeginRenderer

▸ **onBeginRenderer**(`event`: RendererEvent): *void*

*Inherited from [ContextAwareHelpersComponent](components.contextawarehelperscomponent.md).[onBeginRenderer](components.contextawarehelperscomponent.md#protected-onbeginrenderer)*

Defined in node_modules/typedoc/dist/lib/output/components.d.ts:15

**Parameters:**

Name | Type |
------ | ------ |
`event` | RendererEvent |

**Returns:** *void*

___

###  onEndRenderer

▸ **onEndRenderer**(): *void*

*Defined in [src/components/helpers.component.ts:224](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/6e2e388/src/components/helpers.component.ts#L224)*

Triggered when [[Renderer]] is finished

**Returns:** *void*

___

###  once

▸ **once**(`eventMap`: EventMap, `context?`: any): *any*

*Inherited from [MarkdownPlugin](reflection-1330.reflection-1.markdownplugin.md).[once](reflection-1330.reflection-1.markdownplugin.md#once)*

Defined in node_modules/typedoc/dist/lib/utils/events.d.ts:28

**Parameters:**

Name | Type |
------ | ------ |
`eventMap` | EventMap |
`context?` | any |

**Returns:** *any*

▸ **once**(`name`: string, `callback`: EventCallback, `context?`: any, `priority?`: any): *any*

*Inherited from [MarkdownPlugin](reflection-1330.reflection-1.markdownplugin.md).[once](reflection-1330.reflection-1.markdownplugin.md#once)*

Defined in node_modules/typedoc/dist/lib/utils/events.d.ts:29

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |
`callback` | EventCallback |
`context?` | any |
`priority?` | any |

**Returns:** *any*

___

###  parseComments

▸ **parseComments**(`text`: string): *string*

*Defined in [src/components/helpers.component.ts:115](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/6e2e388/src/components/helpers.component.ts#L115)*

Parse the given comemnts string and return the resulting html.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`text` | string | The markdown string that should be parsed. |

**Returns:** *string*

The resulting html string.

___

### `Private` replaceBrackets

▸ **replaceBrackets**(`text`: string): *string*

*Defined in [src/components/helpers.component.ts:159](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/6e2e388/src/components/helpers.component.ts#L159)*

Find all references to symbols within the given text and transform them into a link.

This function is aware of the current context and will try to find the symbol within the
current reflection. It will walk up the reflection chain till the symbol is found or the
root reflection is reached. As a last resort the function will search the entire project
for the given symbol.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`text` | string | The text that should be parsed. |

**Returns:** *string*

The text with symbol references replaced by links.

___

### `Private` replaceInlineTags

▸ **replaceInlineTags**(`text`: string): *string*

*Defined in [src/components/helpers.component.ts:172](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/6e2e388/src/components/helpers.component.ts#L172)*

Find symbol [...](../modules/reflection-1330.reflection-1.md) strings in text and turn into html links

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`text` | string | The string in which to replace the inline tags. |

**Returns:** *string*

The updated string.

___

###  stopListening

▸ **stopListening**(`obj?`: EventDispatcher, `name?`: EventMap | string, `callback?`: EventCallback): *this*

*Inherited from [MarkdownPlugin](reflection-1330.reflection-1.markdownplugin.md).[stopListening](reflection-1330.reflection-1.markdownplugin.md#stoplistening)*

Defined in node_modules/typedoc/dist/lib/utils/events.d.ts:36

**Parameters:**

Name | Type |
------ | ------ |
`obj?` | EventDispatcher |
`name?` | EventMap &#124; string |
`callback?` | EventCallback |

**Returns:** *this*

___

###  trigger

▸ **trigger**(`name`: Event | EventMap | string, ...`args`: any[]): *this*

*Inherited from [MarkdownPlugin](reflection-1330.reflection-1.markdownplugin.md).[trigger](reflection-1330.reflection-1.markdownplugin.md#trigger)*

Defined in node_modules/typedoc/dist/lib/utils/events.d.ts:37

**Parameters:**

Name | Type |
------ | ------ |
`name` | Event &#124; EventMap &#124; string |
`...args` | any[] |

**Returns:** *this*
