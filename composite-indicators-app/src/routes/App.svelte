<script>
  import VerticalList from "./VerticalList.svelte";
  import HorizontalList from "./HorizontalList.svelte";
  import Board from "./Board.svelte";

  let items3 = [
    { id: 31, name: "Ammonia emissions from agriculture (2_6)" },
    {
      id: 32,
      name: "Exposure to air pollution by particulate matter (11_5)",
    },
    {
      id: 33,
      name: "Average CO2 emissions per km from new passenger cars (12_3)",
    },
    { id: 34, name: "Greenhouse gas emissions by source sector (13_1)" },
    {
      id: 35,
      name: "Greenhouse gas emissions intensity of energy consumption (13_2)",
    },
  ];
  let board = [
    {
      id: 1,
      name: "Rank 1",
      items: [],
    },
    {
      id: 2,
      name: "Rank 2",
      items: [],
    },
    {
      id: 3,
      name: "Rank 3",
      items: [],
    },
    {
      id: 4,
      name: "Rank 4",
      items: [],
    },
    {
      id: 5,
      name: "Rank 5",
      items: [],
    },
  ];
</script>

<HorizontalList items={items3} />
<Board columnItems={board}></Board>

<style>
  :global(*) {
    box-sizing: border-box;
    margin: 0;
  }
</style>
