<script setup lang="ts">
import { toRefs } from 'vue'
import { type Event } from '@/types'
import { useRouter } from 'vue-router'
import { useMessageStore } from '@/stores/message'
const router = useRouter()
const props = defineProps<{
  event: Event
}>()
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { event } = toRefs(props)
const store = useMessageStore()
const register = () => {
  // If the registration API call successful
  // Push back to the event details view
  store.updateMessage(`You have successfully registered for the ${props.event.title}!`)
  setTimeout(() => {
    store.resetMessage()
  }, 3000)
  router.push({ name: 'event-detail-view' })
}
</script>
<template>
  <p>Register event here</p>
  <button @click="register">Register</button>
</template>
