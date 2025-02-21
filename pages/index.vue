<script setup lang="ts">
const { $client } = useNuxtApp()

const { data: posts } = await $client.getPosts.useQuery()
</script>

<template>
  <div>
    <ul>
      <li v-for="post in posts?.posts" :key="post.id">
        {{ post.title }} | {{ post.content }}
      </li>
    </ul>
  </div>
</template>
