<template>
  <div class="song-view">
    <h1>Canzoni</h1>
    <ul>
      <li v-for="song in songs" :key="song.id">
        <p>{{ song.title }} - {{ song.duration }} sec</p>
      </li>
    </ul>
  </div>
</template>

<script>
import { getSongs } from "@/services/api.js";

export default {
  name: "SongView",
  data() {
    return {
      songs: [],
    };
  },
  mounted() {
    getSongs()
      .then((response) => {
        this.songs = response.data.data;
      })
      .catch((error) => {
        console.error("Errore nel recupero delle canzoni", error);
      });
  },
};
</script>

<style scoped>
.song-view {
  padding: 20px;
}
</style>
