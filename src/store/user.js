// /store/user.js

import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
  state: () => ({
    user: null,
  }),

  actions: {
    async fetchUser() {
      const res = await fetch(
        "https://eventful-moments.onrender.com/api/v1/users/me"
      );

      const user = await res.json();
      this.user = user;
    },
    async signUp(email, password) {
      const res = await fetch(
        "https://eventful-moments.onrender.com/api/v1/users/signup",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        }
      );
      const user = await res.json();
      this.user = user;
    },
    async signIn(email, password) {
      const res = await fetch(
        "https://eventful-moments.onrender.com/api/v1/users/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        }
      );
      const user = await res.json();
      this.user = user;
    },
  },
});
