<script>
	import Slider from './Slider.svelte';
	import { status, isPlaying, audioPlayer, index, trackList } from './stores.js';
	import { format } from './utilities.js';
	import PlayButton from './PlayButton.svelte';
	import VolumeControls from './VolumeControls.svelte';
	import SkipIcon from './skip-icon.svelte';
	import './controls.css';

	import { onMount } from 'svelte';
	import TrackList from './TrackList.svelte';

	export let showVolume = true;
	export let showProgress = true;
	export let showTitle = true;
	export let showTrackList = true;

	let duration = 0;
	let currentTime = 0;
	let formattedTime = format(currentTime);
	let paused = true;
	let volume = 0.5;

	let slider;
	let rAF = null;

	let title = $trackList[$index].title;
	let artist = $trackList[$index].artist;
	let src = $trackList[$index].file;

	index.subscribe((value) => {
		if (!value) return;
		$isPlaying = false;
		currentTime = 0;
		pauseTrack();
		$index = value;
		loadTrack(value);
	});

	trackList.subscribe((value) => {
		if (!value) return;
		if (value.length - 1 < $index) {
			value.length;
		}
		loadTrack($index);
	});

	function whilePlaying() {
		slider.value = audio.currentTime;
		currentTime = slider.value;
		rAF = requestAnimationFrame(whilePlaying);
	}

	function loadTrack($index) {
		try {
			title = $trackList[$index].title;
			artist = $trackList[$index].artist;
			$audioPlayer.src = $trackList[$index].file;
			$audioPlayer.load();
		} catch (error) {
			console.error(error);
		}
	}

	function playTrack() {
		$isPlaying = true;
		requestAnimationFrame(whilePlaying);
		$audioPlayer.play();
	}

	function pauseTrack() {
		$isPlaying = false;
		cancelAnimationFrame(rAF);
		$audioPlayer.pause();
	}

	function movePosition() {
		time = slider.value;
		if (!audio.paused) {
			cancelAnimationFrame(rAF);
		}
	}

	function updatePosition() {
		audio.currentTime = slider.value;
		if (!audio.paused) {
			requestAnimationFrame(whilePlaying);
		}
	}

	function previousTrack() {
		$isPlaying = false;
		currentTime = 0;
		if ($index > 0) {
			$index -= 1;
		} else {
			$index = $trackList.length - 1;
		}
		loadTrack($index);
		playTrack();
	}

	function nextTrack() {
		$isPlaying = false;
		currentTime = 0;
		if ($index < $trackList.length - 1) {
			$index += 1;
		} else {
			$index = 0;
		}
		loadTrack($index);
		playTrack();
	}

	onMount(() => {
		$audioPlayer.load();
	});

	// 	on:progress="{() => $status = 'loading'}"
</script>

<!-- svelte-ignore a11y-media-has-caption -->
<audio
	bind:this={$audioPlayer}
	bind:duration
	bind:currentTime
	bind:paused
	bind:volume
	on:canplay={() => ($status = 'can play some')}
	on:canplaythrough={() => ($status = 'can play all')}
	on:waiting={() => ($status = 'waiting')}
	on:timeupdate={() => ($status = 'playing')}
	on:seeking={() => ($status = 'seeking')}
	on:ended={() => {
		$isPlaying = false;
		currentTime = 0;
	}}
	{src}
/>

<div class="box doodle-button">
	{#if showTitle}
		<div class="info">
			<p><b>{title} by {artist}</b></p>
		</div>
	{/if}
	<div class="controls">
		<div class="buttons">
			<button class="prev" on:click={previousTrack}><SkipIcon inverted={true} /></button>

			<PlayButton controls />

			<button class="next" on:click={nextTrack}><SkipIcon inverted={false} /></button>
		</div>

		<div class="progress">
			<div class="progress-slider">
				<Slider
					bind:this={slider}
					min={0}
					bind:value={currentTime}
					max={duration}
					step={0.01}
					precision={2}
					formatter={(v) => format(v)}
					on:input={movePosition}
					on:change={updatePosition}
				/>
			</div>

			<span class="duration">{format(currentTime)}/{format(duration)}</span>
		</div>
		<TrackList />
		<VolumeControls bind:volume />
	</div>
</div>

<style>
	.box {
		border-radius: 4rem;
		padding: 1rem 3rem;
		cursor: default;
		font-family: sans-serif;
	}

	.controls {
		display: grid;
		grid-template-columns: auto 1fr auto auto;
		align-items: center;
		gap: 1.5rem;
	}

	.block {
		display: flex;
		flex-direction: row;
		gap: 1rem;
		align-items: center;
	}

	.block h3 {
		margin: 0;
		padding: 0;
	}

	audio {
		display: none;
	}

	div {
		display: grid;
		grid-auto-flow: row;
	}

	button {
		margin: 0;
		padding: 0;
		width: 2rem;
		height: 1.5rem;
		border-radius: 4px;
		border: 1px solid #bbb;
		background: none;
		cursor: pointer;
		transition: 0.25s;
	}

	button:hover {
		transform: scale(1.1);
	}

	p {
		margin: 0;
		padding: 0;
		line-height: 1;
		user-select: none;
	}

	span {
		display: inline-grid;
		margin: 0;
		border-radius: 6px;
		place-items: center;
		font-size: 1rem;
	}

	.info {
		margin: auto;
		padding: 0;
		width: 100%;
		text-align: center;
	}

	.buttons {
		grid-template-columns: 2rem 3rem 2rem;
		place-items: center;
		column-gap: 0.5rem;
		margin: auto;
	}
	.progress {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		gap: 1rem;
	}

	.duration {
		justify-self: end;
	}

	.progress-slider {
		width: 100%;
	}

	.prev,
	.next {
		border-radius: 2rem;
		border: none;
	}
</style>
