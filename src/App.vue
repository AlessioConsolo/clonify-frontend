<template>
  <div id="app">
    <div class=""><Navbar /> <router-view /></div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue"; // Importa il componente Navbar

export default {
  name: "App",
  components: {
    Navbar, // Registra il componente Navbar
  },
};
</script>

<style></style>
