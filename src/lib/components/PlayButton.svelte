<script>
	import { status, isPlaying, audioPlayer, index, trackList, addTrack } from './stores.js';
	import PlayIcon from './play-icon.svelte';
	import PauseIcon from './pause-icon.svelte';
	import LoadingIcon from './loading-icon.svelte';

	export let controls = false;
	export let track = false;
	export let title = '';
	export let artist = '';
	export let file = '';

	function playTrack() {
		$audioPlayer.play();
		$isPlaying = true;
	}

	function pauseTrack() {
		$audioPlayer.pause();
		$isPlaying = false;
	}

	function loadTrack($index) {
		title = $trackList[$index].title;
		artist = $trackList[$index].artist;
		$audioPlayer.src = $trackList[$index].file;
		$audioPlayer.load();
	}

	function addAndPlayTrack() {
		addTrack({ title, artist, file });
		$index = $trackList.length - 1;
		// 		$currentTime = 0;
		// Load and play the new track
		loadTrack($index);
		playTrack();
	}
</script>

{#if controls}
	{#if $isPlaying === false}
		<button class="play-button controls" on:click={playTrack}>
			<PlayIcon />
		</button>
	{:else if $isPlaying === true && ($status === 'waiting' || $status === 'loading' || $status === 'can play some' || $status === 'can play all')}
		<button class="play-button controls" on:click={pauseTrack}>
			<LoadingIcon />
		</button>
	{:else if $isPlaying === true}
		<button class="play-button controls" on:click={pauseTrack}>
			<PauseIcon />
		</button>
	{/if}
{:else if track}
	{#if title !== $trackList[$index].title}
		<button class="play-button track" on:click={addAndPlayTrack}>
			<PlayIcon size={2.5} />
		</button>
	{:else if title === $trackList[$index].title && $isPlaying === true && ($status === 'loading' || $status === 'can play some' || $status === 'can play all' || $status === 'waiting')}
		<button class="play-button track playing" on:click={pauseTrack}>
			<LoadingIcon size={2.5} />
		</button>
	{:else if title === $trackList[$index].title && $isPlaying === true}
		<button class="play-button track playing" on:click={pauseTrack}>
			<PauseIcon size={2.5} />
		</button>
	{:else if title === $trackList[$index].title && $isPlaying === false}
		<button class="play-button track playing" on:click={playTrack}>
			<PlayIcon size={2.5} />
		</button>
	{/if}
{/if}

<style>
	.play-button {
		margin: 0;
		padding: 0;
		width: 4rem;
		height: 4rem;
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 4rem;
		border: 1px solid #bbb;
		background: #fcfcfc;
	}

	.controls {
		width: 4rem;
		height: 4rem;
		border: 2px solid #000;
	}

	.track {
		width: 4rem;
		height: 4rem;
	}

	.playing {
		border: 1px solid #000;
	}
</style>
