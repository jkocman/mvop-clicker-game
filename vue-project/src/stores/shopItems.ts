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
            requiredScore: 300
        },
        {
            label: "Stomach Helper",
            image: new URL("@/assets/img/shop/stomach-helper.png", import.meta.url).href,
            price: 100,
            count: 0,
            requiredScore: 1000
        },
        {
            label: "Torso Helper",
            image: new URL("@/assets/img/shop/torso-helper.png", import.meta.url).href,
            price: 100,
            count: 0,
            requiredScore: 20000
        },
        {
            label: "Head Helper",
            image: new URL("@/assets/img/shop/head-helper.png", import.meta.url).href,
            price: 100,
            count: 0,
            requiredScore: 100000
        },

    ]);

    const incrementCount = (label: string) => {
        const item = items.value.find(item => item.label === label);
        if (item) {
            item.count++;
            item.price *= 4;
        }
    };

    return { items, incrementCount };
});
