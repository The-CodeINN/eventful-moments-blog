<template>
  <NavBar />
  <main>
    <div class="w-full max-w-md mx-auto m-9">
      <router-view />
    </div>
  </main>
  <FooTer />
</template>

<script>
import NavBar from "./NavBar.vue";
import FooTer from "./FooTer.vue";

export default {
  name: "DefaultLayout",
  components: {
    NavBar,
    FooTer,
  },
};
</script>
