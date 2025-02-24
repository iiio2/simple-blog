<script setup>
import { useForm } from 'vee-validate'

const { $client } = useNuxtApp()

const { values, defineField } = useForm()

const [title, titleAttrs] = defineField('title')
const [content, contentAttrs] = defineField('content')

const onSubmit = async () => {
  await $client.addPost.mutate(values)
  console.log(`submitted`)
}
</script>

<template>
  <form @submit.prevent="onSubmit">
    <input v-model="title" v-bind="titleAttrs" type="text" />

    <input v-model="content" v-bind="contentAttrs" type="text" />
    <button type="submit">submit</button>
  </form>

  <pre>values: {{ values.title }} {{ values.content }}</pre>
</template>
