import { defineStore } from "pinia";
import { ref } from "vue";

export const useItemsStore = defineStore("items", () => {
    const items = ref([
        {
            label: "Leg Helper",
            image: new URL("@/assets/img/shop/leg-helper.png", import.meta.url).href,
            price: 100,
            count: 0,
            requiredScore: 0
        },
        {
            label: "Click XP",
            image: new URL("@/assets/img/shop/add-powerup.png", import.meta.url).href,
            price: 100,
            count: 0,
            requiredScore: 200
        },
        {
            label: "Stomach Helper",
            image: new URL("@/assets/img/shop/stomach-helper.png", import.meta.url).href,
            price: 100,
            count: 0,
            requiredScore: 200
        },

    ]);

    return { items };
});
