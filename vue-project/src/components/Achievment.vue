<template>
    <section class="achievment">
        <div :style="imageStyle"></div>
        <p>{{ label }}</p>
    </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
    label: string
    image: string
    completed: boolean
}>()

const imageStyle = computed(() => ({
    width: '45px',
    height: '45px',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    borderRadius: '8px',
    filter: props.completed ? 'none' : 'grayscale(100%)',
    backgroundImage: `url(${props.completed ? props.image : '/img/achievment-questionmark.png'})`
}))
</script>

<style lang="scss" scoped>
@use "@/assets/variables" as *;
@use "sass:map";
@use "sass:color";

.achievment {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    gap: 5px;

    p {
        font-size: map.get($font-sizes, "small");
        color: map.get($foreground-colors, "primary");
        text-align: center;
    }
}
</style>