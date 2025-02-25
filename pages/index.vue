<script setup lang="ts">
import AddPost from '../components/AddPost.vue'
const { $client } = useNuxtApp()

const { data: posts } = await $client.getPosts.useQuery()
</script>

<template>
  <div>
    <ul>
      <li v-for="post in posts?.posts" :key="post.id">
        {{ post.title }} | {{ post.content }} |
      </li>
    </ul>
    <AddPost />
  </div>
</template>
