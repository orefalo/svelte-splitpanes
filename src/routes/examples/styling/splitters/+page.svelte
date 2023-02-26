<script>
	import CodeArea from '$comp/CodeArea.svelte';
	import ExampleArea from '$comp/ExampleArea.svelte';

	import example from './code.svelte?example';

	const theme = `
.splitpanes.default-theme {
    .splitpanes__pane {
        background-color: #f2f2f2;
    }
    .splitpanes__splitter {
        background-color: #fff;
        box-sizing: border-box;
        position: relative;
        flex-shrink: 0;
        &:before,
        &:after {
            content: '';
            position: absolute;
            top: 50%;
            left: 50%;
            background-color: rgba(0, 0, 0, 0.15);
            transition: background-color 0.3s;
        }
        &:hover:before,
        &:hover:after {
            background-color: rgba(0, 0, 0, 0.25);
        }
        &:first-child {
            cursor: auto;
        }
    }
}
.default-theme {
    &.splitpanes .splitpanes .splitpanes__splitter {
        z-index: 1;
    }
    &.splitpanes--vertical > .splitpanes__splitter,
    .splitpanes--vertical > .splitpanes__splitter {
        width: 7px;
        border-left: 1px solid #eee;
        cursor: col-resize;
        &:before,
        &:after {
            transform: translateY(-50%);
            width: 1px;
            height: 30px;
        }
        &:before {
            margin-left: -2px;
        }
        &:after {
            margin-left: 1px;
        }
    }
    &.splitpanes--horizontal > .splitpanes__splitter,
    .splitpanes--horizontal > .splitpanes__splitter {
        height: 7px;
        border-top: 1px solid #eee;
        cursor: row-resize;
        &:before,
        &:after {
            transform: translateX(-50%);
            width: 30px;
            height: 1px;
        }
        &:before {
            margin-top: -2px;
        }
        &:after {
            margin-top: 1px;
        }
    }
}
`;
</script>

<h2>Styling Splitters</h2>

<p>
	Styling splitters is fully customizable using CSS (or SCSS), the `theme` property is used to select the proper styling
	class and apply it to the Splitpanes component.<br />
	The default style is called `default-theme`, its SCSS definition can be found below (<b>warning</b>: This is for
	reference only! If you decide to copy this CSS code, you must rename the ".default-theme" specifier to something else,
	so it wouldn't conflict the library theme CSS definition):
</p>

<CodeArea id="styling_splitters" code={theme} />

<p>
	By altering the above styles, it is possible to achieve neat visual adjustments. Please note how each Splitpanes
	references our new `theme="my-theme"`
</p>

<ExampleArea {example} />
