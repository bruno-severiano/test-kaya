<template>
  <header class="header-main py-5">
    <div class="container text-center">
      <h1 class="m-0">Reports</h1>
    </div>
  </header>
  <section class="section-full">
    <div class="container">
      <div class="row col-lg-8 offset-lg-2">
        <ul class="list-unstyled">
          <li
            class="mb-4"
            v-for="item in itemList"
            :key="item.id"
          >
            <card :item="item" />
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import card from './components/card.vue';
import { ref } from 'vue';
import reports from './files/reports.json';

// IMPORT JSON
const itemList = ref(reports);
</script>
