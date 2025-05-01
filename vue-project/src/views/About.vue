<template>
    <main>
        <section class="content">
            <InfoContainer title="Target" :heading="true" class="panel">
                <section class="article-content">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
                        dolorem ipsam fuga harum voluptate, doloremque numquam nostrum
                        voluptates fugiat cum commodi. Voluptates laboriosam magnam soluta
                        commodi nostrum delectus? Enim, doloribus?
                    </p>
                    <img class="image1" src="/img/ilustration-image1.png" alt="">
                </section>
            </InfoContainer>
            <InfoContainer title="Shop" :heading="true">
                <section class="article-content">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
                        dolorem ipsam fuga harum voluptate, doloremque numquam nostrum
                        voluptates fugiat cum commodi. Voluptates laboriosam magnam soluta
                        commodi nostrum delectus? Enim, doloribus?
                    </p>
                    <img class="image2" src="/img/ilustration-image2.png" alt="">
                </section>
            </InfoContainer>
            <InfoContainer title="Achievments" :heading="true">
                <section class="article-content">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
                        dolorem ipsam fuga harum voluptate, doloremque numquam nostrum
                        voluptates fugiat cum commodi. Voluptates laboriosam magnam soluta
                        commodi nostrum delectus? Enim, doloribus?
                    </p>
                    <img class="image3" src="/img/ilustration-image3.png" alt="">
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

        .article-content{
            display: flex;
            justify-content: center;
            padding: 30px;
            gap: 40px;

            img{
                border: 2px solid map.get($foreground-colors, "secondary");
                box-shadow: 0 0 10px 1px rgba(180, 180, 180, 0.192);
                border-radius: 20px;
            }
            p{
                color: map.get($foreground-colors, "primary");
                font-size: map.get($font-sizes, "normal");
            }
        }
    }
}
.image1{
    height: 500px;
}
.image2{
    height: 400px;
}
.image3{
    height: 215px;
}
</style>
