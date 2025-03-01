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

main{
    display: flex;
    align-items: center;
    height: auto;
    justify-content: center;
    .content{
        margin-top: 12px;
        width: var(--content-size);
        display: grid;
        grid-template-columns: 1fr 2fr;
        grid-template-rows: 252px 252px 252px;
        gap: 20px;
        margin-bottom: 10px;

        @media (max-width: 780px){
            grid-template-columns: 1fr;
            grid-template-rows: auto;
        }

        @media (max-height: 910px){
            grid-template-rows: 230px 230px 230px;
        }
        @media (max-height: 835px){
            grid-template-rows: 210px 210px 210px;
        }
        @media (max-height: 785px){
            grid-template-rows: 180px 180px 180px;
        }
        @media (max-height: 695px){
            grid-template-rows: 150px 150px 150px;
        }
        @media (max-height: 610px){
            grid-template-rows: 130px 130px 130px;
        }
    }
}
</style>
