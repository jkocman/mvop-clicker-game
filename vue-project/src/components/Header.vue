<template>
    <header v-if="isHeaderVisible">
        <section class="content">
            <section class="logo-container" @click="router.push('/')">
                <img src="/img/target-outlined.png" alt="">
                <h1>Target <span>Shooter</span></h1>
            </section>
            <section class="button-container">
                <button class="info-button" @click="infoPush()">
                    <i class="fa-solid fa-info"></i>
                </button>
                <button class="reset-button">Reset Game</button>
                <button @click="toggleHeader(false)" class="toggle-button">
                    <i class="fa-solid fa-angle-up"></i>
                </Button>
            </section>
        </section>
    </header>
    <section v-if="!isHeaderVisible" class="temporary-button">
        <section class="content">
            <button @click="toggleHeader(true)" class="toggle-button"><i class="fa-solid fa-angle-down"></i></button>
        </section>
    </section>
</template>

<script setup lang="ts">
import router from "@/router";
import { ref } from "vue";
import { useAchievementsStore } from "@/stores/achievments";

const achievmentStore = useAchievementsStore();
const isHeaderVisible = ref(true);

const infoPush = () => {
    achievmentStore.complete("Get Information");
    router.push('/about')
}


const toggleHeader = (visible: boolean) => {
    isHeaderVisible.value = visible;
    achievmentStore.complete("Max Focus");
};
</script>

<style lang="scss" scoped>
@use "sass:map";
@use "sass:color";
@use "@/assets/variables.scss" as *;


header {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgb(26, 26, 26);
    padding: 10px 0;
    transition: transform 0.5s ease-out;

    .content {
        width: var(--content-size);
        display: flex;
        align-items: center;
        justify-content: space-between;

        @media(max-width: 1445px) {
            margin: 0 20px;
        }

        .logo-container {
            width: auto;
            display: flex;
            align-items: center;
            gap: 10px;
            cursor: pointer;

            img {
                width: 70px;
            }

            h1 {
                font-size: map.get($font-sizes, "heading");
                color: map.get($foreground-colors, "primary");

                span {
                    color: map.get($foreground-colors, "secondary");
                }

                @media(max-width: 513px) {
                    display: none;
                }
            }
        }
        .button-container{
            display: flex;
            gap: 10px;
            align-items: center;
            justify-content: center;
            .reset-button{
                font-size: map.get($font-sizes, "normal");
                background-color: map.get($background-colors, "tertiary");
                color: map.get($foreground-colors, "primary");
                padding: 10px;
                border: 3px solid color.scale(map.get($background-colors, "tertiary"), $lightness: 20%);
                border-radius: 5px;
                box-shadow: 0 0 10px 3px rgba(180, 180, 180, 0.192);
                cursor: pointer;
            }
            .info-button{
                font-size: map.get($font-sizes, "normal");
                background-color: map.get($background-colors, "tertiary");
                color: map.get($foreground-colors, "primary");
                padding: 10px 17px;
                border: 3px solid color.scale(map.get($background-colors, "tertiary"), $lightness: 20%);
                border-radius: 50%;
                box-shadow: 0 0 10px 3px rgba(180, 180, 180, 0.192);
                cursor: pointer;
            }
        }
    }
}
.toggle-button{
    font-size: map.get($font-sizes, "small");
    padding: 0 5px;
    background-color: transparent;
    color: map.get($foreground-colors, "primary");
    border: none;
    cursor: pointer;
}

.temporary-button{
    display: flex;
    align-items: center;
    justify-content: center;
    .content{
        margin-top: 10px;
        display: flex;
        justify-content: end;
        width: var(--content-size);
        @media(max-width: 1445px){
            margin: 0 20px;
        }
    }
}
</style>