<script setup lang="ts">
import { toRefs } from 'vue'
import { type Organizer } from '@/types'

const props = defineProps<{
  event: Organizer
}>()
const { event } = toRefs(props)
</script>
<template>
  <p>{{ event.id }} on {{ event.name }} @ {{ event.address }}</p>
</template>
