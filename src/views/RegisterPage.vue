<template>
  <div class="w-full max-w-md mx-auto m-9">
    <h1 class="text-4xl font-bold mb-3">Create an Account</h1>

    <form class="flex flex-col gap-3">
      <label for="fullname" class="text-gray-500">Fullname</label>
      <input type="text" class="border border-gray-300 rounded-md p-2 my-2" />
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
        Create
      </button>
    </form>
  </div>
</template>

<script>
export default {
  name: "RegisterPage",
};
</script>
