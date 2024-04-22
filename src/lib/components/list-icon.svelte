<script>
	// Set the size dynamically based on the component's need
	export let size = `25`; // Update size to match the new SVG dimensions
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
	<path d="M9 6l11 0" />
	<path d="M9 12l11 0" />
	<path d="M9 18l11 0" />
	<path d="M5 6l0 .01" />
	<path d="M5 12l0 .01" />
	<path d="M5 18l0 .01" />
</svg>

<style>
	svg {
		fill: none;
		stroke: #000;
	}
	path {
		fill: none;
	}
</style>
