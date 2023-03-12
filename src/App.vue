<template>
  <div id="app" class="bg-white h-screen">
    <NavBar />
    <HomePage />
    <FooTer />
  </div>
</template>

<script>
import NavBar from "./Components/NavBar.vue";
import FooTer from "./Components/FooTer.vue";
import HomePage from "./pages/HomePage.vue";
export default {
  name: "App",
  components: {
    NavBar,
    HomePage,
    FooTer,
  },
};
</script>
