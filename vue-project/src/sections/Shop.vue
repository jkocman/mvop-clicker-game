<template>
    <section class="shop">
        <h2>Shop</h2>
        <section class="item-container">
            <section class="item">
                <section class="description-container">
                    <img src="@/assets/img/shop/leg-helper.png" alt="">
                    <section>
                        <h3>Leg Helper</h3>
                        <p>100 <span>XP</span></p>
                    </section>
                </section>
                <section class="price-container">
                    <button>Buy</button>
                    <p>0</p>
                </section>
            </section>
            <section class="item">
                <section class="description-container">
                    <img src="@/assets/img/shop/add-powerup.png" alt="">
                    <section>
                        <h3>Click XP</h3>
                        <p>100 <span>XP</span></p>
                    </section>
                </section>
                <section class="price-container">
                    <button>Buy</button>
                    <p>0</p>
                </section>
            </section>
            <section class="item">
                <section class="description-container">
                    <img src="@/assets/img/shop/stomach-helper.png" alt="">
                    <section>
                        <h3>Stomach Helper</h3>
                        <p>100 <span>XP</span></p>
                    </section>
                </section>
                <section class="price-container">
                    <button>Buy</button>
                    <p>0</p>
                </section>
            </section>
            <section class="item">
                <section class="description-container">
                    <img src="@/assets/img/shop/torso-helper.png" alt="">
                    <section>
                        <h3>Torso Helper</h3>
                        <p>100 <span>XP</span></p>
                    </section>
                </section>
                <section class="price-container">
                    <button>Buy</button>
                    <p>0</p>
                </section>
            </section>
            <section class="item">
                <section class="description-container">
                    <img src="@/assets/img/shop/head-helper.png" alt="">
                    <section>
                        <h3>Head Helper</h3>
                        <p>100 <span>XP</span></p>
                    </section>
                </section>
                <section class="price-container">
                    <button>Buy</button>
                    <p>0</p>
                </section>
            </section>
        </section>
    </section>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
@use "../assets/variables" as *;
@use "sass:map";
@use "sass:color";

.shop{
    grid-row: span 2;
    border-radius: 20px;
    background-color: map.get($background-colors, "secondary");
    padding: 20px;
    box-shadow: 0 0 10px 1px rgba(180, 180, 180, 0.192);
    overflow-y: auto;
    scrollbar-width: none;
    @media(max-width: 1445px){
        margin-right: 20px;
    }
    @media(max-width: 780px){
        margin-left: 20px;
    }

    h2{
        text-align: center;
        font-size: map.get($font-sizes, "heading");
        color: map.get($foreground-colors, "primary");
        border-bottom: 2px solid map.get($foreground-colors, "secondary");
        padding-bottom: 5px;
    }
    .item-container{
        .item{
            background-color: map.get($background-colors, "primary");
            margin-top: 10px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 10px;
            border-radius: 10px;
            @media(max-width: 375px){
                display: grid;
                grid-template-columns: 1fr;
            }
            .description-container{
                display: flex;
                align-items: center;
                gap: 20px;

                @media(max-width: 375px){
                    justify-content: space-between;
                    border-bottom: 1px solid map.get($foreground-colors, "secondary");
                    padding-bottom: 10px;
                    margin-bottom: 10px;
                }

                img{
                    width: 50px;
                }
                section{
                    h3{
                        font-size: map.get($font-sizes, "normal");
                        color: map.get($foreground-colors, "primary");
                        margin-bottom: 10px;

                        @media(max-width: 375px){
                            text-align: end;
                        }
                    }
                    p{
                        font-size: map.get($font-sizes, "small");
                        color: map.get($foreground-colors, "secondary");

                        @media(max-width: 375px){
                            text-align: end;
                        }
                    }
                }
            }
            .price-container{
                display: flex;
                align-items: center;
                gap: 20px;

                @media(max-width: 375px){
                    justify-content: space-between;
                }

                button{
                    font-size: map.get($font-sizes, "normal");
                    background-color: map.get($background-colors, "tertiary");
                    color: map.get($foreground-colors, "primary");
                    padding: 5px 20px;
                    border: 3px solid color.scale(map.get($background-colors, "tertiary"), $lightness: 20%);
                    border-radius: 5px;
                    box-shadow: 0 0 10px 3px rgba(180, 180, 180, 0.192);
                    cursor: pointer;
                }
                p{
                    color: map.get($foreground-colors, "primary");
                    font-size: map.get($font-sizes, "normal");
                }
            }
        }
    }
}

.shop::-webkit-scrollbar {
    display: none;
}
</style>