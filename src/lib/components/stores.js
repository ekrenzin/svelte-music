import { writable, get } from 'svelte/store';

export const audioPlayer = writable();
export const status = writable('default');
export const isPlaying = writable(false);
export const index = writable(0);

export const trackList = writable([
	{
		title: 'Requiem in D minor, K. 626',
		artist: 'Wolfgang Amadeus Mozart',
		file: 'https://sveltejs.github.io/assets/music/mozart.mp3'
	},
	{
		title: 'Symphony no. 5 in Cm, Op. 67',
		artist: 'Ludwig van Beethoven',
		file: 'https://sveltejs.github.io/assets/music/beethoven.mp3'
	}
]);

export const addTrack = (track) => {
	trackList.update((v) => [...v, track]);
};
