<template>
  <header
    class="bg-primary text-white py-6 px-6 border-borderColor border-solid flex justify-center items-center"
  >
    <div class="w-full flex">
      <!-- Logo -->
      <div class="w-full flex items-center cursor-pointer">
        <router-link to="/blog" class="font-bold italic mx-9">Eventful Moments.</router-link>
      </div>

      <!-- Links -->
      <div class="flex justify-end w-full">
        <router-link to="/" class="text-white hover:text-gray-300 mx-3"
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