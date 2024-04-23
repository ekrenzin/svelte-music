# Svelte Audio Player

This library provides reusable Svelte components focused on creating and controlling media playback experiences, powered by [`create-svelte`](https://github.com/sveltejs/kit/tree/main/packages/create-svelte).

## Features

- Track Component: Displays media track information.
- Controls Component: Provides UI for media playback control.
- Track List Store: Manages the list of tracks.
- Add Track Function: Allows adding tracks dynamically to the store.

# Demo

https://12b78208.svelte-music-5gc.pages.dev

# Quickstart

```
  import { Controls } from "svelte-music";

  onMount(() => {
    trackList.set([
      {
        title: "The Way You Look Tonight",
        artist: "Frank Sinatra",
        file: "/music.mp3",
      },
    ]);
  });
```
