<template>
  <div class="container py-5" v-if="item">
    <ul class="list-unstyled mb-2">
      <li>
        <span class="badge text-bg-success">{{ item.tag }}</span>
      </li>
    </ul>
    <h1 class="fw-bold mb-3">
      <span class="fs-5 d-block">{{ item.theme }}</span>
      {{ item.title }}
    </h1>
    <p class="mb-3">{{ item.subtitle }}</p>
    <ul class="list-unstyled mb-3">
      <li><strong>Published:</strong> {{ item.datePublished }}</li>
      <li v-if="item.dateUpdated">
        <strong>Updated:</strong> {{ item.dateUpdated.split('-').reverse().join('/') }}
      </li>
    </ul>
    <div v-if="item.backgroundImageUrl" class="mb-4">
      <img
        :src="item.backgroundImageUrl"
        :alt="item.title"
        class="img-fluid"
        @error="onImgError"
      />
    </div>
  </div>

  <div v-else class="container py-5 text-danger">
    Report not found.
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import reports from '../files/reports.json'

const route = useRoute()
const itemId = route.params.id as string

const item = ref(
  reports.find((entry) => entry.path === route.path)
)

function onImgError(event: Event) {
  const target = event.target as HTMLImageElement
  target.src = 'https://cdn-icons-png.flaticon.com/512/13434/13434972.png'
}
</script>
