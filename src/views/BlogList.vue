<template>
  <div class="container mx-auto my-8 px-4 lg:px-0 lg:w-3/4">
    <div class="grid grid-cols-2 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 w-screen">
      <div v-for="blog in blogs" :key="blog.id" class="bg-white shadow-lg rounded-lg overflow-hidden">
        <div class="p-4">
          <h2 class="font-bold text-gray-800 text-xs">{{ blog.title }}</h2>
          <p class="text-gray-600 mt-2 text-xs">{{ blog.description }}</p>
          <div class="flex justify-end mt-4">
            <a href="#" class="text-blue-500 hover:text-blue-700 font-bold">View Details</a>
            <div class="mt-4 text-xs text-gray-500">{{ blog.date }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      blogs: [
        {
          id: 1,
          title: "Lorem ipsum began as scrambled, nonsensical Latin derived from Cicero’s 1st-century BC text De Finibus Bonorum et Malorum.",
          description: "Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. “It’s not Latin, though it looks like it, and it actually says nothing,” Before & After magazine answered a curious reader, “Its ‘words’ loosely approximate the frequency with which letters occur in English, which is why at a glance it looks pretty real. Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. “It’s not Latin, though it looks like it, and it actually says nothing,” Before & After magazine answered a curious reader, “Its ‘words’ loosely approximate the frequency with which letters occur in English, which is why at a glance it looks pretty real.",
          date: "2023-03-12",
        },
        {
          id: 2,
          title: "Lorem ipsum began as scrambled, nonsensical Latin derived from Cicero’s 1st-century BC text De Finibus Bonorum et Malorum.",
          description: "Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. “It’s not Latin, though it looks like it, and it actually says nothing,” Before & After magazine answered a curious reader, “Its ‘words’ loosely approximate the frequency with which letters occur in English, which is why at a glance it looks pretty real. Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. “It’s not Latin, though it looks like it, and it actually says nothing,” Before & After magazine answered a curious reader, “Its ‘words’ loosely approximate the frequency with which letters occur in English, which is why at a glance it looks pretty real.",
          date: "2023-03-11",
        },
        {
          id: 3,
          title: "Lorem ipsum began as scrambled, nonsensical Latin derived from Cicero’s 1st-century BC text De Finibus Bonorum et Malorum.",
          description: "Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. “It’s not Latin, though it looks like it, and it actually says nothing,” Before & After magazine answered a curious reader, “Its ‘words’ loosely approximate the frequency with which letters occur in English, which is why at a glance it looks pretty real. Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. “It’s not Latin, though it looks like it, and it actually says nothing,” Before & After magazine answered a curious reader, “Its ‘words’ loosely approximate the frequency with which letters occur in English, which is why at a glance it looks pretty real.",
          date: "2023-03-10",
        },
        {
          id: 4,
          title: "Lorem ipsum began as scrambled, nonsensical Latin derived from Cicero’s 1st-century BC text De Finibus Bonorum et Malorum.",
          description: "Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. “It’s not Latin, though it looks like it, and it actually says nothing,” Before & After magazine answered a curious reader, “Its ‘words’ loosely approximate the frequency with which letters occur in English, which is why at a glance it looks pretty real. Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. “It’s not Latin, though it looks like it, and it actually says nothing,” Before & After magazine answered a curious reader, “Its ‘words’ loosely approximate the frequency with which letters occur in English, which is why at a glance it looks pretty real.",
          date: "2023-03-09",
        },
      ],
    };
  },
};
</script>

<style scoped>
/* Mobile styles */
@media (max-width: 640px) {
  .grid-cols-1 {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
}
</style>
