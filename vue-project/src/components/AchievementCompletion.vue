<template>
    <div class="achievement-box">
      <img :src="image" alt="Achievement image" class="achievement-img" />
      <p class="achievement-name">{{ name }}</p>
    </div>
  </template>
  
  <script lang="ts" setup>
  defineProps<{
    name: string
    image: string
  }>()
  </script>
  
  <style lang="scss" scoped>
  .achievement-box {
    position: fixed;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    background: rgba(0, 0, 0, 0.85);
    border: 2px solid red;
    border-radius: 10px;
    padding: 12px 20px;
    z-index: 9999;
    display: flex;
    align-items: center;
    gap: 12px;
    color: white;
    box-shadow: 0 0 15px red;
    animation: fadeInOut 3s ease-in-out forwards;
  }
  
  .achievement-img {
    width: 40px;
    height: 40px;
  }
  
  .achievement-name {
    font-weight: bold;
    font-size: 18px;
  }
  
  @keyframes fadeInOut {
    0% {
      opacity: 0;
      transform: translate(-50%, 20px);
    }
    10% {
      opacity: 1;
      transform: translate(-50%, 0);
    }
    90% {
      opacity: 1;
    }
    100% {
      opacity: 0;
      transform: translate(-50%, -20px);
    }
  }
  </style>
  