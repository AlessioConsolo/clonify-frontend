<template>
  <div id="app">
    <!-- Barra di navigazione (opzionale) -->
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/login">Login</router-link>
    </nav>

    <!-- Qui verranno renderizzate le views in base alla rotta -->
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
/* Stili di base, aggiungi altri stili se necessario */
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

nav {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 20px;
}

router-link {
  text-decoration: none;
  color: #42b983;
}
</style>
