<template>
    <section class="panel-container">
        <h2 v-if="heading" class="panel-title" @click="toggle">
            {{ title }}
            <i class="fa-solid fa-angle-down" :class="{ rotated: isOpen }"></i>
        </h2>
        <transition name="slide-fade">
            <div v-show="isOpen" class="panel-content">
                <slot></slot>
            </div>
        </transition>
    </section>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

defineProps<{ title: string, heading: boolean }>()

const isOpen = ref(false)

function toggle() {
    isOpen.value = !isOpen.value
}
</script>

<style lang="scss" scoped>
@use "@/assets/variables" as *;
@use "sass:map";

.panel-container {
    border-radius: 20px;
    background-color: map.get($background-colors, "primary");
    padding: 20px;
    overflow-y: auto;
    scrollbar-width: none;

    @media (max-width: 1445px) {
        margin-right: 20px;
    }
    @media (max-width: 780px) {
        margin-left: 20px;
    }

    .panel-title {
        text-align: center;
        font-size: map.get($font-sizes, "extra-large");
        color: map.get($foreground-colors, "primary");
        border-bottom: 2px solid map.get($foreground-colors, "secondary");
        padding-bottom: 5px;
        cursor: pointer;
        user-select: none;

        i {
            margin-left: 10px;
            transition: transform 0.3s ease;
        }

        .rotated {
            transform: rotate(180deg);
        }
    }

    .panel-content {
        overflow: hidden;
        margin-top: 15px;
    }
}

.panel-container::-webkit-scrollbar {
    display: none;
}

.slide-fade-enter-active,
.slide-fade-leave-active {
    transition: max-height 0.4s ease, opacity 0.4s ease;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
    max-height: 0;
    opacity: 0;
}

.slide-fade-enter-to,
.slide-fade-leave-from {
    max-height: 1000px;
    opacity: 1;
}
</style>
