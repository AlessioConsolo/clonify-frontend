<template>
  <div class="playlist-view">
    <h1>Le tue Playlist</h1>
    <ul>
      <li v-for="playlist in playlists" :key="playlist.id">
        <router-link :to="'/playlist/' + playlist.id">{{
          playlist.name
        }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { getPlaylists } from "@/services/api.js";

export default {
  name: "PlaylistView",
  data() {
    return {
      playlists: [],
    };
  },
  mounted() {
    getPlaylists()
      .then((response) => {
        this.playlists = response.data.data;
      })
      .catch((error) => {
        console.error("Errore nel recupero delle playlist", error);
      });
  },
};
</script>

<style scoped>
.playlist-view {
  padding: 20px;
}
</style>
