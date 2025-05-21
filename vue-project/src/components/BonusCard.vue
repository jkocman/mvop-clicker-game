<template>
    <article v-if="showBonus" class="overlay" @click="closeBonus">
        <section class="bonus-card" @click.stop>
            <p>Welcome Back, you got {{ offlineBonus }} XP, while you was away.</p>
        </section>
    </article>
    <article v-if="showCompletion" class="overlay" @click="closeBonus">
        <section class="bonus-card" @click.stop>
            <p>Completed!</p>
        </section>
    </article>
</template>

<script lang="ts" setup>
import { useOfflineBonus } from "@/assets/composables/offlineXP";
import { ref, watch } from "vue";
import { useAchievementsStore } from "@/stores/achievments";

const { offlineBonus, bonusGranted } = useOfflineBonus();
const achievementsStore = useAchievementsStore();

const showBonus = ref(false);
const showCompletion = ref(false);

watch(bonusGranted, (newVal) => {
  if (newVal) {
    showBonus.value = true;
  }
});

watch(
  () => achievementsStore.achievements,
  (achievements) => {
    if (
      achievements.length > 0 &&
      achievements.every((a) => a.completed)
    ) {
      showCompletion.value = true;
    }
  },
  { deep: true, immediate: true }
);

// Zavírání overlaye
const closeBonus = () => {
  showBonus.value = false;
  showCompletion.value = false;
};
</script>


<style lang="scss" scoped>
@use "@/assets/variables" as *;
@use "sass:map";

.overlay {
position: fixed;
top: 0;
left: 0;
width: 100vw;
height: 100vh;
background: rgba(0, 0, 0, 0.6);
display: flex;
justify-content: center;
align-items: center;
z-index: 999;
}

.bonus-card {
background-color: map.get($background-colors, "secondary");
color: map.get($foreground-colors, "primary");
padding: 25px 40px;
border-radius: 15px;
box-shadow: 0 8px 20px rgba(0, 0, 0, 0.6);
font-size: map.get($font-sizes, "large");
max-width: 90%;
text-align: center;
}
</style>
