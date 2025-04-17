<template>
    <PanelContainer title="Achievments">
        <section class="achievments">
            <Achievment v-for="(label, index) in labels" :key="index" :label="label"></Achievment>
        </section>
    </PanelContainer>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Achievment from '@/components/Achievment.vue';
import PanelContainer from "./PanelContainer.vue";

const labels = ref([
    "First Shot",
    "New Upgrade",
    "All Parts",
    "Hidden",
    "All Helpers",
    "100k XP",
    "100 Of One Upgrade",
    "All Upgrades",
    "Two Milion XP"
]);
</script>

<style lang="scss" scoped>
.achievments{
        display: grid;
        grid-template-columns: repeat(6, 1fr);
        margin-top: 10px;
        gap: 10px;

        @media(max-width: 1045px){
            grid-template-columns: repeat(4, 1fr);
        }
        @media(max-width: 375px){
            grid-template-columns: repeat(2, 1fr);
        }
    }
</style>