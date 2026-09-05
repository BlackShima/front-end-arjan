<script setup lang="ts">
import OrganizerService from '@/services/OrganizerService'
import OrganizerCard from '@/components/OrganizerCard.vue'
import type { Organizer } from '@/types'
import { ref, computed, watchEffect } from 'vue'

const props = defineProps({
  page: {
    type: Number,
    required: true,
  },
})

const organizers = ref<Organizer[] | null>(null)
const totalOrganizers = ref<number>(0)
const page = computed(() => props.page || 1)


const hasNextPage = computed(() => {
  const totalPages = Math.ceil(totalOrganizers.value / 3)
  return page.value < totalPages
})

watchEffect(() => {
  organizers.value = null
  OrganizerService.getOrganizers(3, page.value)
    .then((response) => {
      organizers.value = response.data
      totalOrganizers.value = Number(response.headers['x-total-count']) || 0
    })
    .catch((error) => {
      console.error('There was an error!', error)
    })
})
</script>

<template>
  <h1>Organizers List</h1>
  <div class="flex flex-col items-center">
    <!-- เปลี่ยนเป็น OrganizerCard และส่ง prop :organizer -->
    <OrganizerCard
      v-for="organizer in organizers"
      :key="organizer.id"
      :organizer="organizer"
    />

    <div class="pagination">
      <RouterLink
        id="page-prev"
        :to="{ name: 'organizer', query: { page: page - 1 } }"
        rel="prev"
        v-if="page != 1"
        >Prev Page</RouterLink
      >

      <RouterLink
        id="page-next"
        :to="{ name: 'organizer', query: { page: page + 1 } }"
        rel="next"
        v-if="hasNextPage"
        >Next Page</RouterLink
      >
    </div>
  </div>
</template>

<style scoped>
.pagination {
  display: flex;
  width: 290px;
}
.pagination a {
  flex: 1;
  text-decoration: none;
  color: #2c3e50;
}

#page-prev {
  text-align: left;
}

#page-next {
  text-align: right;
}
</style>