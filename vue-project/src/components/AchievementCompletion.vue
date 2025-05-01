<template>
    <div class="achievement-box">
        <img :src="image" alt="Achievement image" class="achievement-img" />
        <p class="achievement-name">{{ name }} Unlocked</p>
    </div>
</template>
  
<script lang="ts" setup>
    defineProps<{
        name: string
        image: string
    }>()
</script>
  
<style lang="scss" scoped>
    @use "../assets/variables" as *;
    @use "sass:map";
  
    .achievement-box {
        position: fixed;
        bottom: 20px;
        left: 50%;
        transform: translateX(-50%);
        background: map.get($background-colors, "primary");
        border: 2px solid map.get($foreground-colors, "secondary");
        border-radius: 10px;
        padding: 10px 20px;
        display: flex;
        align-items: center;
        gap: 12px;
        color: map.get($foreground-colors, "primary");
        box-shadow: 0 0 15px map.get($foreground-colors, "secondary");
        animation: fadeIn 0.5s ease-out forwards;
    }
  
    .achievement-img {
        width: 40px;
        height: 40px;
        object-fit: cover;
    }
  
    .achievement-name {
        font-weight: bold;
        font-size: map.get($font-sizes, "normal");
    }
    @keyframes fadeIn {
        0% {
            opacity: 0;
            transform: translate(-50%, 20px);
        }
        100% {
            opacity: 1;
            transform: translate(-50%, 0);
        }
    }
</style>
  