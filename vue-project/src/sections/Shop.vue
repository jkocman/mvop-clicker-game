<template>
    <section class="shop">
        <h2>Shop</h2>
        <section class="item-container">
            <ShopItem 
                v-for="item in availableItems" 
                :key="item.label"
                :label="item.label" 
                :image="item.image"
            />
        </section>
    </section>
</template>

<script setup lang="ts">
import ShopItem from '@/components/ShopItem.vue';
import { useScoreStore } from '@/stores/scoreStore';
import { computed } from 'vue';

const scoreStore = useScoreStore();

const shopItems = [
    { label: "Leg Helper", image: new URL("@/assets/img/shop/leg-helper.png", import.meta.url).href, requiredScore: 10 },
    { label: "Click XP", image: new URL("@/assets/img/shop/add-powerup.png", import.meta.url).href, requiredScore: 50 },
    { label: "Stomach Helper", image: new URL("@/assets/img/shop/stomach-helper.png", import.meta.url).href, requiredScore: 100 },
    { label: "Torso Helper", image: new URL("@/assets/img/shop/torso-helper.png", import.meta.url).href, requiredScore: 250 },
    { label: "Head Helper", image: new URL("@/assets/img/shop/head-helper.png", import.meta.url).href, requiredScore: 2 },
];

const availableItems = computed(() => {
    return shopItems.filter(item => scoreStore.maxScore >= item.requiredScore);
});
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