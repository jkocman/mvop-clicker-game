<template>
    <PanelContainer title="Achievments" :heading="true">
        <section class="achievments">
            <Achievment v-for="achievement in achievements" :key="achievement.label" :label="achievement.label"
                :completed="achievement.completed" :image="achievement.image">
            </Achievment>
        </section>
    </PanelContainer>
</template>

<script setup lang="ts">
import Achievment from "@/components/Achievment.vue";
import PanelContainer from "./PanelContainer.vue";
import { useAchievementsStore } from "@/stores/achievments";
import { storeToRefs } from "pinia";

const store = useAchievementsStore();
const { achievements } = storeToRefs(store);
</script>

<style lang="scss" scoped>
.achievments {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    margin-top: 10px;
    gap: 10px;

    @media (max-width: 1045px) {
        grid-template-columns: repeat(4, 1fr);
    }

    @media (max-width: 375px) {
        grid-template-columns: repeat(2, 1fr);
    }
}
</style>
