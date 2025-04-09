import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    user: null,
    token: localStorage.getItem("token") || "",
  }),
  actions: {
    login(user) {
      this.user = user;
      this.token = user.token;
      localStorage.setItem("token", this.token);
    },
    logout() {
      this.user = null;
      this.token = "";
      localStorage.removeItem("token");
    },
  },
});
