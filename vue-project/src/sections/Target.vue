<template>
    <section class="target-container">
        <section class="target-section">
            <p>XP: <span>0</span></p>
            <div class="target-wrapper">
                <img src="@/assets/img/clicker-guy.png" alt="" class="figure-image">
                <img src="@/assets/img/target-outlined.png" alt="Target" class="target">
            </div>
            <button>Shoot</button>
        </section>
    </section>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
@use "../assets/variables" as *;
@use "sass:map";
@use "sass:color";


.target-container { 
    display: flex;
    align-items: center;
    justify-content: flex-start;
    grid-row: span 3;
    gap: 50px;
    @media(max-width: 1445px){
        margin-left: 20px;
    }
    @media(max-width: 780px){
        justify-content: center;
        background-color: map.get($background-colors, "secondary");
        border-radius: 20px;
        margin-right: 20px;
        box-shadow: 0 0 10px 3px rgba(180, 180, 180, 0.192);
    }

    .target-section {
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: map.get($background-colors, "secondary");
        padding: 20px;
        border-radius: 20px;
        box-shadow: 0 0 10px 3px rgba(180, 180, 180, 0.192);
        @media(max-width: 780px){
            background-color: transparent;
            box-shadow: none;
        }

        p{
            font-size: map.get($font-sizes, "heading");
            color: map.get($foreground-colors, "primary");
            @media (max-height: 610px){
                font-size: 25px;
            }
        }

        .target-wrapper{
            position: relative;
            display: inline-block;

            .target {
                position: absolute;
                top: 0;
                left: 50%;
                transform: translateX(-50%);
                width: 70px;
                @media (max-height: 910px){
                    width: 65px;
                }
                @media (max-height: 835px){
                    width: 60px;
                }
                @media (max-height: 785px){
                    width: 50px;
                }
                @media (max-height: 695px){
                    width: 45px;
                }
                @media (max-height: 610px){
                    width: 40px;
                }
            }
    
            .figure-image{
                width: 210px;
                position: block;

                @media (max-height: 910px){
                    width: 190px;
                }
                @media (max-height: 835px){
                    width: 170px;
                }
                @media (max-height: 785px){
                    width: 143px;
                }
                @media (max-height: 695px){
                    width: 113px;
                }
                @media (max-height: 610px){
                    width: 96px;
                }
            }
        }

        button{
            font-size: map.get($font-sizes, "normal");
            background-color: map.get($background-colors, "tertiary");
            color: map.get($foreground-colors, "primary");
            padding: 10px 120px;
            border: 3px solid color.scale(map.get($background-colors, "tertiary"), $lightness: 20%);
            border-radius: 5px;
            box-shadow: 0 0 10px 3px rgba(180, 180, 180, 0.192);
            cursor: pointer;

            @media(max-width: 375px){
                padding: 10px 50px;
            }
        }
    }
}
</style>