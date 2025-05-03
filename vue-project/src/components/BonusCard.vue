<template>
    <div v-if="showBonus" class="overlay" @click="closeBonus">
        <div class="bonus-card" @click.stop>
        Vítej zpět! Získal jsi {{ offlineBonus }} XP, zatímco jsi byl pryč.
        </div>
    </div>
</template>

<script lang="ts" setup>
import { useOfflineBonus } from "@/assets/composables/offlineXP";
import { ref, watch } from "vue";

const { offlineBonus, bonusGranted } = useOfflineBonus();
const showBonus = ref(false);

watch(bonusGranted, (newVal) => {
if (newVal) {
    showBonus.value = true;
}
});

const closeBonus = () => {
showBonus.value = false;
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
