[typedoc-plugin-markdown](../README.md) › [subthemes/vuepress](../modules/subthemes_vuepress.md) › [VuePressTheme](subthemes_vuepress.vuepresstheme.md)

# Class: VuePressTheme

Creates `api-sidebar.json` in `.vuepress` directory.
May be used in `.vuepress/config.json` as follows:

**`example`** 
const apiSideBar = require("./api-sidebar.json");
const apiSideBarRelative = require('./api-sidebar-relative.json');

// Without groups
module.exports = {
  themeConfig: {
    sidebar: ["some-content", ...apiSideBar]
  }
};

// With groups
module.exports = {
  themeConfig: {
    sidebar: ["some-content", { title: "API", children: apiSideBar }]
  }
};

// Multiple Sidebar
module.exports = {
  themeConfig: {
    sidebar: {
      '/guide/': ['some-content'],
      '/api/': apiSideBarRelative,
      '/': ['other'],
    },
  },
};

## Hierarchy

  ↳ [MarkdownTheme](reflection-1330.reflection-1.markdowntheme.md)

  ↳ **VuePressTheme**

## Implements

* ComponentHost

## Index

### Constructors

* [constructor](subthemes_vuepress.vuepresstheme.md#constructor)

### Properties

* [basePath](subthemes_vuepress.vuepresstheme.md#basepath)
* [componentName](subthemes_vuepress.vuepresstheme.md#componentname)
* [fileExt](subthemes_vuepress.vuepresstheme.md#fileext)
* [indexName](subthemes_vuepress.vuepresstheme.md#indexname)
* [resources](subthemes_vuepress.vuepresstheme.md#resources)
* [MAPPINGS](subthemes_vuepress.vuepresstheme.md#static-mappings)
* [URL_PREFIX](subthemes_vuepress.vuepresstheme.md#static-url_prefix)
* [handlebars](subthemes_vuepress.vuepresstheme.md#static-handlebars)
* [isSingleFile](subthemes_vuepress.vuepresstheme.md#static-issinglefile)

### Accessors

* [application](subthemes_vuepress.vuepresstheme.md#application)
* [owner](subthemes_vuepress.vuepresstheme.md#owner)

### Methods

* [allowedDirectoryListings](subthemes_vuepress.vuepresstheme.md#alloweddirectorylistings)
* [applyAnchorUrl](subthemes_vuepress.vuepresstheme.md#applyanchorurl)
* [bubble](subthemes_vuepress.vuepresstheme.md#protected-bubble)
* [buildUrls](subthemes_vuepress.vuepresstheme.md#buildurls)
* [findRoot](subthemes_vuepress.vuepresstheme.md#findroot)
* [getEntryPoint](subthemes_vuepress.vuepresstheme.md#getentrypoint)
* [getNavObject](subthemes_vuepress.vuepresstheme.md#getnavobject)
* [getNavigation](subthemes_vuepress.vuepresstheme.md#getnavigation)
* [getOptionDeclarations](subthemes_vuepress.vuepresstheme.md#getoptiondeclarations)
* [getUrl](subthemes_vuepress.vuepresstheme.md#geturl)
* [getUrls](subthemes_vuepress.vuepresstheme.md#geturls)
* [initialize](subthemes_vuepress.vuepresstheme.md#protected-initialize)
* [isOutputDirectory](subthemes_vuepress.vuepresstheme.md#isoutputdirectory)
* [listenTo](subthemes_vuepress.vuepresstheme.md#listento)
* [listenToOnce](subthemes_vuepress.vuepresstheme.md#listentoonce)
* [off](subthemes_vuepress.vuepresstheme.md#off)
* [on](subthemes_vuepress.vuepresstheme.md#on)
* [onRendererEnd](subthemes_vuepress.vuepresstheme.md#onrendererend)
* [once](subthemes_vuepress.vuepresstheme.md#once)
* [stopListening](subthemes_vuepress.vuepresstheme.md#stoplistening)
* [toAnchorRef](subthemes_vuepress.vuepresstheme.md#toanchorref)
* [toUrl](subthemes_vuepress.vuepresstheme.md#tourl)
* [trigger](subthemes_vuepress.vuepresstheme.md#trigger)
* [writeSideBar](subthemes_vuepress.vuepresstheme.md#writesidebar)
* [formatContents](subthemes_vuepress.vuepresstheme.md#static-formatcontents)
* [getMapping](subthemes_vuepress.vuepresstheme.md#static-getmapping)

## Constructors

###  constructor

\+ **new VuePressTheme**(`renderer`: Renderer, `basePath`: string): *[VuePressTheme](subthemes_vuepress.vuepresstheme.md)*

*Overrides [MarkdownTheme](reflection-1330.reflection-1.markdowntheme.md).[constructor](reflection-1330.reflection-1.markdowntheme.md#constructor)*

*Defined in [src/subthemes/vuepress/theme.ts:41](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/6e2e388/src/subthemes/vuepress/theme.ts#L41)*

**Parameters:**

Name | Type |
------ | ------ |
`renderer` | Renderer |
`basePath` | string |

**Returns:** *[VuePressTheme](subthemes_vuepress.vuepresstheme.md)*

## Properties

###  basePath

• **basePath**: *string*

*Inherited from [MarkdownTheme](reflection-1330.reflection-1.markdowntheme.md).[basePath](reflection-1330.reflection-1.markdowntheme.md#basepath)*

Defined in node_modules/typedoc/dist/lib/output/theme.d.ts:8

___

###  componentName

• **componentName**: *string*

*Inherited from [MarkdownPlugin](reflection-1330.reflection-1.markdownplugin.md).[componentName](reflection-1330.reflection-1.markdownplugin.md#componentname)*

Defined in node_modules/typedoc/dist/lib/utils/component.d.ts:28

___

###  fileExt

• **fileExt**: *string* = ".md"

*Inherited from [MarkdownTheme](reflection-1330.reflection-1.markdowntheme.md).[fileExt](reflection-1330.reflection-1.markdowntheme.md#fileext)*

*Defined in [src/theme.ts:72](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/6e2e388/src/theme.ts#L72)*

___

###  indexName

• **indexName**: *string* = "README"

*Inherited from [MarkdownTheme](reflection-1330.reflection-1.markdowntheme.md).[indexName](reflection-1330.reflection-1.markdowntheme.md#indexname)*

*Defined in [src/theme.ts:69](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/6e2e388/src/theme.ts#L69)*

___

###  resources

• **resources**: *Resources*

*Inherited from [MarkdownTheme](reflection-1330.reflection-1.markdowntheme.md).[resources](reflection-1330.reflection-1.markdowntheme.md#resources)*

Defined in node_modules/typedoc/dist/lib/output/theme.d.ts:9

___

### `Static` MAPPINGS

▪ **MAPPINGS**: *TemplateMapping[]* = [
    {
      kind: [ReflectionKind.Class],
      isLeaf: false,
      directory: 'classes',
      template: 'reflection.hbs',
    },
    {
      kind: [ReflectionKind.Interface],
      isLeaf: false,
      directory: 'interfaces',
      template: 'reflection.hbs',
    },
    {
      kind: [ReflectionKind.Enum],
      isLeaf: false,
      directory: 'enums',
      template: 'reflection.hbs',
    },
    {
      kind: [ReflectionKind.Namespace, ReflectionKind.Module],
      isLeaf: false,
      directory: 'modules',
      template: 'reflection.hbs',
    },
  ]

*Inherited from [MarkdownTheme](reflection-1330.reflection-1.markdowntheme.md).[MAPPINGS](reflection-1330.reflection-1.markdowntheme.md#static-mappings)*

*Defined in [src/theme.ts:30](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/6e2e388/src/theme.ts#L30)*

**`see`** DefaultTheme.MAPPINGS

___

### `Static` URL_PREFIX

▪ **URL_PREFIX**: *RegExp‹›* = /^(http|ftp)s?:\/\//

*Inherited from [MarkdownTheme](reflection-1330.reflection-1.markdowntheme.md).[URL_PREFIX](reflection-1330.reflection-1.markdowntheme.md#static-url_prefix)*

*Defined in [src/theme.ts:60](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/6e2e388/src/theme.ts#L60)*

**`see`** DefaultTheme.URL_PREFIX

___

### `Static` handlebars

▪ **handlebars**: *Handlebars* = Handlebars.create()

*Inherited from [MarkdownTheme](reflection-1330.reflection-1.markdowntheme.md).[handlebars](reflection-1330.reflection-1.markdowntheme.md#static-handlebars)*

*Defined in [src/theme.ts:63](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/6e2e388/src/theme.ts#L63)*

___

### `Static` isSingleFile

▪ **isSingleFile**: *boolean* = false

*Inherited from [MarkdownTheme](reflection-1330.reflection-1.markdowntheme.md).[isSingleFile](reflection-1330.reflection-1.markdowntheme.md#static-issinglefile)*

*Defined in [src/theme.ts:66](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/6e2e388/src/theme.ts#L66)*

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

###  allowedDirectoryListings

▸ **allowedDirectoryListings**(): *string[]*

*Inherited from [MarkdownTheme](reflection-1330.reflection-1.markdowntheme.md).[allowedDirectoryListings](reflection-1330.reflection-1.markdowntheme.md#alloweddirectorylistings)*

*Defined in [src/theme.ts:114](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/6e2e388/src/theme.ts#L114)*

**Returns:** *string[]*

___

###  applyAnchorUrl

▸ **applyAnchorUrl**(`reflection`: Reflection, `container`: Reflection): *void*

*Inherited from [MarkdownTheme](reflection-1330.reflection-1.markdowntheme.md).[applyAnchorUrl](reflection-1330.reflection-1.markdowntheme.md#applyanchorurl)*

*Defined in [src/theme.ts:235](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/6e2e388/src/theme.ts#L235)*

Similar to DefaultTheme.applyAnchorUrl method with added but the anchors are computed from the reflection structure
Generate an anchor url for the given reflection and all of its children.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`reflection` | Reflection | The reflection an anchor url should be created for. |
`container` | Reflection | The nearest reflection having an own document.  |

**Returns:** *void*

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

###  buildUrls

▸ **buildUrls**(`reflection`: DeclarationReflection, `urls`: UrlMapping[]): *UrlMapping[]*

*Inherited from [MarkdownTheme](reflection-1330.reflection-1.markdowntheme.md).[buildUrls](reflection-1330.reflection-1.markdowntheme.md#buildurls)*

*Defined in [src/theme.ts:178](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/6e2e388/src/theme.ts#L178)*

This is mostly a copy of the TypeDoc DefaultTheme.buildUrls method with .html ext switched to .md
Builds the url for the the given reflection and all of its children.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`reflection` | DeclarationReflection | The reflection the url should be created for. |
`urls` | UrlMapping[] | The array the url should be appended to. |

**Returns:** *UrlMapping[]*

The altered urls array.

___

###  findRoot

▸ **findRoot**(`outputDirectory`: string): *any*

*Defined in [src/subthemes/vuepress/theme.ts:100](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/6e2e388/src/subthemes/vuepress/theme.ts#L100)*

**Parameters:**

Name | Type |
------ | ------ |
`outputDirectory` | string |

**Returns:** *any*

___

###  getEntryPoint

▸ **getEntryPoint**(`project`: ProjectReflection): *ContainerReflection*

*Inherited from [MarkdownTheme](reflection-1330.reflection-1.markdowntheme.md).[getEntryPoint](reflection-1330.reflection-1.markdowntheme.md#getentrypoint)*

*Defined in [src/theme.ts:269](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/6e2e388/src/theme.ts#L269)*

Copy of default theme DefaultTheme.getEntryPoint

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`project` | ProjectReflection |   |

**Returns:** *ContainerReflection*

___

###  getNavObject

▸ **getNavObject**(`renderer`: RendererEvent, `docsRoot`: string): *any[]*

*Defined in [src/subthemes/vuepress/theme.ts:80](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/6e2e388/src/subthemes/vuepress/theme.ts#L80)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`renderer` | RendererEvent | - |
`docsRoot` | string | "" |

**Returns:** *any[]*

___

###  getNavigation

▸ **getNavigation**(`project`: ProjectReflection): *NavigationItem‹›*

*Inherited from [MarkdownTheme](reflection-1330.reflection-1.markdowntheme.md).[getNavigation](reflection-1330.reflection-1.markdowntheme.md#getnavigation)*

*Overrides void*

*Defined in [src/theme.ts:286](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/6e2e388/src/theme.ts#L286)*

**Parameters:**

Name | Type |
------ | ------ |
`project` | ProjectReflection |

**Returns:** *NavigationItem‹›*

___

###  getOptionDeclarations

▸ **getOptionDeclarations**(): *DeclarationOption[]*

*Inherited from [MarkdownPlugin](reflection-1330.reflection-1.markdownplugin.md).[getOptionDeclarations](reflection-1330.reflection-1.markdownplugin.md#getoptiondeclarations)*

Defined in node_modules/typedoc/dist/lib/utils/component.d.ts:33

**Returns:** *DeclarationOption[]*

___

###  getUrl

▸ **getUrl**(`reflection`: Reflection, `relative?`: Reflection, `separator`: string): *string*

*Inherited from [MarkdownTheme](reflection-1330.reflection-1.markdowntheme.md).[getUrl](reflection-1330.reflection-1.markdowntheme.md#geturl)*

*Defined in [src/theme.ts:218](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/6e2e388/src/theme.ts#L218)*

**`see`** DefaultTheme.getUrl
Return a url for the given reflection.

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`reflection` | Reflection | - | The reflection the url should be generated for. |
`relative?` | Reflection | - | The parent reflection the url generation should stop on. |
`separator` | string | "." | The separator used to generate the url. |

**Returns:** *string*

The generated url.

___

###  getUrls

▸ **getUrls**(`project`: ProjectReflection): *UrlMapping[]*

*Inherited from [MarkdownTheme](reflection-1330.reflection-1.markdowntheme.md).[getUrls](reflection-1330.reflection-1.markdowntheme.md#geturls)*

*Overrides void*

*Defined in [src/theme.ts:135](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/6e2e388/src/theme.ts#L135)*

This method is essentially a copy of the TypeDocs DefaultTheme.getUrls with extensions swapped out to .md
Map the models of the given project to the desired output files.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`project` | ProjectReflection | The project whose urls should be generated. |

**Returns:** *UrlMapping[]*

A list of [[UrlMapping]] instances defining which models
                should be rendered to which files.

___

### `Protected` initialize

▸ **initialize**(): *void*

*Inherited from [MarkdownTheme](reflection-1330.reflection-1.markdowntheme.md).[initialize](reflection-1330.reflection-1.markdowntheme.md#protected-initialize)*

Defined in node_modules/typedoc/dist/lib/utils/component.d.ts:31

**Returns:** *void*

___

###  isOutputDirectory

▸ **isOutputDirectory**(`outputDirectory`: string): *boolean*

*Inherited from [MarkdownTheme](reflection-1330.reflection-1.markdowntheme.md).[isOutputDirectory](reflection-1330.reflection-1.markdowntheme.md#isoutputdirectory)*

*Overrides void*

*Defined in [src/theme.ts:93](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/6e2e388/src/theme.ts#L93)*

Test if directory is output directory

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`outputDirectory` | string |   |

**Returns:** *boolean*

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

###  onRendererEnd

▸ **onRendererEnd**(`renderer`: RendererEvent): *void*

*Defined in [src/subthemes/vuepress/theme.ts:47](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/6e2e388/src/subthemes/vuepress/theme.ts#L47)*

**Parameters:**

Name | Type |
------ | ------ |
`renderer` | RendererEvent |

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

###  toAnchorRef

▸ **toAnchorRef**(`reflection`: Reflection): *string*

*Inherited from [MarkdownTheme](reflection-1330.reflection-1.markdowntheme.md).[toAnchorRef](reflection-1330.reflection-1.markdowntheme.md#toanchorref)*

*Defined in [src/theme.ts:253](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/6e2e388/src/theme.ts#L253)*

Converts a reflection to anchor ref

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`reflection` | Reflection |   |

**Returns:** *string*

___

###  toUrl

▸ **toUrl**(`mapping`: TemplateMapping, `reflection`: DeclarationReflection): *string*

*Inherited from [MarkdownTheme](reflection-1330.reflection-1.markdowntheme.md).[toUrl](reflection-1330.reflection-1.markdowntheme.md#tourl)*

*Defined in [src/theme.ts:205](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/6e2e388/src/theme.ts#L205)*

Returns the full url of a given mapping and reflection

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`mapping` | TemplateMapping | - |
`reflection` | DeclarationReflection |   |

**Returns:** *string*

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

___

###  writeSideBar

▸ **writeSideBar**(`renderer`: RendererEvent, `root`: string): *void*

*Defined in [src/subthemes/vuepress/theme.ts:58](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/6e2e388/src/subthemes/vuepress/theme.ts#L58)*

**Parameters:**

Name | Type |
------ | ------ |
`renderer` | RendererEvent |
`root` | string |

**Returns:** *void*

___

### `Static` formatContents

▸ **formatContents**(`contents`: string): *string*

*Inherited from [MarkdownTheme](reflection-1330.reflection-1.markdowntheme.md).[formatContents](reflection-1330.reflection-1.markdowntheme.md#static-formatcontents)*

*Defined in [src/theme.ts:418](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/6e2e388/src/theme.ts#L418)*

**Parameters:**

Name | Type |
------ | ------ |
`contents` | string |

**Returns:** *string*

___

### `Static` getMapping

▸ **getMapping**(`reflection`: DeclarationReflection): *TemplateMapping | undefined*

*Inherited from [MarkdownTheme](reflection-1330.reflection-1.markdowntheme.md).[getMapping](reflection-1330.reflection-1.markdowntheme.md#static-getmapping)*

*Defined in [src/theme.ts:414](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/6e2e388/src/theme.ts#L414)*

**`see`** DefaultTheme.getMapping
Return the template mapping fore the given reflection.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`reflection` | DeclarationReflection | The reflection whose mapping should be resolved. |

**Returns:** *TemplateMapping | undefined*

The found mapping or undefined if no mapping could be found.
