<script lang="ts">
  // This is done in a single file for clarity. A more factored version here: https://svelte.dev/repl/288f827275db4054b23c437a572234f6?version=3.38.2
  import { flip } from "svelte/animate";
  import { dndzone } from "svelte-dnd-action";
  import type { BoardItem } from "$lib/types";

  import { board } from '$lib/stores';

  const flipDurationMs = 200;


  function handleDndConsiderCards(cid, e) {
    // Find the index of the column in the board array
    const colIdx = $board.findIndex((c) => c.id === cid);
    if (colIdx !== -1) {
      // Update the items for the specific column
      $board[colIdx].items = e.detail.items;
    }
  }

  function handleDndFinalizeCards(cid, e) {
    const colIdx = $board.findIndex((c) => c.id === cid);
    if (colIdx !== -1) {
      $board[colIdx].items = e.detail.items;
    }
    console.log($board); // To log the updated board state
  }
</script>

<section class="board">
  {#each $board as column (column.id)}
    <div class="column" animate:flip={{ duration: flipDurationMs }}>
      <div class="column-title">{column.name}</div>
      <div
        class="column-content"
        use:dndzone={{ items: column.items, flipDurationMs }}
        on:consider={(/** @type {{ detail: { items: any; }; }} */ e) => handleDndConsiderCards(column.id, e)}
        on:finalize={(/** @type {{ detail: { items: any; }; }} */ e) => handleDndFinalizeCards(column.id, e)}
      >
        {#each column.items as item (item.id)}
          <!-- svelte-ignore a11y_no_static_element_interactions -->
          <!-- svelte-ignore a11y_click_events_have_key_events -->
          <div
            class="card p-4"
            animate:flip={{ duration: flipDurationMs }}
  
          >
            {item.name}
          </div>
        {/each}
      </div>
    </div>
  {/each}
</section>

<style>
  .board {
    height: 65vh;
    width: 100%;
    padding: 0.5em;
    margin-bottom: 40px;
  }
  .column {
    height: 65vh;
    width: 13em;
    padding: 0.5em;
    margin: 1em;
    float: left;
    border: 1px solid #333333;
    /*Notice we make sure this container doesn't scroll so that the title stays on top and the dndzone inside is scrollable*/
    overflow-y: hidden;
  }
  .column-content {
    height: 60vh;
    /* Notice that the scroll container needs to be the dndzone if you want dragging near the edge to trigger scrolling */
    overflow-y: scroll;
    justify-items: center;
  }
  .column-title {
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
