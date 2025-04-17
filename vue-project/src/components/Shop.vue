<template>
    <PanelContainer title="Shop">
        <ShopItem 
                v-for="item in availableItems" 
                :key="item.label"
                :label="item.label" 
                :image="item.image"
                :price="item.price"
                :count="item.count"
            />
    </PanelContainer>
</template>

<script setup lang="ts">
import ShopItem from '@/components/ShopItem.vue';
import { useScoreStore } from '@/stores/scoreStore';
import { useItemsStore } from '@/stores/shopItems';
import PanelContainer from './PanelContainer.vue';
import { computed } from 'vue';

const scoreStore = useScoreStore();
const itemsStore = useItemsStore();

const shopItems = itemsStore.items;

const availableItems = computed(() => {
    return shopItems.filter(item => scoreStore.maxScore >= item.requiredScore);
});
</script>