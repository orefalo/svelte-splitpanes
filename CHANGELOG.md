# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## [8.0.5](https://github.com/orefalo/svelte-splitpanes/compare/v8.0.4...v8.0.5) (2024-06-16)


### Miscellaneous Chores

* release 8.0.5 ([9f7ec2e](https://github.com/orefalo/svelte-splitpanes/commit/9f7ec2e317594b4079ccb39a5c1292fb3c705bba))

## [8.0.4](https://github.com/orefalo/svelte-splitpanes/compare/v0.8.3...v8.0.4) (2024-06-16)


### Miscellaneous Chores

* release 8.0.4 ([fbd210a](https://github.com/orefalo/svelte-splitpanes/commit/fbd210a0a598f7c70c98f34fc51d7201fc7288b1))

## [0.8.3](https://github.com/orefalo/svelte-splitpanes/compare/v0.8.2...v0.8.3) (2024-06-15)


### Bug Fixes

* events are now passive by default, remove preventDefaults() in the code ([1bc9045](https://github.com/orefalo/svelte-splitpanes/commit/1bc90455c558e40b174c2270d19ea0e4636d912e))

## [0.8.2](https://github.com/orefalo/svelte-splitpanes/compare/v0.8.1...v0.8.2) (2024-06-10)


### Miscellaneous Chores

* release 0.8.1 ([14170b6](https://github.com/orefalo/svelte-splitpanes/commit/14170b6fe0c842f9016b26d1aaddc91fa3eae061))
* release 0.8.2 ([19e6b20](https://github.com/orefalo/svelte-splitpanes/commit/19e6b207ad8a179d6c9a05c49d07a45c2ebb25c0))

## [0.8.1](https://github.com/orefalo/svelte-splitpanes/compare/v0.8.1...v0.8.1) (2024-06-10)


### Miscellaneous Chores

* release 0.8.1 ([14170b6](https://github.com/orefalo/svelte-splitpanes/commit/14170b6fe0c842f9016b26d1aaddc91fa3eae061))

## [0.8.1](https://github.com/orefalo/svelte-splitpanes/compare/v0.8.0...v0.8.1) (2024-06-10)


### Bug Fixes

* now efficiently identify if client supports passive events, fixes [#74](https://github.com/orefalo/svelte-splitpanes/issues/74) ([f2d7ed1](https://github.com/orefalo/svelte-splitpanes/commit/f2d7ed1da856386287a2065d66c79f9fb63706c3))

## [0.8.0](https://github.com/orefalo/svelte-splitpanes/compare/v0.7.15...v0.8.0) (2023-07-03)


### Miscellaneous Chores

* update to svelte 4 ([ddb4402](https://github.com/orefalo/svelte-splitpanes/commit/ddb44027ef8a15f63ae01dbcdea8c957e4c82662))

## [0.7.15](https://github.com/orefalo/svelte-splitpanes/compare/v0.7.14...v0.7.15) (2023-06-14)


### Bug Fixes

* fix issue 69 - dblClickSplitter={false} does not disable auto-resizing ([8e38809](https://github.com/orefalo/svelte-splitpanes/commit/8e38809b59fb28bbe89816300f3325347e1d6424))
* set-output is deprecated ([451509b](https://github.com/orefalo/svelte-splitpanes/commit/451509b4f83b39de6f0cbc36c8a7dcde9a495796))

## [0.7.14](https://github.com/orefalo/svelte-splitpanes/compare/v0.7.13...v0.7.14) (2023-06-03)


### Bug Fixes

* fix github actions to support node16 ([47ee00c](https://github.com/orefalo/svelte-splitpanes/commit/47ee00c01a9afb55e4ed922123a57be81295e713))

## [0.7.13](https://github.com/orefalo/svelte-splitpanes/compare/v0.7.12...v0.7.13) (2023-02-27)


### Bug Fixes

* ignoring the annoying Svelte `a11y-click-events-have-key-events` warnings ([7d9b872](https://github.com/orefalo/svelte-splitpanes/commit/7d9b872f3fc2848310124e96ed220da7f2ffe934))

## [0.7.12](https://github.com/orefalo/svelte-splitpanes/compare/v0.7.11...v0.7.12) (2023-01-25)


### Bug Fixes

* avoid equalizing on the edge case that there is not even a single pane ([0adb387](https://github.com/orefalo/svelte-splitpanes/commit/0adb38772490d61e84af4eb893af33c1483c4319))
* cleaner dragging calculation, and omit the buggy `margin-left: -1px;` from the splitter ([b453d74](https://github.com/orefalo/svelte-splitpanes/commit/b453d74ee7aff3c4812a3de2f2bbd2372ad597f3))

## [0.7.11](https://github.com/orefalo/svelte-splitpanes/compare/v0.7.10...v0.7.11) (2023-01-09)


### Features

* add the \`strictEvents\` attribute to components, so the user will know that no other events happen ([db15de3](https://github.com/orefalo/svelte-splitpanes/commit/db15de3f79994690e5a259ca78e7b603c0012e2c))


### Bug Fixes

* require svelte to be installed as a peer dependency ([ec13655](https://github.com/orefalo/svelte-splitpanes/commit/ec136552979b37f28f25edb16c62fa19f2928a9c))
* ssr issue on partially defined sizes ([5fb6661](https://github.com/orefalo/svelte-splitpanes/commit/5fb6661b7bd5d1b388a9e4ecd390a528eccce281))


### Miscellaneous Chores

* release 0.7.11 ([1df8854](https://github.com/orefalo/svelte-splitpanes/commit/1df8854bcf66365c39cd04ece32d6a5ce5a92287))

## [0.7.10](https://github.com/orefalo/svelte-splitpanes/compare/v0.7.9...v0.7.10) (2023-01-02)

### Miscellaneous Chores

- release 0.7.10 (you may change the title) ([c23db34](https://github.com/orefalo/svelte-splitpanes/commit/c23db34b446e361bd89a8db694b5682c1303b964))

## [0.7.9](https://github.com/orefalo/svelte-splitpanes/compare/v0.7.3...v0.7.9) (2022-12-28)

### Bug Fixes

- pane object not being returned ([#45](https://github.com/orefalo/svelte-splitpanes/issues/45)) ([118a1ad](https://github.com/orefalo/svelte-splitpanes/commit/118a1ad1a19682feaf7175136bdc6c796fb6a542))

### Miscellaneous Chores

- bump version to 0.7.9 ([16b7fab](https://github.com/orefalo/svelte-splitpanes/commit/16b7fab73cd011b5dba1dcfdd0b00a1f2c8d486d))

### [0.7.8](https://github.com/orefalo/svelte-splitpanes/compare/v0.7.7...v0.7.8) (2022-12-28)

- npm re-releasing only

### [0.7.7](https://github.com/orefalo/svelte-splitpanes/compare/v0.7.4...v0.7.7) (2022-12-28)

### Features

- finally allow a correct two-way binding to the pane sizes
- reimplement splitter double click expansion
- support panes reordering by keyed each blocks, closes #35

### Bug Fixes

- fix pane object not being returned ([#45](https://github.com/orefalo/svelte-splitpanes/issues/45)) ([118a1ad](https://github.com/orefalo/svelte-splitpanes/commit/118a1ad1a19682feaf7175136bdc6c796fb6a542))

### [0.7.6](https://github.com/orefalo/svelte-splitpanes/compare/v0.7.5...v0.7.6) (2022-12-20)

- simpler and more intuitive sizing after panes adding/removing
- code optimizations

### [0.7.5](https://github.com/orefalo/svelte-splitpanes/compare/v0.7.4...v0.7.5) (2022-12-20)

- demo site now has a cleaner layout
- implemented proper browser detection client side
- code optimizations

### [0.7.4](https://github.com/orefalo/svelte-splitpanes/compare/v0.7.3...v0.7.4) (2022-12-12)

- attempt to fix browser detection in library mode, seems to be an issue with sveltekit

### [0.7.3](https://github.com/orefalo/svelte-splitpanes/compare/v0.7.2...v0.7.3) (2022-08-04)

- active splitter is now styled with a class
- improved dragging precission

### [0.7.2](https://github.com/orefalo/svelte-splitpanes/compare/v0.7.1...v0.7.2) (2022-08-01)

- fix jitter issue on double clicks

### [0.7.1](https://github.com/orefalo/svelte-splitpanes/compare/v0.7.0...v0.7.1) (2022-06-30)

- fix #31 - incorrect single pane width calculation when removing panes and resizing sliders
- in the "Pragramatic resizing demo", fix the double slider buttons

## [0.7.0](https://github.com/orefalo/svelte-splitpanes/compare/v0.6.12...v0.7.0) (2022-06-29)

### Features

- add edge snapping ([b6cb06d](https://github.com/orefalo/svelte-splitpanes/commit/b6cb06d94cec4027971322c92a151aee0130d601))
- add License and Code of conduct ([c8e9ecd](https://github.com/BearToCode/svelte-splitpanes/commit/c8e9ecd9809a749df75198456cac4c70b7a88bba))

### Bug Fixes

- dragging the splitter fast flickers the cursor ([288acd9](https://github.com/BearToCode/svelte-splitpanes/commit/288acd92583fc906b9625ee3b66ed9f9ba72af1e))
- improved snap, fixed bug ([903ad71](https://github.com/orefalo/svelte-splitpanes/commit/903ad71b8d64a30b8333661fbb1833cc34e4d526))
- read panes push ([a61f101](https://github.com/orefalo/svelte-splitpanes/commit/a61f101dff9a1cdf216744139ff789ba9a3e75dd))
- snap with multiple panes ([01f93a7](https://github.com/orefalo/svelte-splitpanes/commit/01f93a7a45188f3e0d2d2257d3570db12327c899))

### 0.6.12 (2022-06-28)

### Features

- add License and Code of conduct ([c8e9ecd](https://github.com/orefalo/svelte-splitpanes/commit/c8e9ecd9809a749df75198456cac4c70b7a88bba))
