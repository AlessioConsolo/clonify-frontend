<template>
  <div class="container mt-5">
    <div class="text-center">
      <h1 class="display-4">Benvenuto su Clonify 🎧</h1>
      <p class="lead">La tua musica preferita, sempre con te.</p>
      <div class="d-flex justify-content-center gap-3 mt-4 flex-wrap">
        <router-link to="/song" class="btn btn-outline-primary btn-lg">
          🎵 Vai alle Canzoni
        </router-link>
        <router-link to="/login" class="btn btn-outline-secondary btn-lg">
          🔐 Login
        </router-link>
        <router-link to="/register" class="btn btn-outline-success btn-lg">
          📝 Registrati
        </router-link>
      </div>
    </div>

    <div class="mt-5">
      <h3 class="mb-4">Cosa puoi fare?</h3>
      <ul class="list-group">
        <li class="list-group-item">🎧 Ascolta le tue canzoni preferite</li>
        <li class="list-group-item">📁 Crea playlist personalizzate</li>
        <li class="list-group-item">🧑‍💻 Gestisci i tuoi contenuti musicali</li>
        <li class="list-group-item">
          🔐 Accedi o registrati per salvare le tue preferenze
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeView",
};
</script>

<style scoped>
.display-4 {
  font-weight: bold;
}
</style>
