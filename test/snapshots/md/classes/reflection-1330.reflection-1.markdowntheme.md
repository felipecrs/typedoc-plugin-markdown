[typedoc-plugin-markdown](../README.md) › [](../modules/reflection-1330.md) › [](../modules/reflection-1330.reflection-1.md) › [MarkdownTheme](reflection-1330.reflection-1.markdowntheme.md)

# Class: MarkdownTheme

The MarkdownTheme is based on TypeDoc's DefaultTheme @see https://github.com/TypeStrong/typedoc/blob/master/src/lib/output/themes/DefaultTheme.ts.
- html specific components are removed from the renderer
- markdown specefic components have been added

## Hierarchy

* Theme

  ↳ **MarkdownTheme**

  ↳ [BitbucketTheme](subthemes_bitbucket.bitbuckettheme.md)

  ↳ [DocusaurusTheme](subthemes_docusaurus.docusaurustheme.md)

  ↳ [Docusaurus2Theme](subthemes_docusaurus2.docusaurus2theme.md)

  ↳ [GitbookTheme](subthemes_gitbook.gitbooktheme.md)

  ↳ [VuePressTheme](subthemes_vuepress.vuepresstheme.md)

## Implements

* ComponentHost

## Index

### Constructors

* [constructor](reflection-1330.reflection-1.markdowntheme.md#constructor)

### Properties

* [basePath](reflection-1330.reflection-1.markdowntheme.md#basepath)
* [componentName](reflection-1330.reflection-1.markdowntheme.md#componentname)
* [fileExt](reflection-1330.reflection-1.markdowntheme.md#fileext)
* [indexName](reflection-1330.reflection-1.markdowntheme.md#indexname)
* [resources](reflection-1330.reflection-1.markdowntheme.md#resources)
* [MAPPINGS](reflection-1330.reflection-1.markdowntheme.md#static-mappings)
* [URL_PREFIX](reflection-1330.reflection-1.markdowntheme.md#static-url_prefix)
* [handlebars](reflection-1330.reflection-1.markdowntheme.md#static-handlebars)
* [isSingleFile](reflection-1330.reflection-1.markdowntheme.md#static-issinglefile)

### Accessors

* [application](reflection-1330.reflection-1.markdowntheme.md#application)
* [owner](reflection-1330.reflection-1.markdowntheme.md#owner)

### Methods

* [allowedDirectoryListings](reflection-1330.reflection-1.markdowntheme.md#alloweddirectorylistings)
* [applyAnchorUrl](reflection-1330.reflection-1.markdowntheme.md#applyanchorurl)
* [bubble](reflection-1330.reflection-1.markdowntheme.md#protected-bubble)
* [buildUrls](reflection-1330.reflection-1.markdowntheme.md#buildurls)
* [getEntryPoint](reflection-1330.reflection-1.markdowntheme.md#getentrypoint)
* [getNavigation](reflection-1330.reflection-1.markdowntheme.md#getnavigation)
* [getOptionDeclarations](reflection-1330.reflection-1.markdowntheme.md#getoptiondeclarations)
* [getUrl](reflection-1330.reflection-1.markdowntheme.md#geturl)
* [getUrls](reflection-1330.reflection-1.markdowntheme.md#geturls)
* [initialize](reflection-1330.reflection-1.markdowntheme.md#protected-initialize)
* [isOutputDirectory](reflection-1330.reflection-1.markdowntheme.md#isoutputdirectory)
* [listenTo](reflection-1330.reflection-1.markdowntheme.md#listento)
* [listenToOnce](reflection-1330.reflection-1.markdowntheme.md#listentoonce)
* [off](reflection-1330.reflection-1.markdowntheme.md#off)
* [on](reflection-1330.reflection-1.markdowntheme.md#on)
* [onPageEnd](reflection-1330.reflection-1.markdowntheme.md#private-onpageend)
* [once](reflection-1330.reflection-1.markdowntheme.md#once)
* [stopListening](reflection-1330.reflection-1.markdowntheme.md#stoplistening)
* [toAnchorRef](reflection-1330.reflection-1.markdowntheme.md#toanchorref)
* [toUrl](reflection-1330.reflection-1.markdowntheme.md#tourl)
* [trigger](reflection-1330.reflection-1.markdowntheme.md#trigger)
* [formatContents](reflection-1330.reflection-1.markdowntheme.md#static-formatcontents)
* [getMapping](reflection-1330.reflection-1.markdowntheme.md#static-getmapping)

## Constructors

###  constructor

\+ **new MarkdownTheme**(`renderer`: Renderer, `basePath`: string): *[MarkdownTheme](reflection-1330.reflection-1.markdowntheme.md)*

*Overrides void*

*Defined in [src/theme.ts:72](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/6e2e388/src/theme.ts#L72)*

**Parameters:**

Name | Type |
------ | ------ |
`renderer` | Renderer |
`basePath` | string |

**Returns:** *[MarkdownTheme](reflection-1330.reflection-1.markdowntheme.md)*

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

*Defined in [src/theme.ts:72](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/6e2e388/src/theme.ts#L72)*

___

###  indexName

• **indexName**: *string* = "README"

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

*Defined in [src/theme.ts:30](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/6e2e388/src/theme.ts#L30)*

**`see`** DefaultTheme.MAPPINGS

___

### `Static` URL_PREFIX

▪ **URL_PREFIX**: *RegExp‹›* = /^(http|ftp)s?:\/\//

*Defined in [src/theme.ts:60](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/6e2e388/src/theme.ts#L60)*

**`see`** DefaultTheme.URL_PREFIX

___

### `Static` handlebars

▪ **handlebars**: *Handlebars* = Handlebars.create()

*Defined in [src/theme.ts:63](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/6e2e388/src/theme.ts#L63)*

___

### `Static` isSingleFile

▪ **isSingleFile**: *boolean* = false

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

*Defined in [src/theme.ts:114](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/6e2e388/src/theme.ts#L114)*

**Returns:** *string[]*

___

###  applyAnchorUrl

▸ **applyAnchorUrl**(`reflection`: Reflection, `container`: Reflection): *void*

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

###  getEntryPoint

▸ **getEntryPoint**(`project`: ProjectReflection): *ContainerReflection*

*Defined in [src/theme.ts:269](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/6e2e388/src/theme.ts#L269)*

Copy of default theme DefaultTheme.getEntryPoint

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`project` | ProjectReflection |   |

**Returns:** *ContainerReflection*

___

###  getNavigation

▸ **getNavigation**(`project`: ProjectReflection): *NavigationItem‹›*

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

### `Private` onPageEnd

▸ **onPageEnd**(`page`: PageEvent): *void*

*Defined in [src/theme.ts:403](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/6e2e388/src/theme.ts#L403)*

**Parameters:**

Name | Type |
------ | ------ |
`page` | PageEvent |

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

### `Static` formatContents

▸ **formatContents**(`contents`: string): *string*

*Defined in [src/theme.ts:418](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/6e2e388/src/theme.ts#L418)*

**Parameters:**

Name | Type |
------ | ------ |
`contents` | string |

**Returns:** *string*

___

### `Static` getMapping

▸ **getMapping**(`reflection`: DeclarationReflection): *TemplateMapping | undefined*

*Defined in [src/theme.ts:414](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/6e2e388/src/theme.ts#L414)*

**`see`** DefaultTheme.getMapping
Return the template mapping fore the given reflection.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`reflection` | DeclarationReflection | The reflection whose mapping should be resolved. |

**Returns:** *TemplateMapping | undefined*

The found mapping or undefined if no mapping could be found.
