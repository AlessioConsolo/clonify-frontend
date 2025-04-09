<template>
  <div class="login-view">
    <h1>Login</h1>
    <form @submit.prevent="login">
      <div>
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="email" required />
      </div>
      <div>
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="password" required />
      </div>
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script>
import { loginUser } from "@/services/auth.js";

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
        await loginUser(this.email, this.password);
        this.$router.push("/"); // Redirect alla home dopo login
      } catch (error) {
        console.error("Login fallito", error);
      }
    },
  },
};
</script>

<style scoped>
.login-view {
  padding: 20px;
}
</style>
