<template>
  <div class="w-full max-w-md mx-auto m-9">
    <h1 class="text-4xl font-bold mb-3">Welcome back!</h1>
    <p class="text-gray-500 mb-3">
      Hi, my name is Eventful Moments, I am a bucket… no, not the bucket of
      water but I store awesome moments you will like to have in coming years.
    </p>
    <form class="flex flex-col gap-3">
      <label for="email" class="text-gray-500">Email</label>
      <input type="email" class="border border-gray-300 rounded-md p-2 my-2" />
      <label for="password" class="text-gray-500">Password</label>
      <input
        type="password"
        class="border border-gray-300 rounded-md p-2 my-2"
      />
      <button
        type="submit"
        class="bg-secondary text-white rounded-md p-2 my-2 w-[30%] mx-auto"
      >
        Log in
      </button>
    </form>
  </div>
</template>

<script>
export default {
  name: "HomePage",
};
</script>
