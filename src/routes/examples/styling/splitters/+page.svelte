<script>
	import { Pane, Splitpanes } from 'svelte-splitpanes';
	import CodeArea from '$comp/CodeArea.svelte';

	let code =
		`
<script>
	import { Pane, Splitpanes } from 'svelte-splitpanes'
<\/script>        
<Splitpanes theme="my-theme" horizontal style="height: 400px">
	<Pane>
		<Splitpanes theme="my-theme">
			<Pane>
				<span>1</span>
			</Pane>
			<Pane>
				<span>2</span>
			</Pane>
			<Pane>
				<span>3</span>
			</Pane>
		</Splitpanes>
	</Pane>
	<Pane
		><em class="specs">
			<p>In this example the splitters are thin lines but the reactive touch zone is spread to 30 pixels all around!</p>
		</em>
	</Pane>
</Splitpanes>

<style` + // this is needed for fixing a wierd bug in svelte-preproccess
		` global lang="scss">
.splitpanes.my-theme {
    .splitpanes__pane {
        background-color: #f8f8f8;
    }
    .splitpanes__splitter {
        background-color: #ccc;
        position: relative;
        &:before {
            content: '';
            position: absolute;
            left: 0;
            top: 0;
            transition: opacity 0.4s;
            background-color: rgba(255, 0, 0, 0.3);
            opacity: 0;
            z-index: 1;
        }
        &:hover:before {
            opacity: 1;
        }
        &.splitpanes__splitter__active {
            z-index: 2; /* Fix an issue of overlap fighting with a near hovered splitter */
        }
    }
}
.my-theme {
    &.splitpanes--vertical > .splitpanes__splitter:before {
        left: -30px;
        right: -30px;
        height: 100%;
        cursor: col-resize;
    }
    &.splitpanes--horizontal > .splitpanes__splitter:before {
        top: -30px;
        bottom: -30px;
        width: 100%;
        cursor: row-resize;
    }
}
</style>
`;

	let theme = `
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
        margin-left: -1px;
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
        margin-top: -1px;
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
	class and apply it to the SpliPanes component.<br />
	The default style is called `default-theme`, its SCSS definition can be found below:
</p>

<CodeArea id="styling_splitters" code={theme} />

<p>
	By altering the above styles, it is possible to achieve neat visual adjustments. Please note how each Splitpanes
	references our new `theme="my-theme"`
</p>

<Splitpanes theme="my-theme" horizontal style="height: 400px">
	<Pane>
		<Splitpanes theme="my-theme">
			<Pane>
				<span>1</span>
			</Pane>
			<Pane>
				<span>2</span>
			</Pane>
			<Pane>
				<span>3</span>
			</Pane>
		</Splitpanes>
	</Pane>
	<Pane
		><em class="specs">
			<p>In this example the splitters are thin lines but the reactive touch zone is spread to 30 pixels all around!</p>
		</em>
	</Pane>
</Splitpanes>

<CodeArea id="styling_splitters_alternative" {code} />

<style global lang="scss">
	.splitpanes.my-theme {
		.splitpanes__pane {
			background-color: #f8f8f8;
		}
		.splitpanes__splitter {
			background-color: #ccc;
			position: relative;
			&:before {
				content: '';
				position: absolute;
				left: 0;
				top: 0;
				transition: opacity 0.4s;
				background-color: rgba(255, 0, 0, 0.3);
				opacity: 0;
				z-index: 1;
			}
			&:hover:before {
				opacity: 1;
			}
			&.splitpanes__splitter__active {
				z-index: 2; /* Fix an issue of overlap fighting with a near hovered splitter */
			}
		}
	}
	.my-theme {
		&.splitpanes--vertical > .splitpanes__splitter:before {
			left: -30px;
			right: -30px;
			height: 100%;
			cursor: col-resize;
		}
		&.splitpanes--horizontal > .splitpanes__splitter:before {
			top: -30px;
			bottom: -30px;
			width: 100%;
			cursor: row-resize;
		}
	}
</style>
