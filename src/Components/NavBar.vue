<!-- <template>
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
        name: "Homepage",
        link: "/",
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
</script> -->

<template>
  <header
    class="bg-primary text-white py-6 px-6 border-borderColor border-solid flex justify-center items-center"
  >
    <div class="w-full flex">
      <!-- Logo -->
      <div class="w-full flex items-center cursor-pointer">
        <span class="font-bold italic mx-9">Eventful Moments.</span>
      </div>

      <!-- Links -->
      <div class="flex justify-end w-full">
        <router-link to="/login" class="text-white hover:text-gray-300 mx-3"
          >Login</router-link
        >
        <router-link to="/register" class="text-white hover:text-gray-300 mx-3"
          >Register</router-link
        >
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "NavBar",
};
</script>
