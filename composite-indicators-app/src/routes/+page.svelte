<script lang="ts">
  import HorizontalList from "../lib/components/HorizontalList.svelte";
  import { cards } from "$lib/constants";
  import Board from "../lib/components/Board.svelte";
  import { goto } from "$app/navigation";
  import "../app.css";

  import { board, items } from "$lib/stores";
  import { get } from "svelte/store"; // To access the current value of the store

  function handleSelection() {
    goto("/tradeoff");
  }

  function handleReset() {
    board.update(() => [{ id: 1, name: "Rank 1", items: [] }]);
    items.set([...cards]); // Assuming `items` is a writable store
  }

  function addColumn() {
    board.update((currentBoard) => {
      const newColumnId = currentBoard.length + 1;
      return [
        ...currentBoard,
        { id: newColumnId, name: `Rank ${newColumnId}`, items: [] },
      ];
    });
  }
</script>

<HorizontalList items={$items} />
<Board></Board>
<div>
  <button
    type="button"
    class="btn preset-filled-primary-500"
    onclick={addColumn}>Add Column</button
  >
  <button
    type="button"
    class="btn preset-filled-primary-500"
    onclick={handleReset}>Reset</button
  >
  <button
    type="button"
    class="btn preset-filled-primary-500"
    onclick={handleSelection}>Next</button
  >
</div>
