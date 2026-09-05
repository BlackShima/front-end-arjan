<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { useMessageStore } from '@/stores/message'
import { storeToRefs } from 'pinia'
const store = useMessageStore()
const { message } = storeToRefs(store)
</script>

<template>
  <div class="text-center text-grey-700 antialiased">
    <header>
      <div id="flashMessage" class="animate-fade" v-if="message">
        <h4>
          {{ message }}
        </h4>
      </div>
      <div class="wrapper">
        <nav class="py-6">
          <RouterLink
            class="font-bold text-gray-700"
            exact-active-class="text-green-500"
            :to="{ name: 'event-list-view' }"
            >Event</RouterLink
          >
          |
          <RouterLink
            class="font-bold text-gray-700"
            exact-active-class="text-green-500"
            :to="{ name: 'about' }"
            >About</RouterLink
          >
          |
          <RouterLink
            class="font-bold text-gray-700"
            exact-active-class="text-green-500"
            :to="{ name: 'organizer' }"
            >Organizer</RouterLink
            >
        </nav>
      </div>
    </header>

    <RouterView />
  </div>
</template>

<style>
h2 {
  font-size: 20px;
}
</style>
