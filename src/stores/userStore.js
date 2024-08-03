import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
  state: () => ({
    user: null,
    isAuthenticated: false,
  }),
  actions: {
    logIn(user) {
      this.user = user;
      this.isAuthenticated = true;
    },
    logOut() {
      this.user = null;
      this.isAuthenticated = false;
    },
  },
});
