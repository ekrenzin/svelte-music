<script>
	import { status, isPlaying, audioPlayer, index, trackList, addTrack } from './stores.js';
	import PlayButton from './PlayButton.svelte';

	export let title;
	export let artist;
	export let file;
</script>

<div class="info" class:playing={title === $trackList[$index].title}>
	<div class="play-button">
		<PlayButton track {title} {artist} {file} />
	</div>

	<div class="title">
		<p><strong>Title</strong></p>
		<p>{title}</p>
	</div>
	<div class="artist">
		<p><strong>Artist</strong></p>
		<p>{artist}</p>
	</div>
</div>

<style>
	p {
		margin: 0;
		padding: 0;
		line-height: 0;
	}
	.info {
		margin: 0;
		display: grid;
		grid-auto-flow: column;
		grid-template-columns: 4rem 1fr;
		grid-template-rows: 2;
		align-items: center;
		column-gap: 1rem;
		border: 1px solid #ccc;
		border-radius: 8px;
		border-radius: 4rem 16px 16px 4rem;
		border: 1px solid #bbb;
		margin: 0;
		padding: 0.5rem 1rem;
		justify-items: start;
		border-radius: 4rem 16px 16px 4rem;
		border: 1px solid #bbb;
	}

	.play-button {
		grid-row: 1 / 3;
	}

	.title,
	.artist {
		display: grid;
		grid-auto-flow: column;
		column-gap: 1rem;
		margin: 0;
		padding: 0;
	}

	.title {
		grid-row: 1 / 2;
	}

	.artist {
		grid-row: 2 / 3;
	}

	.playing {
		border: 1px solid #000;
	}
</style>
