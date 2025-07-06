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
        <figure class="card-image text-center">
            <img
                class="img-fluid"
                loading="lazy"
                :src="imageSrc"
                :alt="item.title"
            >
        </figure>
        </a>
        <div class="card-body">
            <ul class="list-unstyled mb-2">
                <li>
                    <span class="badge text-bg-success">{{ item.tag }}</span>
                </li>
            </ul>
            <h2 class="card-title fw-bold fs-4">
                <template v-if="item.path">
                    <a class="fw-bold" :href="item.path">
                        {{ item.title }}
                    </a>
                </template>
                <template v-else>
                    {{ item.title }}
                </template>
            </h2>
            <p class="card-text" v-if="item.subtitle">
                {{ item.subtitle }}
            </p>
            <a
                :href="item.path"
                class="btn btn-primary"
                v-if="item.path"
            >
                {{ item.cta || "View Content" }}
            </a>
        </div>
    </div>
</template>

<style scoped lang="scss">
    .card{
        & &-image{
            transition: opacity 0.3s ease-in-out;
            &:hover, &:focus{
                opacity: 0.8;
            }
        }
        & &-title{
            a{
                transition: color 0.3s ease-in-out;
            }
        }
    }
</style>

<script setup lang="ts">
import { defineProps, ref, onMounted } from 'vue'

const props = defineProps({
  item: {
    type: Object,
    required: true
  }
})

const fallbackImage = 'https://cdn-icons-png.flaticon.com/512/13434/13434972.png'
const imageSrc = ref(fallbackImage)

onMounted(() => {
  const testImg = new Image()
  testImg.onload = () => {
    imageSrc.value = props.item.backgroundImageUrl
  }
  testImg.onerror = () => {
    imageSrc.value = fallbackImage
  }

  testImg.src = props.item.backgroundImageUrl
})
</script>