import { computed } from "vue";
import { useItemsStore } from "@/stores/shopItems";

export function useMultiplayer() {
    const itemsStore = useItemsStore();

    return computed(() => {
        const clickXp = itemsStore.items.find(item => item.label === "Click XP");
        const result: number = clickXp && clickXp.count !== 0 ? clickXp.count * 2 : 1;
        return result;
    });
}