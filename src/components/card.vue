<template>
    <div
        :id="item.id"
        class="card"
        :href="item.path"
    >
        <div class="card-header text-bg-secondary fw-bold d-flex justify-content-between align-items-center">
        {{ item.theme }}
        <span class="badge text-bg-light">
            <time :datetime="item.dateUpdated ? item.dateUpdated : item.datePublished.split('/').reverse().join('-')">
            {{ item.dateUpdated ? item.dateUpdated.split('-').reverse().join('/') : item.datePublished.split('-').reverse().join('/') }}
            </time>
        </span>
        </div>
        <a
        :href="item.path"
        :title="item.title"
        v-if="item.backgroundImageUrl"
        >
        <figure class="item-card--image">
            <img
            class="img-fluid"
            loading="lazy"
            :src="item.backgroundImageUrl"
            :alt="item.title"
            >
        </figure>
        </a>
        <div class="card-body">
        <ul class="list-unstyled mb-2">
            <li>
                <span class="badge text-bg-secondary">{{ item.tag }}</span>
            </li>
        </ul>
        <h2 class="card-title fs-4">
            <a class="fw-bold" :href="item.path">{{ item.title }}</a>
        </h2>
        <p class="card-text">{{ item.subtitle }}</p>
        <a
            :href="item.path"
            class="btn btn-primary"
        >
            {{ item.cta || "View Content" }}
        </a>
        </div>
    </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps({
  item: {
    type: Object,
    required: true
  }
})

const { item } = props
</script>