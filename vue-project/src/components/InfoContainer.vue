<template>
    <section class="panel-container">
        <h2 v-if="heading" class="panel-title" @click="toggle">
            {{ title }}
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

defineProps<{title: string, heading: boolean}>()

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
    background-color: map.get($background-colors, "secondary");
    padding: 20px;
    box-shadow: 0 0 10px 1px rgba(180, 180, 180, 0.192);
    overflow-y: auto;
    scrollbar-width: none;

    @media(max-width: 1445px){
        margin-right: 20px;
    }
    @media(max-width: 780px){
        margin-left: 20px;
    }

    .panel-title {
        text-align: center;
        font-size: map.get($font-sizes, "heading");
        color: map.get($foreground-colors, "primary");
        border-bottom: 2px solid map.get($foreground-colors, "secondary");
        padding-bottom: 5px;
        cursor: pointer;
        user-select: none;
    }

    .panel-content {
        overflow: hidden;
        margin-top: 15px;
    }
}

.panel-container::-webkit-scrollbar {
    display: none;
}

.slide-fade-enter-active, .slide-fade-leave-active {
    transition: max-height 0.4s ease, opacity 0.4s ease;
}
.slide-fade-enter-from, .slide-fade-leave-to {
    max-height: 0;
    opacity: 0;
}
.slide-fade-enter-to, .slide-fade-leave-from {
    max-height: 1000px;
    opacity: 1;
}
</style>
  