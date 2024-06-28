<script>
  import { Pane, Splitpanes } from 'svelte-splitpanes';
</script>

<Splitpanes theme="no-splitter" horizontal style="height: 400px" dblClickSplitter={false}>
  <Pane size={6} minSize={6} maxSize={6}>
    <p>MenuBar - This is a splitpane, note how the splitters made static using CSS</p>
  </Pane>
  <Pane size={6} minSize={6} maxSize={6}>
    <p>ToolBar - This is another fixed size, locked splitpane</p>
  </Pane>
  <Pane>
    <Splitpanes theme="modern-theme">
      <Pane>
        <p>
          Folder
          <br />
          You can move those --{'>'}
        </p>
      </Pane>
      <Pane>
        <p>Sample content</p>
      </Pane>
      <Pane>
        <p>
          Details
          <br />
          {'<'}-- You can move those
        </p>
      </Pane>
    </Splitpanes>
  </Pane>
  <Pane size={6} minSize={6} maxSize={6}>
    <p>statusbar - and yet, another splitpane, same technique</p>
  </Pane>
</Splitpanes>

<style global lang="scss">
  .splitpanes.modern-theme {
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
        background-color: #2db9d2;
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
  .modern-theme {
    &.splitpanes--vertical > .splitpanes__splitter:before {
      left: -3px;
      right: -3px;
      height: 100%;
      cursor: col-resize;
    }
    &.splitpanes--horizontal > .splitpanes__splitter:before {
      top: -3px;
      bottom: -3px;
      width: 100%;
      cursor: row-resize;
    }
  }

  .splitpanes.no-splitter {
    .splitpanes__pane {
      background-color: #f8f8f8;
    }
    .splitpanes__splitter {
      background-color: #ccc;
      position: relative;
    }
  }
  .no-splitter {
    &.splitpanes--horizontal > .splitpanes__splitter:before {
      width: 0.125rem;
      pointer-events: none;
      cursor: none;
    }
    &.splitpanes--vertical > .splitpanes__splitter:before {
      height: 0.125rem;
      pointer-events: none;
      cursor: none;
    }
  }
</style>
