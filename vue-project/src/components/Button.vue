<template>
    <button :class="buttonClass">
        <slot> {{ props.label }} </slot>    
    </button>
</template>

<script setup lang="ts">
import { computed } from 'vue';


const props = defineProps(["label", "type"])

const buttonClass = computed(() => {
  return props.type === "main" ? "main" : "secondary";
});

</script>

<style lang="scss" scoped>
@use "sass:map";
@use "sass:color";
@use "../assets/variables.scss"as *;


.main{
    font-size: map.get($font-sizes, "normal");
    background-color: map.get($background-colors, "tertiary");
    color: map.get($foreground-colors, "primary");
    padding: 10px;
    border: 3px solid color.scale(map.get($background-colors, "tertiary"), $lightness: 20%);
    border-radius: 5px;
    box-shadow: 0 0 10px 3px rgba(180, 180, 180, 0.192);
    cursor: pointer;
    margin-right: 20px;
}
.secondary{
    font-size: map.get($font-sizes, "small");
    padding: 5px 10px;
    background-color: transparent;
    color: map.get($foreground-colors, "primary");
    border: none;
    cursor: pointer;
}
</style>