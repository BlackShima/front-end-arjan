<script setup lang="ts">
import { useOrganizerStore } from '@/stores/Organizer'
import { storeToRefs } from 'pinia'

const store = useOrganizerStore()
const { organizer } = storeToRefs(store)
</script>
<template>
  <div v-if="organizer">
    <h1>{{ organizer.name }}</h1>
    <nav>
      <RouterLink :to="{ name: 'event-detail-view' }">Details</RouterLink>
      |
      <RouterLink :to="{ name: 'event-register-view' }">Register</RouterLink>
      |
      <RouterLink :to="{ name: 'event-edit-view' }">Edit</RouterLink>
    </nav>
    <RouterView :event="organizer" />
  </div>
</template>
