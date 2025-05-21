<template>
    <main>
        <section class="content">
            <h1>Get all information here</h1>
            <InfoContainer title="Target" :heading="true" class="panel">
                <section class="article-content">
                    <section class="text">
                        <p>
                            This is your main shooting area. Click on different parts of the body to gain XP. Each area gives a different amount of XP depending on its difficulty and size.
                        </p>
                        <ul>
                            <li>Head – 4 XP per hit. The smallest and most rewarding area.</li>
                            <li>Torso – 3 XP per hit. Medium-sized and fairly easy to hit.</li>
                            <li>Stomach – 2 XP per hit. Easier target, lower XP.</li>
                            <li>Legs – 1 XP per hit. Largest area with the least XP.</li>
                        </ul>
                        <p>
                            After every shot, there is a cooldown before you can shoot again. This cooldown can be reduced using specific upgrades from the shop.
                            Your main goal is to collect as much XP as possible, improve your shooting efficiency, and unlock helpful features and achievements along the way.
                        </p>
                    </section>
                    <img class="image1" src="/img/ilustration-image1.png" alt="">
                </section>
            </InfoContainer>

            <InfoContainer title="Shop" :heading="true">
                <section class="article-content">
                    <section class="text">
                        <p>
                            Use your XP to buy upgrades that enhance your shooting skills and automate gameplay. Here's what you can get:
                        </p>
                        <ul>
                            <li>Leg Helper – Automatically shoots the leg area over time to generate passive XP.</li>
                            <li>Lower Cooldown – Reduces the time between shots so you can shoot more often.</li>
                            <li>Stomach Helper – Automatically shoots the stomach area over time to generate passive XP.</li>
                            <li>Click XP – Increases the XP you earn for each manual click, no matter where you hit.</li>
                            <li>Torso Helper – Automates shots to the torso zone, helping you earn XP hands-free.</li>
                            <li>Head Slowdown – Temporarily slows down the head movement, making it easier to aim and hit.</li>
                            <li>Head Helper – The most powerful auto-helper that targets the head for maximum XP gain.</li>
                        </ul>
                        <p>
                            These upgrades stack and persist, allowing you to play more efficiently and reach higher XP milestones.
                        </p>
                    </section>
                    <img class="image2" src="/img/ilustration-image2.png" alt="">
                </section>
            </InfoContainer>

            <InfoContainer title="Achievements" :heading="true">
                <section class="article-content">
                    <section class="text">
                        <p>
                            Achievements give you goals and bonus rewards for completing specific challenges or reaching major milestones. Try to unlock them all:
                        </p>
                        <ul>
                            <li>First Shot – Fire your very first shot in the game.</li>
                            <li>New Upgrade – Buy your first upgrade from the shop.</li>
                            <li>All Parts – Hit all four target areas (legs, stomach, torso, head) at least once.</li>
                            <li>Hidden – A secret achievement that requires a bit of exploration.</li>
                            <li>50 Of One Upgrade – Buy the same upgrade 50 times in total.</li>
                            <li>All Upgrades – Purchase every unique upgrade at least once.</li>
                            <li>2 Million XP – Reach a massive milestone of 2,000,000 total XP.</li>
                            <li>Get Information – Open this info panel. Yes, it really counts.</li>
                            <li>2000 Shots – Fire 2,000 shots overall during your sessions.</li>
                            <li>All Helpers – Own at least one of every auto-helper upgrade.</li>
                            <li>100k XP – Earn 100,000 XP in a single session.</li>
                            <li>Max Focus – Max out any one of the upgrade paths.</li>
                        </ul>
                        <p>
                            Track your progress, set goals, and aim for 100% completion. Some achievements are simple, others are hidden or require strategy to unlock.
                        </p>
                    </section>
                    <img class="image3" src="/img/ilustration-image5.png" alt="">
                </section>
            </InfoContainer>

        </section>
    </main>
</template>

<script lang="ts" setup>
import InfoContainer from '@/components/InfoContainer.vue';
</script>

<style lang="scss" scoped>
@use "../assets/variables" as *;
@use "sass:map";

main {
    display: flex;
    align-items: center;
    height: auto;
    justify-content: center;

    .content {
        margin-top: 12px;
        width: var(--content-size);
        gap: 30px;
        margin-bottom: 30px;
        display: flex;
        flex-direction: column;
        background-color: map.get($background-colors, "secondary");
        box-sizing: border-box;
        padding: 40px;
        box-shadow: 0 0 10px 1px rgba(180, 180, 180, 0.192);
        border-radius: 20px;

        @media (max-width: 1422px) {
            margin-left: 20px;
            margin-right: 20px;
        }
        @media (max-width: 400px) {
            padding: 10px;
        }

        h1{
            color: map.get($foreground-colors, "primary");
            font-size: map.get($font-sizes, "heading");
            text-align: center;
        }

        .article-content{
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 30px;
            gap: 40px;


            @media (max-width: 1229px) {
                flex-direction: column;
            }
            @media (max-width: 480px) {
                padding: 0;
            }

            img{
                border: 2px solid map.get($foreground-colors, "secondary");
                box-shadow: 0 0 10px 1px rgba(180, 180, 180, 0.192);
                border-radius: 20px;
            }
            .text{
                color: map.get($foreground-colors, "primary");
                font-size: map.get($font-sizes, "normal");
                display: flex;
                flex-direction: column;
                gap: 20px;

                ul{
                    list-style-type: disc;
                    padding-left: 20px;

                    li{
                        margin-bottom: 10px;
                    }
                }
            }
        }
    }
}
.image1{
    height: 500px;
    @media (max-width: 516px) {
        height: 300px;
    }
}
.image2{
    height: 400px;
    @media (max-width: 975px) {
        height: 218px;
    }
    @media (max-width: 691px) {
        height: 140px;
    }
    @media (max-width: 516px) {
        height: 80px;
    }
}
.image3{
    height: 202px;
    @media (max-width: 975px) {
        height: 120px;
    }
    @media (max-width: 691px) {
        height: 70px;
    }
    @media (max-width: 516px) {
        height: 60px;
    }
}
</style>
