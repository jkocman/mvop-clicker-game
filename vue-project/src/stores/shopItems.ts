import { defineStore } from "pinia";
import { ref } from "vue";
import { useAchievementsStore } from "./achievments";

export const useItemsStore = defineStore("items", () => {
    const items = ref([
        {
            label: "Leg Helper",
            image: "/img/shop/leg-helper.png",
            price: 50,
            count: 0,
            requiredScore: 0
        },
        {
            label: "Lower Cooldown",
            image: "/img/shop/lower-cooldown.png",
            price: 150,
            count: 0,
            requiredScore: 100
        },
        {
            label: "Stomach Helper",
            image: "/img/shop/stomach-helper.png",
            price: 380,
            count: 0,
            requiredScore: 300
        },
        {
            label: "Click XP",
            image: "/img/shop/add-powerup.png",
            price: 800,
            count: 0,
            requiredScore: 700
        },
        {
            label: "Torso Helper",
            image: "/img/shop/torso-helper.png",
            price: 1700,
            count: 0,
            requiredScore: 1500
        },
        {
            label: "Head Slowdown",
            image: "/img/shop/head-slowdown.png",
            price: 3200,
            count: 0,
            requiredScore: 3000
        },
        {
            label: "Head Helper",
            image: "/img/shop/head-helper.png",
            price: 12000,
            count: 0,
            requiredScore: 10000
        },
    ]);
    const priceMultiplier = 1.2;
    const achievementStore = useAchievementsStore();

    const incrementCount = (label: string) => {
        const item = items.value.find(item => item.label === label);
        if(item) {
            item.count++;
            item.price = Math.round(item.price * priceMultiplier);
        }
        if(items.value.some(i => i.count >= 1)) {
            achievementStore.complete('New Upgrade');
        }
        if(items.value.some(i => i.count >= 50)) {
            achievementStore.complete('50 Of One Upgrade');
        }
        if(items.value.every(i => i.count >= 1)){
            achievementStore.complete('All Upgrades');
        }

        const helperLabels = [
            "Leg Helper",
            "Stomach Helper",
            "Torso Helper",
            "Head Helper"
        ];
    
        const hasAllHelpers = helperLabels.every(helperLabel => {
            const helperItem = items.value.find(item => item.label === helperLabel);
            return helperItem && helperItem.count >= 1;
        });
    
        if (hasAllHelpers) {
            achievementStore.complete('All Helpers');
        }
    };
    return { items, incrementCount };
});
