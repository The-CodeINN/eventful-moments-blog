<template>
  <div class="w-full max-w-md mx-auto m-9">
    <h1 class="text-4xl font-bold mb-3">Create an Account</h1>

    <form class="flex flex-col gap-3" @submit.prevent="onSubmit">
      <label for="fullname" class="text-gray-500">Fullname</label>
      <input
        id="fullname"
        v-model="fullname"
        type="text"
        class="border border-gray-300 rounded-md p-2 my-2"
      />
      <label for="email" class="text-gray-500">Email</label>
      <input
        id="email"
        v-model="email"
        type="email"
        class="border border-gray-300 rounded-md p-2 my-2"
      />
      <label for="password" class="text-gray-500">Password</label>
      <input
        id="password"
        v-model="password"
        type="password"
        class="border border-gray-300 rounded-md p-2 my-2"
      />
      <button
        type="submit"
        class="bg-secondary text-white rounded-md p-2 my-2 w-[30%] mx-auto"
      >
        Create
      </button>
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "RegisterPage",
  data() {
    return {
      fullname: "",
      email: "",
      password: "",
    };
  },
  mounted() {
    if (localStorage.getItem("user-info")) {
      this.$router.push("/blog");
    }
  },
  methods: {
    async onSubmit() {
      const url = `https://eventful-moments.onrender.com/api/v1/users/signup`;
      const res = await axios.post(
        url,
        {
          fullname: this.fullname,
          email: this.email,
          password: this.password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.warn(res);
      if (res.status === 201) {
        localStorage.setItem("user-info", JSON.stringify(res.data));
        this.$router.push("/blog");
      }
    },
  },
};
</script>
