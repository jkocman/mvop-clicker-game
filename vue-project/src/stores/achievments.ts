import { defineStore } from "pinia";
import { ref } from "vue";

export const useAchievementsStore = defineStore("achievments", () => {
    const achievements = ref([
        {
            label: "First Shot",
            completed: false,
            image: "/img/idk.png"
        },
        {
            label: "New Upgrade",
            completed: false,
            image: "/img/idk.png"
        },
        {
            label: "All Parts",
            completed: false,
            image: "/img/idk.png"
        },
        {
            label: "Hidden",
            completed: false,
            image: "/img/idk.png"
        },
        {
            label: "All Helpers",
            completed: false,
            image: "/img/idk.png"
        },
        {
            label: "100k XP",
            completed: false,
            image: "/img/idk.png"
        },
        {
            label: "50 Of One Upgrade",
            completed: false,
            image: "/img/idk.png"
        },
        {
            label: "All Upgrades",
            completed: false,
            image: "/img/idk.png"
        },
        {
            label: "2 Milion XP",
            completed: false,
            image: "/img/idk.png"
        },
    ]);

    const completedRecently = ref<{ label: string; image: string }[]>([]);

    function complete(label: string) {
        const achievement = achievements.value.find(a => a.label === label);
        if (achievement && !achievement.completed) {
            achievement.completed = true;
            // Přidáme achievement do completedRecently
            completedRecently.value.push({ label: achievement.label, image: achievement.image });

            // Po 3 sekundách achievement odstraníme
            setTimeout(() => {
                completedRecently.value = completedRecently.value.filter(a => a.label !== achievement.label);
            }, 3000); // Nastavuje dobu zobrazení na 3 sekundy
        }
    }

    return {
        achievements,
        complete,
        completedRecently,
    }
});