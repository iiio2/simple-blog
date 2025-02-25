<script setup>
import { useForm } from 'vee-validate'

const { $client } = useNuxtApp()

const { values, defineField } = useForm({
  initialValues: {
    title: '',
    content: '',
  },
})

const [title, titleAttrs] = defineField('title')
const [content, contentAttrs] = defineField('content')

const onSubmit = async () => {
  await $client.addPost.mutate({
    title: values.title,
    content: values.content,
  })
  await refreshNuxtData()
  console.log(`submitted`)
}
</script>

<template>
  <form @submit.prevent="onSubmit">
    <input v-model="title" v-bind="titleAttrs" type="text" />

    <input v-model="content" v-bind="contentAttrs" type="text" />
    <button type="submit">submit</button>
  </form>
</template>
