import { ref, onMounted } from "vue";
import { useScoreStore } from "@/stores/scoreStore";
import { useItemsStore } from "@/stores/shopItems";
import { useMultiplayer } from "@/assets/composables/multiplier";

export function useOfflineBonus() {
    const scoreStore = useScoreStore();
    const itemsStore = useItemsStore();
    const multiplayer = useMultiplayer();
    
    const offlineBonus = ref(0);
    const bonusGranted = ref(false);

    const getPointsPerSecond = () => {
        const legHelpers = itemsStore.items.find(item => item.label === "Leg Helper");
        const stomachHelpers = itemsStore.items.find(item => item.label === "Stomach Helper");
        const torsoHelpers = itemsStore.items.find(item => item.label === "Torso Helper");
        const headHelpers = itemsStore.items.find(item => item.label === "Head Helper");

        let pointsPerSecond = 0;

        if (legHelpers) {
            pointsPerSecond += legHelpers.count * 1 * multiplayer.value;
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

        return pointsPerSecond;
    };

    onMounted(() => {
        const lastVisit = localStorage.getItem("lastVisit");

        if (lastVisit) {
            const secondsAway = Math.floor((Date.now() - parseInt(lastVisit)) / 1000);
            const pps = getPointsPerSecond();
            const bonus = Math.floor(pps * secondsAway * 0.25);

            if (bonus > 0) {
                scoreStore.addPoints(bonus);
                offlineBonus.value = bonus;
                bonusGranted.value = true;
            }

            localStorage.removeItem("lastVisit");
        }
    });

    return {
        offlineBonus,
        bonusGranted
    };
}
