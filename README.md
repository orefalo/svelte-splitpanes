# Svelte-Splitpanes

Use dynamic and predictable view panels to layout an application.

![screenshot](./static/screenshot.jpg)

> This library is a port from the excellent [vue-splitpanes](https://antoniandre.github.io/splitpanes/), if you are using this library for business or leasure, please consider [backing the original author](https://github.com/sponsors/antoniandre)!

> While you are at it, you may also [back the developer](https://ko-fi.com/orefalo) who ported the code to Svelte. :blush:

## Why?

To be sucessful, a good framework must come with good components.  
Unfortunatly, we couldn't find any decent split pane layout in the Svelte eco-system.  

But we did find one written in vue.js.  

So we decided to port it and enhance it. :smile:

## Features

- Size is less than 4 kb
- Support both dynamic horizontal and vertical splits
- Support defaults, min and max sizes
- Support multiple splits
- Support lifecyle events
- Support custom divider size and overlay (css)
- Support splitter pane pushing
- Support RTL rendering with auto-detection
- Support first splitter on/off
- Support pane toggle
- Support programmatic resizing
- Support programmatic splitter add/remove
- Support for legacy browser such as IE 11
- Support for touch devices
- Support for fixed splitters
- Sveltekit & Typescript friendly

## Browser Support

| ![Chrome](https://raw.github.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png) | ![Firefox](https://raw.github.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png) | ![Safari](https://raw.github.com/alrra/browser-logos/master/src/safari/safari_48x48.png) | ![Opera](https://raw.github.com/alrra/browser-logos/master/src/opera/opera_48x48.png) | ![Edge](https://raw.github.com/alrra/browser-logos/master/src/edge/edge_48x48.png) | ![IE](https://raw.github.com/alrra/browser-logos/master/src/archive/internet-explorer_9-11/internet-explorer_9-11_48x48.png) |
| ---------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| Latest ✔                                                                                 | Latest ✔                                                                                    | Latest ✔                                                                                 | Latest ✔                                                                              | Latest ✔                                                                           | 10+ ✔                                                                                                                        |

## Demo & Documentation

* [REPL Demo](https://svelte.dev/repl/1e96cbd4bcd148e3b85a4c8ca76d7309?version=3.48.0)
* [More complex demos and examples](https://orefalo.github.io/svelte-splitpanes/)

## Installation

```shell
$ npm i svelte-splitpanes
```

## Usage

```html
<script>
import { Pane, Splitpanes } from 'svelte-splitpanes';
</script>
<Splitpanes class="default-theme" style="height: 400px">
	<Pane minSize="20">1<br /><em class="specs">I have a min width of 20%</em></Pane>
	<Pane>
		<Splitpanes class="default-theme" horizontal="{true}">
			<Pane minSize="15">2<br /><em class="specs">I have a min height of 15%</em></Pane>
			<Pane>3</Pane>
			<Pane>4</Pane>
		</Splitpanes>
	</Pane>
	<Pane>5</Pane>
</Splitpanes>
```

### API

Here is the list of properties that apply to <Splitpanes>

| Parameter name   | Default                     | Comments                                                     |
| ---------------- | --------------------------- | ------------------------------------------------------------ |
| horizontal       | false (Vertical by default) | The orientation of the split panes.                          |
| pushOtherPanes   | true                        | Whether a splitter should push the next splitter when dragging. |
| dblClickSplitter | true                        | Double click on splitter to maximize the next pane           |
| rtl              | "auto"                      | Supports Right to left, by default will auto detect          |
| firstSplitter    | false                       | Displays the first splitter when set to true. This allows maximizing the first pane on splitter double click |
| id               | undefined                   | Provide an optional id attribute to the component for styling/other reasons |
| theme            | 'default-theme'             | Used to styles the splitters using a different css class     |
| class            | undefined                   | Any additional css classes to be added to the component      |

Properties that apply to <Pane>

| Parameter name | Default   | Comments               |
| -------------- | --------- | ---------------------- |
| minSize        | 0         | minimum pane size in % |
| maxSize        | 100       | maximum pane size in % |
| size           | undefined | pane size in %         |
| class          | undefined | Any additional css classes to be added to the component |

### Styling

The component can be further styled after the props have been defined by overriding the default css styling. The best way to do this is to use a class differenciator or the id="" prop and then scope your global css with this class/id.

```css
/* The following classes can be used to style the splitter, see demos*/

.splitpanes {
	background-color: #f8f8f8;
}

.splitpanes__splitter {
	background-color: #ccc;
	position: relative;
}
.splitpanes__splitter:before {
	content: '';
	position: absolute;
	left: 0;
	top: 0;
	transition: opacity 0.4s;
	background-color: rgba(255, 0, 0, 0.3);
	opacity: 0;
	z-index: 1;
}
.splitpanes__splitter:hover:before {
	opacity: 1;
}
.splitpanes--vertical > .splitpanes__splitter:before {
	left: -30px;
	right: -30px;
	height: 100%;
}
.splitpanes--horizontal > .splitpanes__splitter:before {
	top: -30px;
	bottom: -30px;
	width: 100%;
}
```

## Events

The component raises the following events:

| name             | description                                                  | data                                                         |
| ---------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `ready`          | fires when splitpanes is ready                               | none                                                         |
| `resize`         | fires while resizing (on mousemove/touchmove)                | returns an array of all the panes objects with their dimensions |
| `resized`        | fires once when the resizing stops after user drag (on mouseup/touchend) or when adding or removing a pane. | returns an array of all the panes objects with their dimensions |
| `pane-click`     | when clicking (or touching) a pane                           | returns the clicked pane object with its dimensions          |
| `pane-maximize`  | fires when the pane is maximized (ie. typically by double clicking the splitter) | returns the maximized pane object with its dimensions        |
| `pane-add`       | fires when a pane is added                                   | returns an object containing the index of the added pane and the new array of panes after resize |
| `pane-remove`    | fires when a pane is removed                                 | returns an object containing the removed pane and an array of all the remaining pane objects with their dimensions (after resize) |
| `splitter-click` | fires when you click a splitter                              | returns the next pane object (with its dimensions) directly after the clicked splitter. This event is only emitted if dragging did not occur between mousedown and mouseup |



Events are easy to trap

```html
<script>
	function handleMessage(event) {
		console.log(JSON.stringify(event))
	}
</script>
<Splitpanes
	on:ready={handleMessage}
	on:resize={handleMessage}
	on:resized={handleMessage}
	on:pane-click={handleMessage}
	on:pane-maximize={handleMessage}
	on:pane-add={handleMessage}
	on:pane-remove={handleMessage}
	on:splitter-click={handleMessage}
>
```



## Contributing

If you have a great feature, feel free to open a discussion on GitHub to discuss the ideae, you may also fork Splitpanes and submit your changes back as a PR.

### Commiting changes

We have very precise rules over how our git commit messages can be formatted. This leads to **more readable messages** that are easy to follow when looking through the **project history**. But also, we use the git commit messages to **auto-generate the change log**.

The enforcement is made possible by the enablement of several tools which, when put together, enable strick commit goverance.

Commits as accepted, as long as they comply to the _commit message format_.

You may not have to learn the format, to ease the process, we enabled a step-by-step script `npm run commit` which will guide you though the commit phase.



#### Commit Message Format

Each commit message consists of a **header**, a **body** and a **footer**. The header is *mandatory* and has a special format that includes a **type**, an optional **scope** and a **subject**:

```
type(scope?)!?: subject
body?
footer? 
```

Any line of the commit message cannot be longer than 100 characters. This allows the message to be easier to read on GitHub as well as in various git tools.

###### Type

Must be one of the following:

- **build**: Changes that affect the build system or external dependencies (example scopes: npm)
- **ci**: Changes to the CI configuration files and scripts
- **docs**: Documentation only changes
- **feat**: A new feature, increments X.9.X
- **fix**: A bug fix, increments X.X.9
- **wip**: To mark a work in progress
- **perf**: A code change that improves performance
- **refactor**: A code change that neither fixes a bug nor adds a feature
- **style**: Changes that do not affect the meaning of the code (white-space, formatting, missing semicolons, etc.)
- **test**: Adding missing tests or correcting existing tests
- **revert:** for a revert commit

adding a tailing **'!'** marks the commit as a **BREAKING CHANGE** - and will affect version numbering.

###### Scope

The scope should be the component affected (as perceived by the person reading the changelog generated from commit messages). Example scopes include: api, authentication, landing_page…etc

As of now this element is optional.

###### Subject

The subject contains a succinct description of the change:

- use the imperative, present tense: "change" not "changed" nor "changes"
- don't capitalize the first letter
- no dot (.) at the end

### GH Pages (demo site)

GH Pages hold the demo site. The pages are automatically generated by every push to `master`.

#### Manual Build (outdated)

the following command generates the demo site locally in the /docs folder

```shell
# generate new site to /docs
$ npm run build-ghpages
# then commit and push changes to git, github will auto publish
```

### Publishing to npm

Follow these steps to publish the package to npm. Obviously special privileges are required to perform this action.

```shell
$ npm login https://registry.npmjs.org/
...
# generate & update CHANGELOG.md
$ npm run release
# generate the package in /package
$ npm run package
# publish it (requires to be logged into npm from the cli)
$ cd package
$ npm publish --access public
```

