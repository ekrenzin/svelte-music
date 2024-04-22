<script>
	import ListIcon from './list-icon.svelte';
	import { trackList, index } from './stores.js';

	let showTrackList = false;

	function handleChange(event) {
		//find the selected track index using the event.target.selectedIndex
		const idx = event.target.value;
		//set the index store to the selected index
		index.set(idx);
	}
</script>

<button on:click={() => (showTrackList = !showTrackList)}>
	<ListIcon />
	{#if showTrackList}
		<select on:change={handleChange}>
			{#each $trackList as track, idx}
				<option value={idx}>{track.title} by {track.artist}</option>
			{/each}
		</select>
	{/if}
</button>

<style>
	button {
		background: none;
		border: none;
		cursor: pointer;
		position: relative;
	}

	select {
		position: absolute;
		top: 100%;
		left: 100%;
		transform: translateX(-100%);
	}
</style>
