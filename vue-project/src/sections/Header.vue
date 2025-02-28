<template>
    <header>
        <section class="content">
            <section class="logo-container">
                <img src="../assets/img/target.png" alt="">
                <h1>Target <span>Shooter</span></h1>
            </section>
            <section class="button-container">
                <Button label="Reset Game" type="main"></Button>
                <Button class="toggle-button-up" type="secondary">
                    <i class="fa-solid fa-angle-up"></i>
                </Button>
            </section>
        </section>
    </header>
    <section class="temporary-button">
        <section class="content">
            <Button class="toggle-button-up" type="secondary"><i class="fa-solid fa-angle-down"></i></Button>
        </section>
    </section>
</template>

<script setup lang="ts">
import Button from "@/components/Button.vue";
</script>

<style lang="scss" scoped>
@use "sass:map";
@use "sass:color";
@use "../assets/variables.scss" as *;


header {
    font-family: $main-font;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgb(26, 26, 26);
    padding: 10px 0;
    transition: transform 0.5s ease-out;

    .content {
        width: var(--content-size);
        display: flex;
        align-items: center;
        justify-content: space-between;

        @media(max-width: 1445px) {
            margin: 0 20px;
        }

        .logo-container {
            width: auto;
            display: flex;
            align-items: center;
            gap: 10px;

            img {
                width: 70px;
            }

            h1 {
                font-size: map.get($font-sizes, "heading");
                color: map.get($foreground-colors, "primary");

                span {
                    color: map.get($foreground-colors, "secondary");
                }

                @media(max-width: 513px) {
                    display: none;
                }
            }
        }
    }
}
</style>