<script setup>
const props = defineProps({
    img_1: {
        type: String,
        default: '',
    },
    title_1: {
        type: String,
        default: '籌備中',
    },
    content_1: {
        type: String,
        default: '',
    },
    img_2: {
        type: String,
        default: '',
    },
    title_2: {
        type: String,
        default: '',
    },
    content_2: {
        type: String,
        default: '',
    }
})
</script>

<template>
    <main>
        <div class="photoSize center">
            <div class="photo center" :style="{ backgroundImage: `url(${`${props.img_1}`})` }"></div>
            <p class="text">{{ props.title_1 }}</p>
            <p class="text_content">{{ props.content_1 }}</p>
        </div>
        <div class="photoSize  center">
            <div class="photo center" :style="{ backgroundImage: `url(${`${props.img_2}`})` }"></div>
            <p class="text">{{ props.title_2 }}</p>
            <p class="text_content">{{ props.content_2 }}</p>
        </div>

    </main>
</template>

<style lang="scss" scoped>
main {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 6vw;
}

.photoSize {
    flex-direction: column;
    position: relative;
    cursor: pointer;
    width: 35vw;
    height: 30vw;
    border: 4px double #eab76e;
}

.photo {
    background-size: cover;
    background-repeat: no-repeat;
    position: absolute;
    opacity: 0.2;
    width: 100%;
    height: 100%;
    z-index: -1;
}

.text {
    font-size: 52px;
    color: var(--gold_1);
    margin-bottom: 12px;
}

.text_content {
    font-size: 18px;
    color: white;
}



.photoSize:hover .photo {
    transition: all 0.5s;
    opacity: 1;
}



.photoSize:hover .text {
    transition: all 0.5s;
    opacity: 0;
}



.photoSize:hover .text_content {
    transition: all 0.5s;
    opacity: 0;
}

@media screen and (max-width:880px) {
    .text {
        font-size: 40px;
    }
}

@media screen and (max-width:700px) {
    main {
        flex-direction: column;
    }

    .photoSize {
        width: 38vw;
        height: 30vw;
    }


}
</style>
