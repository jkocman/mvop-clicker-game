import { defineStore } from "pinia";
import { ref, watch } from "vue";

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
    
    // Ověření, zda v localStorage existuje platná hodnota pro "completedAchievements"
    const saved = localStorage.getItem("completedAchievements");
    if (saved) {
        try {
            // Zkusit přečíst a zpracovat data z localStorage
            const parsed = JSON.parse(saved);
            if (Array.isArray(parsed)) {
                // Pokud je parsed platné pole, aktualizuj status completed
                parsed.forEach((label: string) => {
                    const achievement = achievements.value.find(a => a.label === label);
                    if (achievement) achievement.completed = true;
                });
            } else {
                // Pokud parsed není pole, ignoruj to (můžeš přidat log pro diagnostiku)
                console.warn("Parsed data není validní pole:", parsed);
            }
        } catch (e) {
            // Pokud dojde k chybě při parsování JSON, loguj varování
            console.warn("Chyba při parsování achievements:", e);
        }
    }

    // Sleduj změny v achievements a ukládej je do localStorage
    watch(achievements, (updated) => {
        const completed = updated.filter(a => a.completed).map(a => a.label);
        try {
            // Ukládej pouze platné completedAchievements do localStorage
            localStorage.setItem("completedAchievements", JSON.stringify(completed));
        } catch (e) {
            // Pokud dojde k chybě při ukládání do localStorage, loguj varování
            console.warn("Chyba při ukládání do localStorage:", e);
        }
    }, { deep: true });

    const completedRecently = ref<{ label: string; image: string }[]>([]);

    // Funkce pro označení achievementu jako dokončeného
    function complete(label: string) {
        const achievement = achievements.value.find(a => a.label === label);
        if (achievement && !achievement.completed) {
            achievement.completed = true;
            completedRecently.value.push({ label: achievement.label, image: achievement.image });

            // Po 3 sekundách odstranit achievement ze seznamu nedávno dokončených
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
