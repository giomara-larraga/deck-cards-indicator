<script lang="ts">

</script>

<div class="flex flex-col items-center justify-center h-screen bg-gray-100">
	<h1 class="text-4xl font-bold mb-6">Choose Your Route</h1>
	<form class="space-y-4">
		<select
			class="form-select block w-64 p-2.5 text-lg border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
			required
		>
			<option value="" disabled>Select a route</option>
			<option value="/lime">Lime</option>
			<option value="/shap">Shap</option>
			<option value="/interactivized">Interactivized</option>
		</select>
		<button
			type="submit"
			class="btn btn-primary w-32 py-2 text-white bg-blue-500 rounded-md shadow-sm hover:bg-blue-600 focus:ring-4 focus:ring-blue-300"
		>
			Go
		</button>
	</form>
</div>

<style>
	/* You can add any additional custom styles here if needed */
</style>