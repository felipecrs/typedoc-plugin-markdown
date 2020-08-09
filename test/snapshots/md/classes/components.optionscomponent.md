[typedoc-plugin-markdown](../README.md) › [components](../modules/components.md) › [OptionsComponent](components.optionscomponent.md)

# Class: OptionsComponent

## Hierarchy

* ContextAwareRendererComponent

  ↳ **OptionsComponent**

## Implements

* ComponentHost

## Index

### Constructors

* [constructor](components.optionscomponent.md#constructor)

### Properties

* [componentName](components.optionscomponent.md#componentname)
* [project](components.optionscomponent.md#protected-optional-project)
* [reflection](components.optionscomponent.md#protected-optional-reflection)
* [urlPrefix](components.optionscomponent.md#protected-urlprefix)

### Accessors

* [application](components.optionscomponent.md#application)
* [owner](components.optionscomponent.md#owner)

### Methods

* [bubble](components.optionscomponent.md#protected-bubble)
* [getOptionDeclarations](components.optionscomponent.md#getoptiondeclarations)
* [getRelativeUrl](components.optionscomponent.md#getrelativeurl)
* [initialize](components.optionscomponent.md#initialize)
* [listenTo](components.optionscomponent.md#listento)
* [listenToOnce](components.optionscomponent.md#listentoonce)
* [off](components.optionscomponent.md#off)
* [on](components.optionscomponent.md#on)
* [onBeginPage](components.optionscomponent.md#protected-onbeginpage)
* [onBeginRenderer](components.optionscomponent.md#protected-onbeginrenderer)
* [once](components.optionscomponent.md#once)
* [stopListening](components.optionscomponent.md#stoplistening)
* [trigger](components.optionscomponent.md#trigger)

## Constructors

###  constructor

\+ **new OptionsComponent**(`owner`: Renderer | typeof DUMMY_APPLICATION_OWNER): *[OptionsComponent](components.optionscomponent.md)*

*Inherited from [MarkdownPlugin](reflection-1330.reflection-1.markdownplugin.md).[constructor](reflection-1330.reflection-1.markdownplugin.md#constructor)*

Defined in node_modules/typedoc/dist/lib/utils/component.d.ts:29

**Parameters:**

Name | Type |
------ | ------ |
`owner` | Renderer &#124; typeof DUMMY_APPLICATION_OWNER |

**Returns:** *[OptionsComponent](components.optionscomponent.md)*

## Properties

###  componentName

• **componentName**: *string*

*Inherited from [MarkdownPlugin](reflection-1330.reflection-1.markdownplugin.md).[componentName](reflection-1330.reflection-1.markdownplugin.md#componentname)*

Defined in node_modules/typedoc/dist/lib/utils/component.d.ts:28

___

### `Protected` `Optional` project

• **project**? : *ProjectReflection*

*Inherited from [ContextAwareHelpersComponent](components.contextawarehelperscomponent.md).[project](components.contextawarehelperscomponent.md#protected-optional-project)*

Defined in node_modules/typedoc/dist/lib/output/components.d.ts:9

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

*Defined in [src/components/options.component.ts:7](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/6e2e388/src/components/options.component.ts#L7)*

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
