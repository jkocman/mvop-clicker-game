<template>
    <section class="target-container">
        <section class="target-section">
            <p>XP: <span>{{ scoreStore.totalScore }}</span></p>
            <div class="target-wrapper" ref="wrapper">
                <img src="/img/clicker-guy.png" alt="" class="figure-image" ref="figureImage">
                <p v-for="point in pointsPositions" :key="point.value" class="points" :style="{ top: point.top }">
                    {{ point.value }}
                </p>
                <img src="/img/target-outlined.png" alt="Target" class="target" ref="target">
            </div>
            <button @click="saveScore()" :class="buttonClass" ref="shootButton">Shoot</button>
        </section>
    </section>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from "vue";
import { useScoreStore } from "@/stores/scoreStore";
import { useDelayStore } from "@/stores/delay";
import { useTargetAnimation } from "@/assets/composables/targetAnimation";
import { useHelperUpgrades, useCooldownUpgrade } from "@/assets/composables/upgrades";
import { useMultiplayer } from "@/assets/composables/multiplier";
import { computed } from "@vue/reactivity";

const target = ref<any>();
const wrapper = ref<any>();
const figureImage = ref<any>();
const pointsPositions = ref<{ value: number, top: string }[]>([]);
const bodypart = ref("");

const scoreStore = useScoreStore();
const delayStore = useDelayStore();
const animateTarget = useTargetAnimation(wrapper, target, bodypart);
const multiplayer = useMultiplayer();

const calculatePointsPositions = () => {
    if (!wrapper.value) return;

    const containerHeight = wrapper.value.clientHeight;
    const bounds = [
        { value: 4 * multiplayer.value, top: `${containerHeight * 0.06}px` },
        { value: 3 * multiplayer.value, top: `${containerHeight * 0.2}px` },
        { value: 2 * multiplayer.value, top: `${containerHeight * 0.4}px` },
        { value: 1 * multiplayer.value, top: `${containerHeight * 0.70}px` },
    ];

    pointsPositions.value = bounds;
};

watch(multiplayer, () => {
    calculatePointsPositions();
});

const canShoot = ref(true);

const shootSound = new Audio("/sounds/loaded_shot_sound_effect.mp3");
const cooldownSound = new Audio("/sounds/dry_shot_sound_effect.mp3");

shootSound.volume = 0.2;
cooldownSound.volume = 0.2;

const saveScore = () => {

    if (!canShoot.value) {
        cooldownSound.currentTime = 0;
        cooldownSound.play();
        return;
    }

    shootSound.currentTime = 0;
    shootSound.play();

    canShoot.value = false;
    let points = 0;

    if (bodypart.value === "head") {
        points = 4;
    } else if (bodypart.value === "torso") {
        points = 3;
    } else if (bodypart.value === "stomach") {
        points = 2;
    } else if (bodypart.value === "legs") {
        points = 1;
    }

    points *= multiplayer.value;
    scoreStore.addPoints(points);
    console.log(delayStore.delay);

    setTimeout(() => {
        canShoot.value = true;
    }, delayStore.delay)
}

const buttonClass = computed(() => {
    if (canShoot.value) {
        return 'shoot';
    }
    else {
        return 'shoot-cant'
    }
});

onMounted(() => {
    animateTarget.animateTarget();
    useHelperUpgrades();
    useCooldownUpgrade();
    figureImage.value.onload = calculatePointsPositions;
    window.addEventListener("resize", calculatePointsPositions);
});
</script>

<style lang="scss" scoped>
@use "../assets/variables" as *;
@use "sass:map";
@use "sass:color";


.target-container {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    grid-row: span 3;
    gap: 50px;

    @media(max-width: 1445px) {
        margin-left: 20px;
    }

    @media(max-width: 780px) {
        justify-content: center;
        background-color: map.get($background-colors, "secondary");
        border-radius: 20px;
        margin-right: 20px;
        box-shadow: 0 0 10px 3px rgba(180, 180, 180, 0.192);
    }

    .target-section {
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: map.get($background-colors, "secondary");
        padding: 20px;
        border-radius: 20px;
        box-shadow: 0 0 10px 3px rgba(180, 180, 180, 0.192);

        @media(max-width: 780px) {
            background-color: transparent;
            box-shadow: none;
        }

        p {
            font-size: map.get($font-sizes, "heading");
            color: map.get($foreground-colors, "primary");

            @media (max-height: 610px) {
                font-size: 25px;
            }
        }

        .target-wrapper {
            position: relative;
            display: inline-block;

            .target {
                position: absolute;
                left: 50%;
                transform: translateX(-50%);
                width: 70px;

                @media (max-height: 910px) {
                    width: 65px;
                }

                @media (max-height: 835px) {
                    width: 60px;
                }

                @media (max-height: 785px) {
                    width: 50px;
                }

                @media (max-height: 695px) {
                    width: 45px;
                }

                @media (max-height: 610px) {
                    width: 40px;
                }
            }

            .figure-image {
                width: 210px;
                position: block;

                @media (max-height: 910px) {
                    width: 190px;
                }

                @media (max-height: 835px) {
                    width: 170px;
                }

                @media (max-height: 785px) {
                    width: 143px;
                }

                @media (max-height: 695px) {
                    width: 113px;
                }

                @media (max-height: 610px) {
                    width: 96px;
                }
            }

            .points {
                position: absolute;
                left: 50%;
                transform: translateX(-50%);
            }
        }

        .shoot {
            font-size: map.get($font-sizes, "normal");
            background-color: map.get($background-colors, "tertiary");
            color: map.get($foreground-colors, "primary");
            padding: 10px 120px;
            border: 3px solid color.scale(map.get($background-colors, "tertiary"), $lightness: 20%);
            border-radius: 5px;
            box-shadow: 0 0 10px 3px rgba(180, 180, 180, 0.192);
            cursor: pointer;

            @media(max-width: 375px) {
                padding: 10px 50px;
            }
        }

        .shoot-cant {
            font-size: map.get($font-sizes, "normal");
            background-color: gray;
            color: map.get($foreground-colors, "primary");
            padding: 10px 120px;
            border: 3px solid color.scale(gray, $lightness: 20%);
            border-radius: 5px;
            box-shadow: 0 0 10px 3px rgba(180, 180, 180, 0.192);
            cursor: pointer;

            @media(max-width: 375px) {
                padding: 10px 50px;
            }
        }
    }
}
</style>