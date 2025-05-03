<template>
    <Header></Header>
    <router-view />
</template>

<script lang="ts" setup>
import Header from './components/Header.vue';

window.addEventListener("beforeunload", () => {
    localStorage.setItem("lastVisit", Date.now().toString());
});
</script>