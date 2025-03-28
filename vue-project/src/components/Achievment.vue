<template>
    <section class="achievment">
        <div></div>
        <p>{{ label }}</p>
    </section>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

defineProps<{ label: string }>();
</script>

<style lang="scss" scoped>
    @use "../assets/variables" as *;
    @use "sass:map";
    @use "sass:color";

    .achievment{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        gap: 5px;
        div{
            width: 45px;
            height: 45px;
            background-image: url("/img/achievment-questionmark.png");
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
            filter: grayscale(100%);
        }
        p{
            font-size: map.get($font-sizes, "small");
            color: map.get($foreground-colors, "primary");
            text-align: center;
        }
    }
</style>
