<script>
	// Set the size dynamically based on the component's need
	export let size = `1.5rem`; // Update size to match the new SVG dimensions
</script>

<!-- Replace the old SVG with the new one, and bind size to the width and height attributes -->
<svg
	xmlns="http://www.w3.org/2000/svg"
	class="icon icon-tabler icon-tabler-volume-3"
	width={size}
	height={size}
	viewBox="0 0 24 24"
	stroke-width="1.5"
	stroke="#2c3e50"
	fill="none"
	stroke-linecap="round"
	stroke-linejoin="round"
>
	<path stroke="none" d="M0 0h24v24H0z" fill="none" />
	<path d="M15 8a5 5 0 0 1 0 8" />
	<path d="M17.7 5a9 9 0 0 1 0 14" />
	<path
		d="M6 15h-2a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1h2l3.5 -4.5a.8 .8 0 0 1 1.5 .5v14a.8 .8 0 0 1 -1.5 .5l-3.5 -4.5"
	/>
</svg>

<style>
	svg {
		fill: none;
		stroke: #2c3e50;
	}
	path {
		fill: none;
	}
</style>
