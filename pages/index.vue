<script setup lang="ts">
const { $client } = useNuxtApp()

const { data: hello } = await $client.hello.useQuery({})
</script>

<template>
  <pre>{{ hello?.greeting }}</pre>
  <div></div>
</template>
