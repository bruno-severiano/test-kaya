<template>
  <div class="container py-5">
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
      <li v-if="item.dateUpdated"><strong>Updated:</strong> {{ item.dateUpdated.split('-').reverse().join('/') }}</li>
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
</template>

<script setup lang="ts">
  import { ref } from 'vue'

  // Hardcoded JSON object
  const item = ref({
    id: "report-001",
    title: "Creative Efficiency Benchmark – Q1 2025",
    subtitle: "Your top performing creatives across Meta, TikTok, and YouTube.",
    backgroundImageUrl: "https://www.datocms-assets.com/147255/1740393244-home-main.webp",
    cta: "View Full Creative Breakdown · Q1 2025",
    path: "/client-reports-q1-creative",
    tag: "Performance Overview",
    theme: "Creative Benchmarking",
    datePublished: "05/04/2025",
    dateUpdated: "2025-04-06"
  })

  // Optional: fallback image handling
  function onImgError(event: Event) {
    const target = event.target as HTMLImageElement
    target.src = 'https://cdn-icons-png.flaticon.com/512/13434/13434972.png'
  }
</script>
