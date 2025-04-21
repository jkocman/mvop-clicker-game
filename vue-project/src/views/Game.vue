<template>
    <main>
        <section class="content">
            <Target></Target>
            <Shop></Shop>
            <Achievments></Achievments>
            <img @click="hide()" :class="className" src="/img/hidden-cat.png" alt="">

            <div 
                v-for="(achievement, index) in achievementStore.completedRecently" 
                :key="achievement.label" 
                :style="{ 
                    bottom: `${70 * index + 20}px`,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    position: 'fixed',
                }"
            >
                <AchievementCompletion :name="achievement.label" :image="achievement.image" />
            </div>
        </section>
    </main>
</template>

<script setup lang="ts">
import Target from "../components/Target.vue";
import Shop from "@/components/Shop.vue";
import Achievments from "@/components/Achievments.vue";
import { useAchievementsStore } from "@/stores/achievments";
import { ref } from 'vue';
import AchievementCompletion from "@/components/AchievementCompletion.vue";

const achievementStore = useAchievementsStore();
let className = ref('');

const hide = () => {
    achievementStore.complete('Hidden');
    className.value = 'hide';
}
</script>

<style lang="scss" scoped>
@use "@/assets/variables" as *;

main{
    display: flex;
    align-items: center;
    height: auto;
    justify-content: center;
    .content{
        margin-top: 12px;
        width: var(--content-size);
        display: grid;
        grid-template-columns: 1fr 2fr;
        grid-template-rows: 252px 252px 252px;
        gap: 20px;
        margin-bottom: 10px;

        @media (max-width: 780px){
            grid-template-columns: 1fr;
            grid-template-rows: auto;
        }

        @media (max-height: 910px){
            grid-template-rows: 230px 230px 230px;
        }
        @media (max-height: 835px){
            grid-template-rows: 210px 210px 210px;
        }
        @media (max-height: 785px){
            grid-template-rows: 180px 180px 180px;
        }
        @media (max-height: 695px){
            grid-template-rows: 150px 150px 150px;
        }
        @media (max-height: 610px){
            grid-template-rows: 130px 130px 130px;
        }
        img{
            position: fixed;
            top: 200px;
            left: -40px;
            height: 100px;
            transform: rotate(60deg);
        }
        .hide{
            display: none;
        }
    }
}
</style>