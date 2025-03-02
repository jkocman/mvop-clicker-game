<template>
    <section class="achievment-container">
        <h2>Achievments</h2>
        <section class="achievments">
            <Achievment v-for="(label, index) in labels" :key="index" :label="label"></Achievment>
        </section>
    </section>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Achievment from '@/components/Achievment.vue';

const labels = ref([
    "First Shot",
    "New Upgrade",
    "All Parts",
    "Hidden",
    "All Helpers",
    "100k XP",
    "Hidden",
    "100 Of One Upgrade",
    "All Upgrades",
    "Two Milion XP"
]);
</script>

<style lang="scss" scoped>
@use "../assets/variables" as *;
@use "sass:map";


.achievment-container{
    background-color: map.get($background-colors, "secondary");
    border-radius: 20px;
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
}
.achievment-container::-webkit-scrollbar{
    display: none;
}
</style>