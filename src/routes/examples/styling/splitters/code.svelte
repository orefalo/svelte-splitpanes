<script>
  import { Pane, Splitpanes } from 'svelte-splitpanes';
</script>

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
  <Pane>
    <em class="specs">
      <p>
        In this example the splitters are thin lines but the reactive touch zone is spread to 30
        pixels all around!
      </p>
    </em>
  </Pane>
</Splitpanes>

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
