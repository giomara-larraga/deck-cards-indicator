<script lang="ts">
  import { board, items } from "$lib/stores";
  import { goto } from "$app/navigation";
    import { writable, get } from "svelte/store";

  // Store for selected items (max 2)
  const selected = writable<string[]>([]);

  function toggleSelect(itemName: string) {
    selected.update(sel => {
      if (sel.includes(itemName)) {
        return sel.filter(n => n !== itemName);
      } else if (sel.length < 2) {
        return [...sel, itemName];
      }
      // Prevent adding more than two
      return sel;
    });
  }

  function confirmSelection() {
    alert("Selected: " + get(selected).join(", "));
    // Add your logic here
  }
</script>

<div class="flex flex-wrap bg-gray-100 w-full h-screen">
  <!-- Left column: Rank -->
    <div class="w-1/4 bg-white rounded p-3 shadow-lg">
	    <div class="flex items-center h-14 border-b border-gray-300">
      <div><p class="font-semibold text-lg text-primary-700">Ranking</p>
	
	</div>

    </div>
    <div class="overflow-y-auto overflow-x-hidden flex-grow">
	<div>  
	<p class="pt-2 pb-2 text-gray-700">
        The ranking based on your previous step is presented below. To continue, please select <b>two indicators</b> from below. If you wish to change the ranking, you can do so by clicking the <b>Modify ranking</b> button.
    </p>
	</div>
      {#each $board as column}
        <div class="flex flex-col m-2">
          <h2 class="text-lg font-bold">{column.name}</h2>
          {#if column.items.length > 0}
            <ul class="list-disc">
              {#each column.items as item}
                <li class="mb-2 list-none">
                  <div
                    class="cursor-pointer border rounded shadow p-4 min-w-[160px] text-center transition-all duration-150"
                    class:bg-blue-100={ $selected.includes(item.name) }
                    class:border-blue-500={ $selected.includes(item.name) }
                    class:border-gray-300={!$selected.includes(item.name)}
                    on:click={() => toggleSelect(item.name)}
                  >
                    <span class="font-semibold">{item.name}</span>
                  </div>
                </li>
              {/each}
            </ul>
          {:else}
            <input type="text" class="border rounded p-1 mt-2" placeholder="Add item..." />
          {/if}
        </div>
      {/each}
    </div>
	<button
              class="btn preset-filled-primary-500 mt-6"
              disabled={$selected.length !== 2}
              on:click={confirmSelection}
            >
              Confirm selection
            </button>
    <button
      type="button"
      class="btn preset-filled-secondary-500 m-2"	
      on:click={() => {
        goto('/');
      }}>Modify ranking</button>
  </div>

  <!-- Right column: (empty for now, add content here if needed) -->
  <div class="w-9/12">
        <div class="p-4 text-gray-500">
            Content here...
        </div>
    </div>
</div>

<style>
    /* You can add any additional custom styles here if needed */
</style>