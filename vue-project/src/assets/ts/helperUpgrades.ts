import { useScoreStore } from "@/stores/scoreStore";
import { useItemsStore } from "@/stores/shopItems";
import { useMultiplayer } from "./multiplayer";


export function useHelperUpgrades(){

    const scoreStore = useScoreStore();
    const itemsStore = useItemsStore();
    const multiplayer = useMultiplayer();

    setInterval(() => {
        const legHelpers = itemsStore.items.find(item => item.label === "Leg Helper");
        const stomachHelpers = itemsStore.items.find(item => item.label === "Stomach Helper");
        const torsoHelpers = itemsStore.items.find(item => item.label === "Torso Helper");
        const headHelpers = itemsStore.items.find(item => item.label === "Head Helper");
        if (legHelpers) {
            scoreStore.addPoints(legHelpers.count);
        }
        if (stomachHelpers) {
            scoreStore.addPoints(stomachHelpers.count * 2 * multiplayer.value);
        }
        if (torsoHelpers) {
            scoreStore.addPoints(torsoHelpers.count * 3 * multiplayer.value);
        }
        if (headHelpers) {
            scoreStore.addPoints(headHelpers.count * 4 * multiplayer.value);
        }
    }, 2000);
}
