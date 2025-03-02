<template>
    <section class="shop">
        <h2>Shop</h2>
        <section class="item-container">
            <ShopItem 
                v-for="(label, index) in itemLabels" 
                :key="index" 
                :label="label" 
                :image="imagePaths[index]"
            />
        </section>
    </section>
</template>

<script setup lang="ts">
import ShopItem from '@/components/ShopItem.vue';

const itemLabels = [
    "Leg Helper",
    "Click XP",
    "Stomach Helper",
    "Torso Helper",
    "Head Helper"
];

const imagePaths = [
    new URL("@/assets/img/shop/leg-helper.png", import.meta.url).href,
    new URL("@/assets/img/shop/add-powerup.png", import.meta.url).href,
    new URL("@/assets/img/shop/stomach-helper.png", import.meta.url).href,
    new URL("@/assets/img/shop/torso-helper.png", import.meta.url).href,
    new URL("@/assets/img/shop/head-helper.png", import.meta.url).href
];
</script>


<style lang="scss" scoped>
@use "../assets/variables" as *;
@use "sass:map";
@use "sass:color";

.shop{
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

.shop::-webkit-scrollbar {
    display: none;
}
</style>