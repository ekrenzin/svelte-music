<script>
	import Slider from './Slider.svelte';
	import { writable } from 'svelte/store';
	import VolumeOffIcon from './volume-off-icon.svelte';
	import VolumeOnIcon from './volume-on-icon.svelte';
	import PauseIcon from './pause-icon.svelte';

	export let volume = writable(0.5);
</script>

<div class="volume-slider">
	<VolumeOffIcon />
	<Slider
		min={0}
		max={1}
		step={0.01}
		precision={2}
		formatter={(v) => Math.round(v * 100)}
		bind:value={volume}
	/>
	<VolumeOnIcon />
</div>

<style>
	.volume-slider {
		display: grid;
		grid-template-columns: 1.5rem 4fr 1.5rem;
		align-items: center;
		gap: 0.5rem;
	}
</style>
