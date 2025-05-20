import { useScoreStore } from "@/stores/scoreStore";
import { useItemsStore } from "@/stores/shopItems";
import { useMultiplayer } from "./multiplier";
import { useDelayStore } from "@/stores/delay";
import { watch } from "vue";
import { storeToRefs } from 'pinia';


export function useHelperUpgrades() {
    const scoreStore = useScoreStore();
    const itemsStore = useItemsStore();
    const multiplayer = useMultiplayer();

    let lastTime = performance.now();
    let accumulatedPoints = 0;

    const updatePoints = (currentTime: number) => {
        const deltaTime = (currentTime - lastTime) / 1000;
        lastTime = currentTime;

        const legHelpers = itemsStore.items.find(item => item.label === "Leg Helper");
        const stomachHelpers = itemsStore.items.find(item => item.label === "Stomach Helper");
        const torsoHelpers = itemsStore.items.find(item => item.label === "Torso Helper");
        const headHelpers = itemsStore.items.find(item => item.label === "Head Helper");

        let pointsPerSecond = 0;

        if (legHelpers) {
            pointsPerSecond += legHelpers.count * multiplayer.value;
        }
        if (stomachHelpers) {
            pointsPerSecond += stomachHelpers.count * 2 * multiplayer.value;
        }
        if (torsoHelpers) {
            pointsPerSecond += torsoHelpers.count * 3 * multiplayer.value;
        }
        if (headHelpers) {
            pointsPerSecond += headHelpers.count * 4 * multiplayer.value;
        }

        accumulatedPoints += pointsPerSecond * deltaTime;

        const wholePoints = Math.floor(accumulatedPoints);
        if (wholePoints > 0) {
            scoreStore.addPoints(wholePoints);
            accumulatedPoints -= wholePoints;
        }

        requestAnimationFrame(updatePoints);
    };

    requestAnimationFrame(updatePoints);
}

export function useCooldownUpgrade() {
    const itemsStore = useItemsStore();
    const delayStore = useDelayStore();

    const { delay, lowByThis } = storeToRefs(delayStore);

    watch(
        () => itemsStore.items.find(item => item.label === "Lower Cooldown")?.count,
        () => {

            if(delay.value < 0){
                delay.value = 0;
                lowByThis.value = 0;
                return;
            }

            delay.value -= lowByThis.value;
            lowByThis.value -= Math.floor(lowByThis.value * 0.1);
        }
    );
}