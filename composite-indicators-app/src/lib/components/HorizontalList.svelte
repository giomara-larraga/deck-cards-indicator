<script>
  import { flip } from "svelte/animate";
  import { dndzone } from "svelte-dnd-action";
  /**
   * @type {any}
   */
  export let items;
  export let containerWidth = "100vw";
  export let itemWidth = "10em";
  const flipDurationMs = 300;
  /**
   * @param {{ detail: { items: any; }; }} e
   */
  function handleDndConsider(e) {
    items = e.detail.items;
  }
  /**
   * @param {{ detail: { items: any; }; }} e
   */
  function handleDndFinalize(e) {
    items = e.detail.items;
    console.log(items);
  }
</script>

<section
  style="width:{containerWidth}"
  use:dndzone={{ items, flipDurationMs }}
  on:consider={handleDndConsider}
  on:finalize={handleDndFinalize}
>
  {#each items as item (item.id)}
    <div
      class="card p-4"
      style="flex: 0 0 {itemWidth}; margin: 0 0.15em"
      animate:flip={{ duration: flipDurationMs }}
    >
      {item.name}
    </div>
  {/each}
</section>

<style>
  section {
    height: 13.5em;
    padding: 0.3em;
    background-color: #dee2e6;
    display: flex;
    overflow-x: scroll;
  }
</style>
