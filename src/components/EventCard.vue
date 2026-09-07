<script setup lang="ts">
import type { Event } from '@/types'
// defineProps<{
//   msg: string
// }>()
defineProps<{
  event: Event
}>()
</script>

<template>
  <RouterLink class="event-link" :to="{ name: 'event-detail-view', params: { id: event.id } }">
    <div
      class="cursor-pointer border border-gray-600 p[20px] w-[250px] mb-[18px] hover:scale-101 hover:shadow-sp"
    >
      <h2>{{ event.title }}</h2>
      <span>@{{ event.category }} on {{ event.location }}</span>
    </div>
  </RouterLink>
</template>

<style scoped>
.event-class {
  display: flex;
  justify-content: center;
}
.event-card {
  padding: 20px;
  width: 250px;
  cursor: pointer;
  border: 1px solid #39495c;
  margin-bottom: 18px;
}

.event-link {
  text-decoration: none;
  color: #2c3e50;
}
</style>
