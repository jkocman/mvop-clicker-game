import { defineStore } from "pinia";
import { ref, watch } from "vue";

export const useAchievementsStore = defineStore("achievments", () => {
    const achievements = ref([
        {
            label: "First Shot",
            completed: false,
            image: "/img/achievements/first-click.png"
        },
        {
            label: "New Upgrade",
            completed: false,
            image: "/img/achievements/sparkles.svg"
        },
        {
            label: "All Parts",
            completed: false,
            image: "/img/achievements/all-parts.webp"
        },
        {
            label: "Get Information",
            completed: false,
            image: "/img/achievements/circle-info-solid.svg"
        },
        {
            label: "Max Focus",
            completed: false,
            image: "/img/achievements/angle-down-solid.svg"
        },
        {
            label: "Hidden",
            completed: false,
            image: "/img/achievements/hidden-cat.png"
        },
        {
            label: "100k XP",
            completed: false,
            image: "/img/achievements/star-solid.svg"
        },
        {
            label: "All Upgrades",
            completed: false,
            image: "/img/achievements/circle-up-solid.svg"
        },
        {
            label: "All Helpers",
            completed: false,
            image: "/img/achievements/all-helpers.png"
        },
        {
            label: "50 Of One Upgrade",
            completed: false,
            image: "/img/50-powerups.png"
        },
        {
            label: "2 Milion XP",
            completed: false,
            image: "/img/achievements/2m.png"
        },
        {
            label: "2000 Shots",
            completed: false,
            image: "/img/achievements/2k.png"
        },
    ]);
    
    const saved = localStorage.getItem("completedAchievements");
    if (saved) {
        try {
            const parsed = JSON.parse(saved);
            if (Array.isArray(parsed)) {
                parsed.forEach((label: string) => {
                    const achievement = achievements.value.find(a => a.label === label);
                    if (achievement) achievement.completed = true;
                });
            } else {
                console.warn("Parsed data není validní pole:", parsed);
            }
        } catch (e) {
            console.warn("Chyba při parsování achievements:", e);
        }
    }

    watch(achievements, (updated) => {
        const completed = updated.filter(a => a.completed).map(a => a.label);
        try {
            localStorage.setItem("completedAchievements", JSON.stringify(completed));
        } catch (e) {
            console.warn("Chyba při ukládání do localStorage:", e);
        }
    }, { deep: true });

    const completedRecently = ref<{ label: string; image: string }[]>([]);

    function complete(label: string) {
        const achievement = achievements.value.find(a => a.label === label);
        if (achievement && !achievement.completed) {
            achievement.completed = true;
            completedRecently.value.push({ label: achievement.label, image: achievement.image });

            setTimeout(() => {
                completedRecently.value = completedRecently.value.filter(a => a.label !== achievement.label);
            }, 3000);
        }
    }

    return {
        achievements,
        complete,
        completedRecently,
    }
});
