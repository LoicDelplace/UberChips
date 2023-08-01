<template>
    <div class="review" v-for="review in reviews" :key="review.idReview">
        <h3>Avis de {{ review.nickname }}</h3>
        <p>"{{ review.content }}"</p>
        <div class="reviewStars">
            <img class="starImg" src="/images//starFull.svg" v-for="(star,index) in review.rating" :key="index">
            <img class="starImg" src="/images//starEmpty.svg" v-for="(star,index) in nbStarsMax-review.rating" :key="index">
        </div>
        <p class="reviewNote">Avis de {{ review.rating  }} / {{ nbStarsMax }}</p>
    </div>
</template>

<script setup>
import { ref } from 'vue';
const nbStarsMax = ref(5);

defineProps({
    reviews: {
        type: Object,
        required: true
    }
});

</script>

<style scoped lang="scss">
    .review{
        margin-bottom: 3em;
        text-align:center;
    }

    .starImg{
        display:inline;
        fill: #05386b;
        width: 3em;
        height: 3em;
    }

    .reviewNote {
        font-size: 1.2em;
        font-weight: bold;
    }
</style>