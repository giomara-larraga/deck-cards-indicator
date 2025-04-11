<script lang="ts">
  import HorizontalList from "../lib/components/HorizontalList.svelte";
  import {cards} from "$lib/constants"  
  import Board from "../lib/components/Board.svelte";
  import { goto } from '$app/navigation';
  import '../app.css';

  import { board } from '$lib/stores';

  function handleSelection() {
			goto("/tradeoff");
	}
</script>

<HorizontalList items={cards} />
<Board></Board>
<button type="button" class="btn preset-filled-primary-500" onclick={handleSelection}>Next</button>


<style>
  :global(*) {
    box-sizing: border-box;
    margin: 0;
  }
</style>
