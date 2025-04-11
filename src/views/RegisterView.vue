<template>
  <div class="container mt-5" style="max-width: 500px">
    <h2 class="mb-4">Registrazione</h2>
    <form @submit.prevent="register">
      <div class="mb-3">
        <label for="name" class="form-label">Nome</label>
        <input
          type="text"
          v-model="name"
          class="form-control"
          id="name"
          required
        />
      </div>
      <div class="mb-3">
        <label for="email" class="form-label">Email</label>
        <input
          type="email"
          v-model="email"
          class="form-control"
          id="email"
          required
        />
      </div>
      <div class="mb-3">
        <label for="password" class="form-label">Password</label>
        <input
          type="password"
          v-model="password"
          class="form-control"
          id="password"
          required
        />
      </div>
      <button type="submit" class="btn btn-success">Registrati</button>
    </form>
  </div>
</template>

<script>
import { register } from "@/services/auth.js";

export default {
  name: "RegisterView",
  data() {
    return {
      name: "",
      email: "",
      password: "",
    };
  },
  methods: {
    async register() {
      try {
        await register(this.name, this.email, this.password);
        this.$router.push("/login");
      } catch (error) {
        console.error("Errore durante la registrazione", error);
      }
    },
  },
};
</script>
