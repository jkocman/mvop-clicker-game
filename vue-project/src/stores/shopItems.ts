import { defineStore } from "pinia";
import { ref } from "vue";

export const useItemsStore = defineStore("items", () => {
    const items = ref([
        {
            label: "Leg Helper",
            image: new URL("@/assets/img/shop/leg-helper.png", import.meta.url).href,
            price: 50,
            count: 0,
            requiredScore: 0
        },
        {
            label: "Lower Cooldown",
            image: new URL("@/assets/img/shop/lower-cooldown.png", import.meta.url).href,
            price: 150,
            count: 0,
            requiredScore: 100
        },
        {
            label: "Stomach Helper",
            image: new URL("@/assets/img/shop/stomach-helper.png", import.meta.url).href,
            price: 380,
            count: 0,
            requiredScore: 300
        },
        {
            label: "Click XP",
            image: new URL("@/assets/img/shop/add-powerup.png", import.meta.url).href,
            price: 800,
            count: 0,
            requiredScore: 700
        },
        {
            label: "Torso Helper",
            image: new URL("@/assets/img/shop/torso-helper.png", import.meta.url).href,
            price: 1700,
            count: 0,
            requiredScore: 1500
        },
        {
            label: "Head Slowdown",
            image: new URL("@/assets/img/shop/add-powerup.png", import.meta.url).href,
            price: 3200,
            count: 0,
            requiredScore: 3000
        },
        {
            label: "Head Helper",
            image: new URL("@/assets/img/shop/head-helper.png", import.meta.url).href,
            price: 12000,
            count: 0,
            requiredScore: 10000
        },
    ]);
    const priceMultiplier = 1.2;

    const incrementCount = (label: string) => {
        const item = items.value.find(item => item.label === label);
        if (item) {
            item.count++;
            item.price = Math.round(item.price * priceMultiplier);
        }
    };
    return { items, incrementCount };
});
