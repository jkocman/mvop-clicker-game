<template>
    <section class="panel-container">
        <h2 v-if="heading" class="panel-title">{{ title}}</h2>
            <slot></slot>
    </section>
</template>

<script lang="ts" setup>

defineProps<{title: string, heading: boolean}>();
</script>

<style lang="scss" scoped>
@use "@/assets/variables" as *;
@use "sass:map";
@use "sass:color";

.panel-container{
    grid-row: span 2;
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

    h2{
        text-align: center;
        font-size: map.get($font-sizes, "heading");
        color: map.get($foreground-colors, "primary");
        border-bottom: 2px solid map.get($foreground-colors, "secondary");
        padding-bottom: 5px;
    }
}

.panel-container::-webkit-scrollbar {
    display: none;
}
</style>