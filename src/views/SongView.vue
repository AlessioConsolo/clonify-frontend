<template>
  <div class="container mt-4">
    <h2 class="mb-4">Elenco Canzoni</h2>
    <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3">
      <div class="col" v-for="song in songs" :key="song.id">
        <div class="card h-100">
          <div class="card-body">
            <h5 class="card-title">{{ song.title }}</h5>
            <p class="card-text">Durata: {{ song.duration }} sec</p>
            <p class="card-text">
              <small>ID Album: {{ song.album_id }}</small>
            </p>
          </div>
        </div>
      </div>
    </div>
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
