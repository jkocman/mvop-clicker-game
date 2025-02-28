<template>
    <Header></Header>
    <main>
        <section class="content">
            <Target></Target>
            <Shop></Shop>
            <Achievments></Achievments>
        </section>
    </main>
</template>

<script setup lang="ts">
import Header from "@/sections/Header.vue";
import Target from "@/sections/Target.vue";
import Shop from "@/sections/Shop.vue";
import Achievments from "@/sections/Achievments.vue";
</script>

<style lang="scss" scoped>
@use "./assets/variables" as *;
@use "sass:map";

body {
    background-color: map.get($background-colors, "primary");
}
</style>
