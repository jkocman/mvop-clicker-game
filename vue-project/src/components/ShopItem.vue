<template>
    <section class="item">
        <section class="description-container">
            <img :src="image" alt="" />
            <section>
                <h3>{{ label }}</h3>
                <p>{{ price }} <span>XP</span></p>
            </section>
        </section>
        <section class="price-container">
            <button>Buy</button>
            <p>{{ count }}</p>
        </section>
    </section>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

defineProps<{label: string, image: string | undefined, price: number, count: number}>();
</script>

<style lang="scss" scoped>
@use "../assets/variables" as *;
@use "sass:map";
@use "sass:color";

.item {
    background-color: map.get($background-colors, "primary");
    margin-top: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    border-radius: 10px;

    @media (max-width: 375px) {
        display: grid;
        grid-template-columns: 1fr;
    }

    .description-container {
        display: flex;
        align-items: center;
        gap: 20px;

        @media (max-width: 375px) {
            justify-content: space-between;
            border-bottom: 1px solid map.get($foreground-colors, "secondary");
            padding-bottom: 10px;
            margin-bottom: 10px;
        }

        img {
            width: 50px;
        }

        section {
            h3 {
                font-size: map.get($font-sizes, "normal");
                color: map.get($foreground-colors, "primary");
                margin-bottom: 10px;

                @media (max-width: 375px) {
                    text-align: end;
                }
            }

            p {
                font-size: map.get($font-sizes, "small");
                color: map.get($foreground-colors, "secondary");

                @media (max-width: 375px) {
                    text-align: end;
                }
            }
        }
    }

    .price-container {
        display: flex;
        align-items: center;
        gap: 20px;

        @media (max-width: 375px) {
            justify-content: space-between;
        }

        button {
            font-size: map.get($font-sizes, "normal");
            background-color: map.get($background-colors, "tertiary");
            color: map.get($foreground-colors, "primary");
            padding: 5px 20px;
            border: 3px solid color.scale(map.get($background-colors, "tertiary"), $lightness: 20%);
            border-radius: 5px;
            box-shadow: 0 0 10px 3px rgba(180, 180, 180, 0.192);
            cursor: pointer;
        }

        p {
            color: map.get($foreground-colors, "primary");
            font-size: map.get($font-sizes, "normal");
        }
    }
}
</style>
