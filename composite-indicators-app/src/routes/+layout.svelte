<script>
  // The application's global stylesheet
  import "../app.css";
</script>

<div class="grid-container">
  <slot />
</div>

<style>
  :global(*) {
    box-sizing: border-box;
    margin: 0;
  }
  .grid-container {
    display: grid;
    grid-template-rows: auto auto auto;
    gap: 1rem; /* Optional: Adjust spacing between rows */
    width: 100%; /* Optional: Adjust container width */
    height: 100vh !important;
    overflow: hidden;
  }
</style>
