<script>
	import Slider from './Slider.svelte';
	import { writable } from 'svelte/store';
	import VolumeOffIcon from './volume-off-icon.svelte';
	import VolumeOnIcon from './volume-on-icon.svelte';
	import PauseIcon from './pause-icon.svelte';

	export let volume = 0.5;

	let showSlider = false;
</script>

<div class="volume-slider">
	{#if showSlider}
		<div class="slide-bar">
			<Slider
				min={0}
				max={1}
				step={0.01}
				precision={2}
				vertical={true}
				formatter={(v) => Math.round(v * 100)}
				bind:value={volume}
			/>
		</div>
	{/if}
	<button on:click={() => (showSlider = !showSlider)}>
		{#if volume > 0}
			<VolumeOnIcon />
		{:else}
			<VolumeOffIcon />
		{/if}
	</button>
</div>

<style>
	button {
		background: none;
		border: none;
		cursor: pointer;
	}
	.volume-slider {
		position: relative;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		width: 1rem;
	}

	.slide-bar {
		position: absolute;
		bottom: 100%;
		left: 50%;
		transform: translateX(-50%);
	}
</style>
