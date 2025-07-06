<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container">
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a
                            class="nav-link"
                            aria-current="page"
                            href="/"
                            v-if="route.path !== '/'"
                        >
                            <- All Reports
                        </a>
                        <span v-else class="nav-link active fw-bold">
                            All Reports
                        </span>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()
</script>