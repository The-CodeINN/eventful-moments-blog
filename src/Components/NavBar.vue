<template>
  <nav
    class="bg-primary text-white py-6 px-6 border-borderColor border-solid md:flex justify-between items-center flex"
  >
    <div class="flex items-center cursor-pointer">
      <span class="font-bold italic mx-9">Eventful Moments.</span>
    </div>

    <ul class="md:flex md:items-center flex gap-10">
      <li v-for="link in links" :key="link.name">
        <router-link :to="link.link" class="text-white hover:text-gray-300">{{
          link.name
        }}</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "NavBar",

  setup() {
    let links = [
      {
        name: "Login",
        link: "/login",
      },
      {
        name: "Register",
        link: "/register",
      },
    ];

    return {
      links,
    };
  },
};
</script>
