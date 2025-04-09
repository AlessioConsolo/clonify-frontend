<template>
  <div class="home">
    <h1>Benvenuto su Clonify</h1>
    <p>Esplora la tua musica, le tue playlist e tanto altro!</p>
    <router-link to="/playlist">Vai alle Playlist</router-link>
    <router-link to="/song">Vai alle Canzoni</router-link>
  </div>
</template>

<script>
export default {
  name: "HomeView",
};
</script>

<style scoped>
.home {
  text-align: center;
  margin-top: 50px;
}
</style>
