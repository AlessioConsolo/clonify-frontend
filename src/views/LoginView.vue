<template>
  <div class="container mt-5" style="max-width: 500px">
    <h2 class="mb-4">Login</h2>
    <form @submit.prevent="login">
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
      <button type="submit" class="btn btn-primary">Accedi</button>
    </form>
  </div>
</template>

<script>
import { login } from "@/services/auth.js";

export default {
  name: "LoginView",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async login() {
      try {
        await login(this.email, this.password);
        this.$router.push("/");
      } catch (error) {
        console.error("Login fallito", error);
      }
    },
  },
};
</script>
