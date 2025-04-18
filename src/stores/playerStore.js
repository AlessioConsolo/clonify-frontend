import { defineStore } from "pinia";

export const usePlayerStore = defineStore("player", {
  state: () => ({
    currentSong: null,
    isPlaying: false,
    volume: 100,
  }),
  actions: {
    playSong(song) {
      this.currentSong = song;
      this.isPlaying = true;
    },
    pauseSong() {
      this.isPlaying = false;
    },
    setVolume(volume) {
      this.volume = volume;
    },
  },
});
